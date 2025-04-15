import "@mantine/dates/styles.css";
import "@mantine/core/styles.css";
import "dayjs/locale/pt-br";
import { PlusCircle, Trash, UserCircle } from "@phosphor-icons/react";
import {
  BoxButtonEdit,
  BoxHeader,
  BoxHorario,
  ButtonEdit,
  Container,
  ContainerHorario,
  InputFilterDate,
  TimeOfDay,
  Times,
  UserBox,
  NoTimeMessage,
  BoxInput,
  Title,
  Form,
  BoxButton,
  Button,
  EditTime,
  TimeOfDayModal,
  TimesModal,
  BoxEditTime,
} from "./style";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Modal, TextInput, Notification } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DateInput } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import EditIcon from "../../assets/icon/EditIcon.svg";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { deletarHorario, listarHorariosDisponiveis } from "../../Service/api";
import { criarHorarios } from "../../Service/api";
import { useAuth } from "../../Context/useAuth";
import { useCallback } from "react";

export function RegistrationTime() {
  const { user } = useAuth();

  const today = dayjs().startOf("day");
  const [selectedDate, setSelectedDate] = useState(today);
  const [horarios, setHorarios] = useState([]);
  const [adminName, setAdminName] = useState("");

  const [errorAddHourMessage, setErrorAddHourMessage] = useState("");
  const [successAddHourMessage, setSuccessAddHourMessage] = useState("");

  const [errorDeleteHourMessage, setErrorDeleteHourMessage] = useState("");
  const [successDeleteHourMessage, setSuccessDeleteHourMessage] = useState("");

  const [openedAddHour, { open: openAddHour, close: closeAddHour }] =
    useDisclosure(false);
  const [openedEditHour, { open: openEditHour, close: closeEditHour }] =
    useDisclosure(false);

  const filterTimesByDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    const filtered = horarios.find(
      (event) => dayjs(event.data).format("YYYY-MM-DD") === formattedDate
    );

    setHorarios(filtered ? filtered.horarios : []);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    filterTimesByDate(newDate);
  };

  const fetchHorarios = useCallback(
    async (date) => {
      try {
        const formattedDate = date.format("YYYY-MM-DD");
        const response = await listarHorariosDisponiveis(
          formattedDate,
          user.token
        );

        const horariosOrdenados = response.sort((a, b) => {
          return a.localeCompare(b);
        });

        if (user?.token) {
          setHorarios(horariosOrdenados);
        }
      } catch (error) {
        throw new Error(error.message || "Erro ao buscar horários.");
      }
    },
    [user?.token]
  );

  useEffect(() => {
    if (user?.token) {
      setAdminName(user.nome || "Usuário");
      fetchHorarios(selectedDate);
    }
  }, [fetchHorarios, selectedDate, user?.token, user.nome]);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      hora: "",
      data: "",
    },
    validate: {
      hora: (value) => (value.trim() ? null : "O nome é obrigatório"),
      data: (value) => (value ? null : "A data é obrigatória"),
    },
  });

  const dateParser = (input) => {
    if (input === "WW2") {
      return new Date(1939, 8, 1);
    }

    return dayjs(input, "DD/MM/YYYY").toDate();
  };

  useEffect(() => {
    setSuccessAddHourMessage("");
    setErrorAddHourMessage("");
  }, []);

  const handleSubmit = async (values) => {
    try {
      const { hora, data } = values;
      const formattedDate = dayjs(data).format("YYYY-MM-DD");

      const dados = {
        data: formattedDate,
        horarios: [hora],
      };

      const userData = JSON.parse(localStorage.getItem("barberx:userData"));
      if (!userData || !userData.token) {
        return;
      }

      await criarHorarios(dados, userData.token);

      setSuccessAddHourMessage("Horário adicionado com sucesso!");
      fetchHorarios(selectedDate);
    } catch (error) {
      setErrorAddHourMessage(error.message || "Erro ao adicionar horário.");
    }
  };

  useEffect(() => {
    setSuccessDeleteHourMessage("");
    setErrorDeleteHourMessage("");
  }, []);

  const handleDeleteHorario = async (hora) => {
    try {
      const userData = JSON.parse(localStorage.getItem("barberx:userData"));
      if (!userData || !userData.token) {
        throw new Error("Usuário não autenticado. Faça login novamente.");
      }

      await deletarHorario(
        selectedDate.format("YYYY-MM-DD"),
        hora,
        userData.token
      );

      setHorarios((prevHorarios) => prevHorarios.filter((h) => h !== hora));
      setSuccessDeleteHourMessage("Horário removido com sucesso!");
    } catch (error) {
      setErrorDeleteHourMessage(error.message || "Erro ao remover horário.");
    }
  };

  return (
    <Container>
      <BoxHeader>
        <h1>BarberX</h1>
        <UserBox>
          <h4>{adminName}</h4>
          <UserCircle size={35} />
        </UserBox>
      </BoxHeader>
      <InputFilterDate>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Filtrar por data"
            format="DD/MM/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <input {...params} />}
          />
        </LocalizationProvider>
      </InputFilterDate>
      <ContainerHorario>
        <BoxHorario>
          <h1>Horários ainda disponíveis</h1>
          <TimeOfDay>
            {horarios.length > 0 ? (
              horarios.map((hora, index) => <Times key={index}>{hora}</Times>)
            ) : (
              <NoTimeMessage>
                Nenhum horário disponível para essa data
              </NoTimeMessage>
            )}
          </TimeOfDay>
          <BoxButtonEdit>
            <ButtonEdit variant="default" onClick={openEditHour}>
              <img src={EditIcon} />
              <span>Editar Horários</span>
            </ButtonEdit>
            <ButtonEdit variant="default" onClick={openAddHour}>
              <PlusCircle size={20} />
              <span>Adicionar Horários</span>
            </ButtonEdit>
          </BoxButtonEdit>
        </BoxHorario>
      </ContainerHorario>

      {/* modal add horário */}
      <Modal opened={openedAddHour} onClose={closeAddHour}>
        <BoxInput>
          <Title>Adicionar horário</Title>
          <br />
          {errorAddHourMessage && (
            <Notification
              color="red"
              onClose={() => setErrorAddHourMessage("")}
            >
              {errorAddHourMessage}
            </Notification>
          )}

          {successAddHourMessage && (
            <Notification
              color="green"
              onClose={() => setSuccessAddHourMessage("")}
            >
              {successAddHourMessage}
            </Notification>
          )}
          <br />
          <Form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Digite o horário"
              placeholder="ex: 10:00"
              {...form.getInputProps("hora")}
              error={form.errors.hora}
            />
            <br />
            <DateInput
              dateParser={dateParser}
              valueFormat="DD/MM/YYYY"
              label="Selecione a data"
              placeholder="Selecione a data"
              {...form.getInputProps("data")}
              onChange={(date) =>
                form.setFieldValue(
                  "data",
                  date ? dayjs(date).format("YYYY-MM-DD") : ""
                )
              }
              error={form.errors.data}
              locale="pt-br"
              weekdayFormat="ddd"
            />

            <BoxButton>
              <Button type="submit" mt="md">
                Adicionar horário
              </Button>
            </BoxButton>
          </Form>
        </BoxInput>
      </Modal>

      {/* modal deletar horário */}
      <Modal opened={openedEditHour} onClose={closeEditHour}>
        <BoxInput>
          <Title>Editar horário</Title>

          {errorDeleteHourMessage && (
            <Notification
              color="red"
              onClose={() => setErrorDeleteHourMessage("")}
            >
              {errorDeleteHourMessage}
            </Notification>
          )}

          {successDeleteHourMessage && (
            <Notification
              color="green"
              onClose={() => setSuccessDeleteHourMessage("")}
            >
              {successDeleteHourMessage}
            </Notification>
          )}
          <br />

          <TimeOfDayModal>
            {horarios.length > 0 ? (
              horarios.map((hora, index) => (
                <TimesModal key={index}>
                  {hora}
                  <BoxEditTime>
                    <EditTime onClick={() => handleDeleteHorario(hora)}>
                      <Trash />
                    </EditTime>
                  </BoxEditTime>
                </TimesModal>
              ))
            ) : (
              <NoTimeMessage>
                Nenhum horário encontrado para essa data
              </NoTimeMessage>
            )}
          </TimeOfDayModal>
        </BoxInput>
      </Modal>
    </Container>
  );
}
