import React from 'react'
import DataContext from '../DataContext'
import BComponent from './BComponent'

const AComponent = () => {
    const vasihatnama="mera grand children ko 4,00,00cr mai bhet swroop deta hoon ";
  return (
    
<DataContext.Provider value={vasihatnama}>
<div>AComponent
<BComponent/>
</div>
</DataContext.Provider>
   
   
  )
}

export default AComponent
