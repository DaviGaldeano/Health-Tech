import React from 'react';
import PropTypes from 'prop-types';
import hospitalImage from '../images/hospital-logo.jpg';

const HospitalCard = ({ hospital, deleteHospital }) => {
  const { id, nome, especialidade, endereco } = hospital;

  const handleVerMais = () => {
    const searchQuery = `${nome} ${especialidade} ${endereco} São Paulo`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className='hospital-card'>
      <div className='hospital-image'>
        <img src={hospitalImage} alt={`${nome} Hospital`} />
      </div>
      <div className='hospital-card-details'>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Especialidade:</strong> {especialidade}</p>
        <p><strong>Endereço:</strong> {endereco}</p>
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
