// HospitalCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const HospitalCard = ({ hospital }) => {
  const { nome, especialidade, endereco, tempoEstimadoEspera } = hospital;

  const handleVerMais = () => {
    const searchQuery = `${nome} ${especialidade} ${endereco} São Paulo`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className='hospital-card'>
      <div className='hospital-card-details'>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Endereço:</strong> {endereco}</p>
        <p><strong>Especialidade:</strong> {especialidade}</p>
        {tempoEstimadoEspera && (
          <p><strong>Tempo estimado de espera:</strong> {tempoEstimadoEspera}</p>
        )}
      </div>
      <div className='hospital-card-button'>
        <button className='ver-mais' onClick={handleVerMais}>
          Ver mais
        </button>
      </div>
    </div>
  );
};

HospitalCard.propTypes = {
  hospital: PropTypes.object.isRequired,
  deleteHospital: PropTypes.func.isRequired,
};

export default HospitalCard;
