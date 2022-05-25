import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import PorSexo from './PorSexo'
import { fetchData } from './redux/actions'
import Todos from './Todos'

const App = () => {
   // va a estar conectado en redux en modo ESCRITURA
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchData())
   }, [])
   return (
      <div className='container_app'>
         {/* <button
            onClick={() => {
               dispatch({
                  type: 'ACTUALIZAR_HORA',
                  payload: new Date().toLocaleTimeString(),
               })
            }}>
            Actualizar Hora
         </button> */}
         <Todos />
         <PorSexo />
      </div>
   )
}

export default App
