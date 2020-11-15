import Formulario from './components/Formulario';
import Cita from './components/Cita';
import {useState, useEffect} from 'react'; 


function App() {
  


  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    } else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);


  const crearCita = cita =>{
    setCitas([
      ...citas,
      cita
    ])
  }

  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  const titulo = citas.length === 0 ? "Todavía no tienes citas" : "Administra tus citas";

  return (
    <div className="bg">
      <h1 className="title">Administrador de pacientes</h1>
      <div className="main-container">
        <div className="columna">
          <Formulario
            crearCita={crearCita} />
        </div>
        <div className="columna citas">
         <h1>{titulo}</h1>

         {citas.map(cita => (
           <Cita 
              key={cita.id}
              cita={cita}
              eliminarCita={eliminarCita}
              />
         )
         )}

        </div>
      </div>
      <style jsx>
        {`
        .bg{
          background: radial-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.6)), url("../background.jpg");
          background-size: cover;
          background-position: center;
          width: 100%;
          min-height: 100vh;
        }
        .title{
          text-align: center;
          margin: 0 0;
          padding-top: 1rem;
        }
        .columna{
          width: 100%;
          margin: 0 2rem;
        }
        .citas{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .main-container{
          display: flex;
          width: 90%;
          margin: 0 auto;
          justify-content: space-between;
        }
        `}
      </style>
    </div>
  );
}

export default App;
