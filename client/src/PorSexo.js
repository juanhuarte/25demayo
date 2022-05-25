import React from 'react'
import Hombres from './Hombres'
import Mujeres from './Mujeres'

const PorSexo = () => {
   return (
      <div className='container_porsexo'>
         <Hombres />
         <Mujeres />
      </div>
   )
}

export default PorSexo
