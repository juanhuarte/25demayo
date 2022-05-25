import React, { useEffect, useState } from 'react'
import Persona from './Persona'

const Mujeres = ({ personas, borrarPersona }) => {
   return (
      <div className='container_mujeres'>
         {personas.map((persona) => {
            if (persona.sexo === 'F')
               return (
                  <Persona persona={persona} borrarPersona={borrarPersona} />
               )
         })}
      </div>
   )
}

export default Mujeres
