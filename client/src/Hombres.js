import React, { useEffect, useState } from 'react'
import Persona from './Persona'

const Hombres = ({ personas, borrarPersona }) => {
   return (
      <div className='container_hombres'>
         {personas.map((persona) => {
            if (persona.sexo === 'M')
               return (
                  <Persona persona={persona} borrarPersona={borrarPersona} />
               )
         })}
      </div>
   )
}

export default Hombres
