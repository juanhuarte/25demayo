import React, { useEffect, useState } from 'react'
import './App.css'
import PorSexo from './PorSexo'
import Todos from './Todos'

const App = () => {
   const [personas, setPersonas] = useState([])
   useEffect(() => {
      fetch('http://localhost:4000/api')
         .then((res) => res.json())
         .then((data) => setPersonas(data.response))
         .catch((e) => console.log(e))
   }, [])
   const borrarPersona = (nombre) => {
      setPersonas(personas.filter((p) => p.nombre !== nombre))
   }

   return (
      <div className='container_app'>
         <Todos personas={personas} borrarPersona={borrarPersona} />
         <PorSexo personas={personas} borrarPersona={borrarPersona} />
      </div>
   )
}

export default App
