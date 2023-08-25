import React from 'react'
import ImageCard from './ImageCard'
import CardData from './CardData'

const item=(val)=>{
  return <ImageCard
    key={val.id}
    src={val.imgsrc}
    title={val.title}
    desc={val.desc}
   />;
   
}

const ImageCardSection = () => {
  return (
    <div className='d-flex justify-content-evenly '>
       { CardData.map(item) }
    </div>
  )
}

export default ImageCardSection
