import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Persona from './Persona'

const Hombres = () => {
   const personas = useSelector((state) =>
      state.personas.filter((p) => p.sexo === 'M')
   )
   return (
      <div className='container_hombres'>
         {personas.map((persona) => {
            return <Persona persona={persona} />
         })}
      </div>
   )
}

export default Hombres
