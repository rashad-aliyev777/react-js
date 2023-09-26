import React from 'react'

const Mukafat = (props) => {

  return (
    <div className='award'>
        <img src={props.mukafatSekili} alt="" />
        <h2>{props.mukafatBasligi}</h2>
        <p>{props.mukafatMetni}</p>
    </div>
  )
}

export default Mukafat