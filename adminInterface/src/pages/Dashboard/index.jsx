import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Table.css";
import { useEffect, useState } from "react";
import { Table, Checkbox } from "@mantine/core";
import {
  FunnelSimple,
  MagnifyingGlass,
  UserCircle,
} from "@phosphor-icons/react";
import {
  Container,
  BoxTable,
  BoxHeader,
  Filter,
  FilterTitle,
  BoxFilterInput,
  FilterInput,
  UserBox,
} from "./style";
import { listarAgendamentos, marcarComoAtendido } from "../../Service/api";
import { useAuth } from "../../Context/useAuth";

export function Dashboard() {
  const { user } = useAuth();

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [agendamentos, setAgendamentos] = useState([]);
  const [filtroNome, setFiltroNome] = useState("");
  const [adminName, setAdminName] = useState("");

  const formatarData = (dataISO) => {
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  useEffect(() => {
    if (user?.token) {
      setAdminName(user.nome || "Usuário");

      const fetchAgendamentos = async () => {
        try {
          const data = await listarAgendamentos(user.token);

          const hoje = new Date().toISOString().split("T")[0];
          const agendamentosHoje = data.filter(
            (agendamento) => agendamento.data === hoje && !agendamento.atendido
          );
          const agendamentosOrdenados = agendamentosHoje.sort((a, b) =>
            a.horario.localeCompare(b.horario)
          );

          setAgendamentos(agendamentosOrdenados);
        } catch (error) {
          console.error("Erro ao buscar agendamentos:", error.message);
        }
      };

      if (user?.token) {
        fetchAgendamentos();
      }
    }
  }, [user]);

  const toggleRow = (id) => {
    setSelectedRows((prev) => {
      const newSelected = new Set(prev);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const marcarAgendamentoComoAtendido = async (id) => {
    if (!user?.token) return;

    try {
      await marcarComoAtendido(id, user.token);

      setAgendamentos((prev) =>
        prev.filter((agendamento) => agendamento._id !== id)
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const agendamentosFiltrados = agendamentos.filter((agendamento) =>
    agendamento.nome.toLowerCase().includes(filtroNome.toLowerCase())
  );

  return (
    <Container>
      <BoxHeader>
        <Filter>
          <FilterTitle>
            <h3>Filtro</h3>
            <FunnelSimple size={25} />
          </FilterTitle>
          <BoxFilterInput>
            <FilterInput>
              <input
                type="text"
                placeholder="filtrar por nome"
                value={filtroNome}
                onChange={(e) => setFiltroNome(e.target.value)}
              />
              <MagnifyingGlass size={25} color="#c3c3c3" />
            </FilterInput>
          </BoxFilterInput>
        </Filter>
        <UserBox>
          <h4>{adminName}</h4>
          <UserCircle size={35} />
        </UserBox>
      </BoxHeader>
      <BoxTable>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th />
              <Table.Th>Horário</Table.Th>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Email</Table.Th>
              <Table.Th>Serviço</Table.Th>
              <Table.Th>Data</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {agendamentos.length > 0 ? (
              agendamentosFiltrados.map((agendamento) => (
                <Table.Tr
                  key={agendamento._id}
                  bg={
                    selectedRows.has(agendamento._id)
                      ? "var(--mantine-color-blue-light)"
                      : undefined
                  }
                >
                  <Table.Td>
                    <Checkbox
                      aria-label="Select row"
                      checked={selectedRows.has(agendamento._id)}
                      onChange={() => {
                        toggleRow(agendamento._id);
                        marcarAgendamentoComoAtendido(agendamento._id);
                      }}
                    />
                  </Table.Td>
                  <Table.Td>{agendamento.horario}</Table.Td>
                  <Table.Td>{agendamento.nome}</Table.Td>
                  <Table.Td>{agendamento.email}</Table.Td>
                  <Table.Td>{agendamento.service}</Table.Td>
                  <Table.Td>{formatarData(agendamento.data)}</Table.Td>
                </Table.Tr>
              ))
            ) : (
              <Table.Tr>
                <Table.Td colSpan={6} style={{ textAlign: "center" }}>
                  Nenhum agendamento encontrado.
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </BoxTable>
    </Container>
  );
}
