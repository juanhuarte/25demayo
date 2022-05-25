import React, { useContext, useEffect, useState } from 'react'
import PersonasContext from './context/personas-context'
import Persona from './Persona'

const Hombres = () => {
   const { personas } = useContext(PersonasContext)
   return (
      <div className='container_hombres'>
         {personas.map((persona) => {
            if (persona.sexo === 'M')
               return <Persona key={Math.random()} persona={persona} />
         })}
      </div>
   )
}

export default Hombres
