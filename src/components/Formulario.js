import React, {Fragment} from 'react';

function Formulario() {
  return(
    <Fragment>
      <h2>Crear Citas</h2>
      <form>
        <label>Nombre de la Mascota
          <input 
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
          />
        </label>
        <label>Nombre del Dueño
          <input 
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre del Dueño de la Mascota"
          />
        </label>
        <label>Fecha
          <input 
            type="date"
            name="fecha"
            className="u-full-width"
          />
        </label>
        <label>Hora
          <input 
            type="time"
            name="hora"
            className="u-full-width"
          />
        </label>
        <label>Síntomas
          <textarea 
            name="sintomas"
            className="u-full-width"
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