import React, { useContext, useEffect, useState } from 'react'
import PersonasContext from './context/personas-context'
import Persona from './Persona'

const Todos = () => {
   const { personas } = useContext(PersonasContext)
   return (
      <div className='container_todos'>
         {personas.map((persona) => {
            return <Persona key={Math.random()} persona={persona} />
         })}
      </div>
   )
}

export default Todos
