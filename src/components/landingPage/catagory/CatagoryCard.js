import React from 'react'
import { useState,useEffect} from 'react'

function CatagoryCard(props) {
    let [catagoryName,setCatagoryName] = useState();
    let [catPhoto,setCatPhoto] = useState();
    useEffect(() => {
        setCatagoryName(props.object.name);
        setCatPhoto(props);
    
    }, [props])
   
  return (
    <div>{catagoryName}</div>
  )
}

export default CatagoryCard