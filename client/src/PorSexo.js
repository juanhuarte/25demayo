import React from 'react'
import Hombres from './Hombres'
import Mujeres from './Mujeres'

const PorSexo = ({ personas, borrarPersona }) => {
   return (
      <div className='container_porsexo'>
         <Hombres personas={personas} borrarPersona={borrarPersona} />
         <Mujeres personas={personas} borrarPersona={borrarPersona} />
      </div>
   )
}

export default PorSexo
