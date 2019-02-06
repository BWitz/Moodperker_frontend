import React from 'react'
import '../App.css'


const MoodImageCard = props => {
  return (
    <div>
    <img className="ImageCard" src={props.image.img_url} alt="" />
    </div>
  )
}



export default MoodImageCard
