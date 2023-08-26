import React, { useState } from 'react'
import ImageCard from './ImageCard'
import { useEffect } from 'react';
// import CardData from './CardData'

const item=(val)=>{
  return <ImageCard
    key={val.id}
    src={val.image}
    title={val.title}
    desc={val.desc}
   />;
   
}


const ImageCardSection = () => {
  const [Data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
         const Response=await fetch("https://fakestoreapi.com/products")
         const Data=await Response.json();
         setData(Data);

      }
      catch(error){ 
        console.log("error occured",error);
      }
    };
    fetchData()
  },[]);
  
  return (
    <div className='d-flex justify-content-evenly flex-wrap' >
       { Data.map(item) }
    </div>
  )
}

export default ImageCardSection
