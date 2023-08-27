import React, { useContext } from 'react'
import DataContext from '../DataContext'

const DComponent = () => {
    const SharedData=useContext(DataContext)
  return (
    <div>
      DComponent
      <p>
        property received from grand parent: {SharedData}
      </p>
    </div>
  )
}

export default DComponent
