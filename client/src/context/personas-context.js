import React, { useState } from 'react'

const PersonasContext = React.createContext({
   personas: [],
   borrarPersona: () => {},
   cargarDatos: () => {},
})

export default PersonasContext

export const PersonasProvider = (props) => {
   const [personas, setPersonas] = useState([])
   const state = {
      personas,
      borrarPersona: (nombre) => {
         setPersonas(personas.filter((p) => p.nombre !== nombre))
      },
      cargarDatos: (datos) => {
         setPersonas(datos)
      },
   }
   return (
      <PersonasContext.Provider value={state}>
         {props.children}
      </PersonasContext.Provider>
   )
}
