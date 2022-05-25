import React from 'react'
import { useSelector } from 'react-redux'
import Hombres from './Hombres'
import Mujeres from './Mujeres'

const PorSexo = () => {
   // const { dia, hora } = useSelector((state) => state)
   return (
      <div className='container_porsexo'>
         {/* <h1>
            {dia} - {hora} */}
         {/* </h1> */}
         <Hombres />
         <Mujeres />
      </div>
   )
}

export default PorSexo
