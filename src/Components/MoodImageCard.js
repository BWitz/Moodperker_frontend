import React from 'react'
import '../App.css'


const MoodImageCard = props => {
  console.log(props.image.img_url)
  return (
    <div>
    <p>I'm a mood image card!</p>
    <img src={props.image.img_url} alt="" />
    </div>
  )
}



export default MoodImageCard
