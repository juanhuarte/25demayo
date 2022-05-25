import React, { useContext, useEffect, useState } from 'react'
import PersonasContext from './context/personas-context'
import Persona from './Persona'

const Mujeres = () => {
   return (
      <PersonasContext.Consumer>
         {({ personas }) => {
            return (
               <div className='container_mujeres'>
                  {personas.map((persona) => {
                     if (persona.sexo === 'F')
                        return <Persona key={Math.random()} persona={persona} />
                  })}
               </div>
            )
         }}
      </PersonasContext.Consumer>
   )
}

export default Mujeres
