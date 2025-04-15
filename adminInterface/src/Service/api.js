import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para cadastrar um novo admin
export const cadastrarAdmin = async (dados) => {
  try {
    const response = await api.post("/cadastro", JSON.stringify(dados));
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data || error;

    throw new errorMessage();
  }
};

// Função para fazer login do admin
export const loginAdmin = async (credenciais) => {
  try {
    const response = await api.post("/login", credenciais);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message;

    throw new Error(errorMessage);
  }
};

// Função para criar horários disponíveis
export const criarHorarios = async (dados, token) => {
  try {
    const response = await api.post("/horarios", dados, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Erro ao criar horário.");
  }
};

// Função para editar horários
export const deletarHorario = async (data, horario, token) => {
  try {
    const response = await api.delete(`/deletar-horario`, {
      data: { data, horario },
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao deletar horário."
    );
  }
};

// Função para listar todos os horários de funcionamento disponíveis
export const listarHorariosDisponiveis = async (date) => {
  try {
    const response = await api.get(`/horario-disponivel?date=${date}`);
    return response.data;
  } catch (error) {
    throw Error(error.response?.data || "Erro ao buscar horários.");
  }
};

// Função para listar todos os agendamentos
export const listarAgendamentos = async (token) => {
  try {
    const response = await api.get("/agendamentos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.error || error.message;
    throw new Error(errorMessage);
  }
};

// Função para marcar um agendamento como atendido
export const marcarComoAtendido = async (id, token) => {
  try {
    const response = await api.patch(
      `/agendamento/${id}/atendido`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Erro ao marcar agendamento como atendido."
    );
  }
};

// Listar apenas agendamentos atendidos
export const listarAgendamentosAtendidos = async (token) => {
  try {
    const response = await api.get("/agendamentos-atendidos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Erro ao listar agendamentos atendidos."
    );
  }
};
