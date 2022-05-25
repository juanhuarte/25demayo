import React from 'react'
import { useDispatch } from 'react-redux'
import { borrarPersona } from './redux/actions'

const Persona = ({ persona }) => {
   const dispatch = useDispatch()
   return (
      <div className='persona'>
         <h3>{persona.nombre}</h3>
         <button onClick={() => dispatch(borrarPersona(persona.nombre))}>
            Eliminar
         </button>
      </div>
   )
}

export default Persona
