import React, {Fragment, useState} from 'react';

function Formulario() {

  const [cita, actualizarCita]=useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  //funcion que se ejecuta cada ue cambia un input
  const actualizarState =  (e) => {
    console.log('escribiendo...');
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  //Extraer lo valores
  const{mascota, propietario, fecha, hora, sintomas} = cita;

  //cuando se presiona el boton enviar

  const submitCita = (e) => {
    e.preventDefault();

    //validar

    //Asignar un id

    //Crear la cita

    //Reiniciar el formulario
  }

  return(
    <Fragment>
      <h2>Crear Citas</h2>
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
            vaue={mascota}
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

export default Formulario;