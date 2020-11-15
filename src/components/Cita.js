import React from 'react';
const Cita = ({cita, eliminarCita}) => {
    return(
        <div className="cita-container">
            <p> Mascota: <span>{cita.mascota}</span></p>
            <p> Dueño: <span>{cita.propietario}</span></p>
            <p> Fecha: <span>{cita.fecha}</span></p>
            <p> Hora: <span>{cita.hora}</span></p>
            <p>Síntomas:</p>
            <p className="symptoms"><span >{cita.sintomas}</span></p>
            <button 
                className="delete-btn"
                onClick={() => eliminarCita(cita.id)}
            >
                Eliminar &times;
            </button>
            <style jsx>
                {`
                .cita-container{
                    background-color: rgba(255, 255, 255, 0.7);
                    color: black;
                    padding: 1rem 0.6rem;
                    text-align: center;
                    border-radius: 1rem;
                    width: 25rem;
                    margin-bottom: 1rem;
                    
                    
                }
                .symptoms{
                    height: 100px;
                    overflow-y: auto;
                    
                    
                }
                .cita-container span{
                    color: #19535e;
                }
                .delete-btn{
                    background-color: #b8392e;
                    border: none;
                    border-radius: 1rem;
                    text-align: center;
                    padding: 0.5rem 1rem;
                    color: white;
                    margin-top: 1rem;
                    width: 50%;
                }
                .delete-btn:hover{
                    background-color: #7d2119;
                    cursor: pointer;
                }
                
                `}
            
            </style>
        </div>
        
    )
}
 
export default Cita;