import React from 'react'
import '../App.css'

const MoodNewsCard = props => {
  return (
    <div className="moodNewsCard">
      <h3 className="moodNewsCardTitle"><a href={props.story.news_src} target="_blank" rel="noopener noreferrer"><u>{props.story.title}</u></a></h3>
      <p>{props.story.description}</p>
    </div>
  )
}


export default MoodNewsCard;
