import React, { useContext } from 'react'
import PersonasContext from './context/personas-context'

const Persona = ({ persona }) => {
   const { borrarPersona } = useContext(PersonasContext)
   return (
      <div className='persona'>
         <h3>{persona.nombre}</h3>
         <button onClick={() => borrarPersona(persona.nombre)}>Eliminar</button>
      </div>
   )
}

export default Persona
