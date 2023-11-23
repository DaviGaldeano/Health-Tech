// api.js

export const fetchHospitais = async () => {
  try {
    const response = await fetch(
      "https://8a22-177-128-51-66.ngrok.io/api/hospital",
      {
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error("Erro ao buscar hospitais");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar hospitais:", error.message);
    throw error;
  }
};
