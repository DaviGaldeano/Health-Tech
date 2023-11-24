import { fetchHospitais } from "./getApi";
import haversine from "haversine-distance";

export const getHospitais = async (userLocation) => {
  const randomFila = () => Math.floor(Math.random() * 10) + 1;

  try {
    const hospitaisData = await fetchHospitais();

    const sortedHospitais = hospitaisData.map((hospital) => {
      const nome = hospital?.hospitalName;
      const endereco = hospital?.hospitalEndereco;

      const hospitalLocation = {
        latitude: hospital?.latitude,
        longitude: hospital?.longitude,
      };

      if (!hospitalLocation.latitude || !hospitalLocation.longitude) {
        return null;
      }

      const distanciaAteMim = haversine(userLocation, hospitalLocation);

      return {
        ...hospital,
        pessoasNaFila: randomFila(),
        distanciaAteMim,
        nome,
        endereco,
      };
    });

    return sortedHospitais;
  } catch (error) {
    console.error("Erro ao obter hospitais:", error.message);
    return [
      {
        hospitalName: "Hospital Israelita Albert Einstein",
        hospitalEndereco: "Av. Albert Einstein, 6271",
        latitude: -23.551657,
        longitude: -46.632122,
      },
      {
        hospitalName: "Hospital Sírio-Libanês",
        hospitalEndereco: "Av. Paulista, 1656",
        latitude: -23.555318,
        longitude: -46.638024,
      },
      {
        hospitalName:
          "Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo",
        hospitalEndereco: "Av. Dr. Enéas de Carvalho Aguiar, 255",
        latitude: -23.554215,
        longitude: -46.63647,
      },
      {
        hospitalName: "Hospital do Coração",
        hospitalEndereco: "Av. Dr. Dante Pazzanese, 500",
        latitude: -23.552101,
        longitude: -46.633983,
      },
      {
        hospitalName: "Hospital Santa Catarina",
        hospitalEndereco: "Rua Santa Catarina, 224",
        latitude: -23.551798,
        longitude: -46.632126,
      },
      {
        hospitalName: "Hospital Beneficência Portuguesa",
        hospitalEndereco: "Rua Álvares Penteado, 1.111",
        latitude: -23.553046,
        longitude: -46.635142,
      },
      {
        hospitalName: "Hospital São Paulo",
        hospitalEndereco: "Avenida Doutor Arnaldo, 455",
        latitude: -23.553628,
        longitude: -46.636445,
      },
      {
        hospitalName: "Hospital Alemão Oswaldo Cruz",
        hospitalEndereco: "Rua Dr. Enéas de Carvalho Aguiar, 255",
        latitude: -23.553696,
        longitude: -46.636291,
      },
      {
        hospitalName: "Hospital Samaritano",
        hospitalEndereco: "Rua Dr. Diogo de Castro, 1.000",
        latitude: -23.552508,
        longitude: -46.634427,
      },
      {
        hospitalName: "Hospital Cruz Vermelha",
        hospitalEndereco: "Rua Santa Cruz, 1.600",
        latitude: -23.552872,
        longitude: -46.634804,
      },
      {
        hospitalName: "Hospital São Camilo",
        hospitalEndereco: "Rua Dr. Enéas de Carvalho Aguiar, 255",
        latitude: -23.55299,
        longitude: -46.63502,
      },
      {
        hospitalName: "Hospital Vila Nova Cachoeirinha",
        hospitalEndereco: "Rua Francisco Matarazzo Júnior, 1.000",
        latitude: -23.560116,
        longitude: -46.653148,
      },
      {
        hospitalName: "Hospital Municipal Dr. Moysés Deutsch",
        hospitalEndereco: "Rua Francisco Matarazzo Júnior, 1.000",
        latitude: -23.558232,
        longitude: -46.65245,
      },
    ];
  }
};
