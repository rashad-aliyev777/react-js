import React from 'react'
import Button from './Button'
import './css/Introduction.css'

import sagterefSekil from '../assets/images/introduction/sagteref.svg'

import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div className="introduction">
        <div className="introduction-sol">
            <h6>Next genaretion platform</h6>

            <Typed
                className='type-text'
                strings={[
                    'Artificial intelligence',
                    '& Syber security',]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>

            <div className="button-groups">
                <Button buttonunMetni='Get Started' />
                <Button buttonunMetni='Watch Video' />
            </div>
            
        </div>

        <div className="introduction-sag">
            <img src={sagterefSekil} alt="" className='main-img'/>
        </div>

    </div>
  )
}

export default Introduction