import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //Citas en local storage
  let citasIniciales =  JSON.parse(localStorage.getItem('citas'));
  console.log(citasIniciales);
  if(!citasIniciales) {
    citasIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(() => {
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas]);



  //Funcion que agrege las nuevas citas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  //Funcion que elimina la cita por el id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  //se ejecuta cuando el state cambia

  
  const titulo = citas.length ===  0 ? 'No hay citas' : 'Administrar las citas'
  return (

    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
  <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>


      </div>
    </Fragment>
  );
}

export default App;
