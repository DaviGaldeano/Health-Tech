import React from "react";
import PropTypes from "prop-types";
import "../styles/hospitalCard.css";
import { Col, Row } from "react-bootstrap";
import googleMaps from "../images/mapas-do-google.png";

const HospitalCard = ({ hospital }) => {
  if (!hospital) {
    return null;
  }

  const { nome, endereco, pessoasNaFila, distanciaAteMim } = hospital;

  const handleVerMais = () => {
    const searchQuery = `${nome} ${endereco} São Paulo`;
    const googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      searchQuery
    )}`;
    window.open(googleMapsURL, "_blank");
  };

  return (
    <div className="hospital-card">
      <Row className="row-informations">
        <Col sm={10}>
          <div className="hospital-card-details">
            <p>
              <strong>Nome:</strong> {nome || "N/A"}
            </p>
            <p>
              <strong>Endereço:</strong> {endereco || "N/A"}
            </p>
            {pessoasNaFila && (
              <p>
                <strong>Pessoas na fila:</strong> {pessoasNaFila}
              </p>
            )}
            <p>
              <strong>Distância até mim:</strong>{" "}
              {distanciaAteMim !== null
                ? `${(distanciaAteMim / 1000).toFixed(1)} km`
                : "N/A"}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="row-buttons">
        <Col sm={2}>
          <div>
            <button className="hospital-card-button" onClick={handleVerMais}>
              <img
                src={googleMaps}
                className="hospital-image"
                alt="Google Maps"
              ></img>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

HospitalCard.propTypes = {
  hospital: PropTypes.shape({
    nome: PropTypes.string,
    endereco: PropTypes.string,
    tempoEstimadoEspera: PropTypes.string,
    distanciaAteMim: PropTypes.number,
  }),
  deleteHospital: PropTypes.func.isRequired,
};

export default HospitalCard;
