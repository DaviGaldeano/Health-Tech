import { fetchHospitais } from "./api";

export const getHospitais = async (sortBy) => {
  const randomDistance = () => Math.floor(Math.random() * 50) + 1 + " km";
  const randomTempoEstimado = () => Math.floor(Math.random() * 10) + 1 + " min";

  try {
    const hospitaisData = await fetchHospitais();

    const sortedHospitais = hospitaisData
      .map((hospital) => {
        const nome = hospital?.hospitalName;
        const endereco = hospital?.hospitalEndereco;

        return {
          ...hospital,
          tempoEstimadoEspera: randomTempoEstimado(),
          distanciaAteMim: randomDistance(),
          nome,
          endereco,
        };
      })
      .sort((a, b) => {
        if (sortBy === "maisProximo") {
          return a.distanciaAteMim.localeCompare(b.distanciaAteMim);
        } else if (sortBy === "menorTempoEspera") {
          return a.tempoEstimadoEspera.localeCompare(b.tempoEstimadoEspera);
        } else {
          return 0;
        }
      });

    return sortedHospitais;
  } catch (error) {
    console.error("Erro ao obter hospitais:", error.message);
    return [
      {
        nome: "Hospital das Clínicas",
        endereco: "Av. Dr. Enéas de Carvalho Aguiar, 255",
        tempoEstimadoEspera: randomTempoEstimado(),
        distanciaAteMim: randomDistance(),
      },
    ];
  }
};
