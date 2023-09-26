import React from 'react'
import deep_sol from '../assets/images/deeplearnign/deep.svg'
import Button from './Button'

const DeepLearning = () => {
  return (
    <div className='deep-learning'>
        <div className="deep-learning-sol col-12 col-md-6">
            <img src={deep_sol} alt="" />
        </div>
        
        <div className="deep-learning-sag col-12 col-md-6">
            <h3>Apply AI, Deep Learning <br /> and Data Sciece to solve</h3>
            <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
            <Button buttonunMetni='Learn More'/>
        </div>
    </div>
  )
}

export default DeepLearning