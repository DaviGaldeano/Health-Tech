import axios from "axios";

export const fetchHospitais = async () => {
  try {
    const response = await axios.get(
      "https://6b7f-177-128-51-66.ngrok.io/api/hospital",
      {
        headers: {
          // Se necessário, adicione headers aqui
          "Content-Type": "application/json",
        },
        mode: "cors", // Não é necessário especificar o modo para o axios
      }
    );

    // O axios já verifica automaticamente se o status está na faixa 2xx
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar hospitais:", error.message);
    throw error;
  }
};
