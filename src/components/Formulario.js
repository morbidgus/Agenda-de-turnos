import {Fragment, useState} from 'react';
import {v4 as uuid} from "uuid";

const Formulario = ({crearCita}) => {
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    const [error, setError] = useState(false);

    const handleOnChange = e =>{
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    const submitCita = e => {
        e.preventDefault();
        
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        cita.id = uuid();
        crearCita(cita);

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
     

    const {mascota, propietario, fecha, hora, sintomas} = cita;
    
    return ( 
        <Fragment>
            <h1 className="title-cita">Crear cita</h1>
            {
                error ? <p className="alert-message">Todos los campos son obligatorios</p> : null
            }
            <form 
            className="form-container"
            onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="input-container"
                    placeholder="Nombre mascota"
                    onChange={handleOnChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="input-container"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleOnChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="input-container"
                    onChange={handleOnChange}
                    value={fecha}
                    
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="input-container"
                    onChange={handleOnChange}
                    value={hora}
                    
                />
                <label>Síntomas</label>
                <textarea 
                    className="input-container sintomas"
                    name="sintomas"
                    onChange={handleOnChange}
                    value={sintomas}>
                        
                    

                </textarea>
                <button
                    type="submit"
                    className="btn-send">
                    Agregar cita
                </button>
            </form>
            <style jsx>
                {`
                    .title-cita{
                       text-align: center;
                       
                    }
                    .alert-message{
                        width: 100%;
                        background-color: red;
                        text-align: center;
                        padding: 1rem 0;
                    }
                    .form-container{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        margin: 0 auto;
                    }
                    .form-container label{
                        margin-top: 0.5rem;
                    }
                    .input-container{
                        width: 100%;
                        background-color: rgba(255,255,255, 0.7);
                        border: 1px solid rgba(255,255,255, 0.7);
                        border-radius: 0.6rem;
                        padding: 0.6rem 1rem;
                        
                    }
                    .input-container:focus{
                        outline: none;
                    }
                    .sintomas{
                        resize: none;
                        height: 5rem;
                    }
                    .btn-send{
                        background-color: #2195bf;
                        border: none;
                        border-radius: 1rem;
                        text-align: center;
                        padding: 0.5rem 1rem;
                        color: white;
                        margin-top: 1rem;
                        width: 50%;
                    }
                    .btn-send:hover{
                        background-color: #146987;
                        cursor: pointer;
                    }
                `}
            </style>
        </Fragment>
     );
}
 
export default Formulario;