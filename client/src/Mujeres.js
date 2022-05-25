import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Persona from './Persona'

const Mujeres = () => {
   const personas = useSelector((state) =>
      state.personas.filter((p) => p.sexo === 'F')
   )
   return (
      <div className='container_mujeres'>
         {personas.map((persona) => {
            return <Persona persona={persona} />
         })}
      </div>
   )
}

export default Mujeres
