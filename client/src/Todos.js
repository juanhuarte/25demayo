import React, { useEffect, useState } from 'react'
import Persona from './Persona'

const Todos = ({ personas, borrarPersona }) => {
   return (
      <div className='container_todos'>
         {personas.map((persona) => {
            return <Persona persona={persona} borrarPersona={borrarPersona} />
         })}
      </div>
   )
}

export default Todos
