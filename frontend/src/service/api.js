import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export class APIService {
  static client = axios.create({
    baseURL: API_URL,
  });

  static async criarAgendamento(data) {
    try {
      const response = await APIService.client.post("/agendamentos", data);
      return response.data;
    } catch (error) {
      console.error(
        "Erro ao criar agendamento:",
        error.response?.data || error.message
      );
      throw error;
    }
  }

  static async getHorariosDisponiveis(date) {
    if (!date) {
      return { error: "Selecione uma data" };
    }

    try {
      const response = await APIService.client.get("/horario-disponivel", {
        params: { date },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao buscar horários:", error);
      return { error: "Erro ao buscar horários disponíveis" };
    }
  }
}
