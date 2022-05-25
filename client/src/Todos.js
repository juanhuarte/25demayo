import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Persona from './Persona'

const Todos = () => {
   // console.log('Soy el negro y me reevalué')
   // const dia = useSelector((state) => {
   //    return state?.dia
   // })
   const personas = useSelector((state) => state.personas)
   return (
      <div className='container_todos'>
         {/* <h1>{dia}</h1> */}
         {personas.map((persona) => {
            return <Persona persona={persona} />
         })}
      </div>
   )
}

export default Todos
