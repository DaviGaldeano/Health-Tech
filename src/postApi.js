import axios from "axios";

export const loginUser = async (email, senha) => {
  try {
    // Validar entrada
    if (!email || !senha) {
      throw new Error("Email e senha são obrigatórios.");
    }

    const response = await axios.post(
      "https://6b7f-177-128-51-66.ngrok.io/api/Paciente",
      {
        email: email,
        senha: senha,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error.message);

    // Tratar diferentes tipos de erro
    if (axios.isAxiosError(error)) {
      // Erro de requisição Axios
      console.error("Status da resposta:", error.response.status);
      console.error("Dados da resposta:", error.response.data);
    }

    throw error;
  }
};
