import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import PersonasContext from './context/personas-context'
import PorSexo from './PorSexo'
import Todos from './Todos'

const App = () => {
   const context = useContext(PersonasContext)
   console.log(context)
   useEffect(() => {
      fetch('http://localhost:4000/api')
         .then((res) => res.json())
         .then((data) => context.cargarDatos(data.response))
         .catch((e) => console.log(e))
   }, [])
   return (
      <div className='container_app'>
         <Todos />
         <PorSexo />
      </div>
   )
}

export default App
