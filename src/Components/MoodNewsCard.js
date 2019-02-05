import React from 'react'
import '../App.css'

const MoodNewsCard = props => {
  console.log(props)
  return (
    <div>
    <a href={props.story.news_src}><p>{props.story.title}</p></a>
    <p>{props.story.description}</p>
    </div>
  )
}


export default MoodNewsCard;
