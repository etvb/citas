import React, {Fragment, useState} from 'react';
// import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

function Formulario({crearCita}) {

  const [cita, actualizarCita]=useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  const [error, actualizarError] = useState(false)

  //funcion que se ejecuta cada ue cambia un input
  const actualizarState =  (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //Extraer lo valores
  const{mascota, propietario, fecha, hora, sintomas} = cita;

  const numAleatorio = () => {
    return Math.floor(Math.random() * (10000 - 0)) + 0;
  }

  //cuando se presiona el boton enviar
  const submitCita = (e) => {
    e.preventDefault();

    //validar sin espacios en blanco
    if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
      actualizarError(true);
      return;
    }

    actualizarError(false);

    //Asignar un id
    cita.id = numAleatorio();


    //Crear la cita
    crearCita(cita);

    //Reiniciar el formulario
    actualizarCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    })
  }

  return(
    <Fragment>
      <h2>Crear Citas</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form
        onSubmit={submitCita}
      >
        <label>Nombre de la Mascota
          <input 
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={actualizarState}
            value={mascota}
          />
        </label>
        <label>Nombre del Dueño
          <input 
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del Dueño de la Mascota"
            onChange={actualizarState}
            value={propietario}
          />
        </label>
        <label>Fecha
          <input 
            type="date"
            name="fecha"
            className="u-full-width"
            onChange={actualizarState}
            value={fecha}
          />
        </label>
        <label>Hora
          <input 
            type="time"
            name="hora"
            className="u-full-width"
            onChange={actualizarState}
            value={hora}
          />
        </label>
        <label>Síntomas
          <textarea 
            name="sintomas"
            className="u-full-width"
            onChange={actualizarState}
            value={sintomas}

          />
        </label>
        <button
          type="submit"
          className="u-full-width button-primary"
        >Agregar Cita</button>




      </form>
    </Fragment>
  );
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;