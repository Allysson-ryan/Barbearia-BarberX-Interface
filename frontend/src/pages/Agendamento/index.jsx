import { ButtonAgendarHorario } from "./../../Components/ButtonAgendarHorario/index";
import { useForm } from "react-hook-form";
import { DatePicker } from "@mantine/dates";
import { useState } from "react";
import { Chip, Group } from "@mantine/core";
import Logo from "../../assets/Logomarca.png";
import { X } from "@phosphor-icons/react";
import {
  BoxButtonsSair,
  HeaderAgendmento,
  Logomarca,
  Container,
  Form,
  BoxPersonalData,
  InputName,
  Error,
  ServicesContainer,
  ServiceOptions,
  Label,
  CalendarContainer,
  HorariosContainer,
} from "./style";
import { useNavigate } from "react-router-dom";
import { APIService } from "../../service/api";
import "dayjs/locale/pt-br";

export function Agendamento() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    trigger,
    clearErrors,
  } = useForm();

  const [selectedDate, setSelectedDate] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    const formattedDate = date ? date.toISOString().split("T")[0] : "";
    setValue("data", formattedDate);

    if (!formattedDate) {
      setError("data", { type: "manual", message: "Selecione uma data" });
      return;
    }

    clearErrors("data");

    try {
      // Agora chamamos a API centralizada
      const horarios = await APIService.getHorariosDisponiveis(formattedDate);

      if (horarios.error) {
        console.error("Erro ao buscar horários:", horarios.error);
        setHorariosDisponiveis([]);
      } else {
        setHorariosDisponiveis(horarios);
      }
    } catch (error) {
      console.error("Erro ao fazer requisição:", error);
      setHorariosDisponiveis([]);
    }

    trigger("data");
  };

  const handleHorarioChange = (value) => {
    setHorarioSelecionado(value);
    setValue("horario", value);

    if (value) {
      clearErrors("horario");
    } else {
      setError("horario", { type: "manual", message: "Horário é obrigatório" });
    }

    trigger("horario");
  };

  const onSubmit = async (data) => {
    let hasError = false;

    if (!data.data) {
      setError("data", { type: "manual", message: "Data é obrigatória" });
      hasError = true;
    }

    if (!data.horario) {
      setError("horario", { type: "manual", message: "Horário é obrigatório" });
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await APIService.criarAgendamento(data);
      console.log("Agendamento criado com sucesso:", response);

      // Redireciona para a página de confirmação
      navigate("/agendamento-concluido");
    } catch (error) {
      console.error("Erro ao criar agendamento:", error.message);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <HeaderAgendmento>
        <Logomarca src={Logo} alt="logomarca" />
        <BoxButtonsSair onClick={() => navigate("/")}>
          <X size={32} />
        </BoxButtonsSair>
      </HeaderAgendmento>

      <Container>
        <h1>FAÇA SEU AGENDAMENTO</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Dados Pessoais */}
          <BoxPersonalData>
            <div>
              <h4>NOME COMPLETO:</h4>
              <InputName>
                <input
                  type="text"
                  {...register("nome", {
                    required: "Nome completo é obrigatório",
                  })}
                />
              </InputName>
              {errors.nome && <Error>{errors.nome.message}</Error>}
            </div>
            <div>
              <h4>EMAIL:</h4>
              <InputName>
                <input
                  type="email"
                  {...register("email", { required: "Email é obrigatório" })}
                />
              </InputName>
              {errors.email && <Error>{errors.email.message}</Error>}
            </div>
          </BoxPersonalData>

          {/* Seção de Serviços */}
          <ServicesContainer>
            <ServiceOptions>
              <Label>
                <input
                  type="radio"
                  value="Corte Adulto"
                  {...register("service", { required: "Escolha um serviço" })}
                />
                <h4>CORTE ADULTO</h4>
                <h4>R$40</h4>
              </Label>
            </ServiceOptions>
            <ServiceOptions>
              <Label>
                <input
                  type="radio"
                  value="Corte Criança"
                  {...register("service")}
                />
                <h4>CORTE CRIANÇA</h4>
                <h4>R$55</h4>
              </Label>
            </ServiceOptions>
            <ServiceOptions>
              <Label>
                <input type="radio" value="Barba" {...register("service")} />
                <h4>BARBA</h4>
                <h4>R$30</h4>
              </Label>
            </ServiceOptions>
            <ServiceOptions>
              <Label>
                <input
                  type="radio"
                  value="Corte Adulto + Barba"
                  {...register("service")}
                />
                <h4>CORTE ADULTO + BARBA</h4>
                <h4>R$65</h4>
              </Label>
            </ServiceOptions>

            {errors.service && <Error>{errors.service.message}</Error>}
          </ServicesContainer>

          <h3>ESCOLHA O DIA E HORÁRIO</h3>
          {/* Calendário */}
          <CalendarContainer>
            <DatePicker
              locale="pt-br"
              value={selectedDate}
              onChange={handleDateChange}
              weekdayFormat="ddd"
            />
            {errors.data && <Error>{errors.data.message}</Error>}
          </CalendarContainer>

          {/* Horário */}
          <HorariosContainer>
            <Chip.Group
              multiple={false}
              value={horarioSelecionado}
              onChange={handleHorarioChange}
            >
              <Group>
                {horariosDisponiveis.length > 0 ? (
                  horariosDisponiveis.map((horario) => (
                    <Chip key={horario} value={horario}>
                      {horario}
                    </Chip>
                  ))
                ) : (
                  <Error>Não há horários disponíveis para esta data.</Error>
                )}
              </Group>
            </Chip.Group>
            {errors.horario && <Error>{errors.horario.message}</Error>}
          </HorariosContainer>

          {/* Botão */}
          <ButtonAgendarHorario />
        </Form>
      </Container>
    </>
  );
}
