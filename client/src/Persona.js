import React from 'react'

const Persona = ({ persona, borrarPersona }) => {
   return (
      <div className='persona'>
         <h3>{persona.nombre}</h3>
         <button onClick={() => borrarPersona(persona.nombre)}>Eliminar</button>
      </div>
   )
}

export default Persona
