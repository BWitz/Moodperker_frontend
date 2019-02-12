import React from 'react'
import '../App.css'

const MoodQuoteCard = props => {
  return (
    <div className="moodQuoteCard">
      <p> <i>{props.quote.quote}</i> <br /> -     <b>{props.quote.author}</b> </p>
    </div>
  )
}


export default MoodQuoteCard;
