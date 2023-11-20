import React from 'react';
import PropTypes from 'prop-types';

const HospitalCard = ({ hospital, deleteHospital }) => {
  return (
    <div className='hospital-card'>
      <div className='hospital-card-text'>
        <p>{hospital.nome}</p>
        <p className='especialidade'>{hospital.especialidade}</p>
        <p className='endereco'>{hospital.endereco}</p>
      </div>
      <div>
        <button className='ver-mais' onClick={() => deleteHospital(hospital.id)}>
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
