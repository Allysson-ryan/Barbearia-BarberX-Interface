import "@mantine/core/styles/global.css";
import "@mantine/core/styles/Table.css";
import { Table } from "@mantine/core";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import {
  Container,
  BoxTable,
  BoxHeader,
  Filter,
  FilterTitle,
  ContainerInputs,
  BoxFilterInput,
  FilterInput,
  InputFilterDate,
} from "./style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useAuth } from "../../Context/useAuth";
import { useEffect, useState } from "react";
import { listarAgendamentosAtendidos } from "../../Service/api";

export function ClientsServed() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [dataFiltro, setDataFiltro] = useState(null);
  const [nomeFiltro, setNomeFiltro] = useState("");
  const { user } = useAuth();

  const formatarData = (dataISO) => {
    const [ano, mes, dia] = dataISO.split("-");
    return `${dia}-${mes}-${ano}`;
  };

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const data = await listarAgendamentosAtendidos(user.token);

        const dataOrdenada = data.sort((a, b) => {
          const [diaA, mesA, anoA] = a.data.split("/");
          const [diaB, mesB, anoB] = b.data.split("/");

          const dataA = new Date(`${anoA}-${mesA}-${diaA}`);
          const dataB = new Date(`${anoB}-${mesB}-${diaB}`);

          return dataA - dataB;
        });

        setAgendamentos(dataOrdenada);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    if (user?.token) fetchAgendamentos();
  }, [user]);

  const agendamentosFiltrados = agendamentos.filter((agendamento) => {
    const [dia, mes, ano] = agendamento.data.split("/");
    const dataAgendamento = new Date(`${ano}-${mes}-${dia}`);

    const passaFiltroData =
      !dataFiltro ||
      (dataAgendamento.getDate() === dataFiltro.toDate().getDate() &&
        dataAgendamento.getMonth() === dataFiltro.toDate().getMonth() &&
        dataAgendamento.getFullYear() === dataFiltro.toDate().getFullYear());
    const passaFiltroNome = agendamento.nome
      .toLowerCase()
      .includes(nomeFiltro.toLowerCase());

    return passaFiltroData && passaFiltroNome;
  });

  const rows = agendamentosFiltrados.map((agendamento) => (
    <Table.Tr key={agendamento._id}>
      <Table.Td>{agendamento.nome}</Table.Td>
      <Table.Td>{agendamento.service}</Table.Td>
      <Table.Td>{agendamento.horario}</Table.Td>
      <Table.Td>{formatarData(agendamento.data)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container>
      <BoxHeader>
        <Filter>
          <FilterTitle>
            <h3>Filtros</h3>
            <FunnelSimple size={25} />
          </FilterTitle>
          <ContainerInputs>
            <BoxFilterInput>
              <FilterInput>
                <input
                  type="text"
                  placeholder="filtrar por nome"
                  value={nomeFiltro}
                  onChange={(e) => setNomeFiltro(e.target.value)}
                />
                <MagnifyingGlass size={25} color="#c3c3c3" />
              </FilterInput>
            </BoxFilterInput>

            <InputFilterDate>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Filtrar por data"
                  format="DD/MM/YYYY"
                  value={dataFiltro}
                  onChange={(novaData) => setDataFiltro(novaData)}
                />
              </LocalizationProvider>
            </InputFilterDate>
          </ContainerInputs>
        </Filter>
      </BoxHeader>
      <BoxTable>
        <Table stickyHeader stickyHeaderOffset={60}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nome</Table.Th>
              <Table.Th>Serviço</Table.Th>
              <Table.Th>Horário</Table.Th>
              <Table.Th>Data</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </BoxTable>
    </Container>
  );
}
