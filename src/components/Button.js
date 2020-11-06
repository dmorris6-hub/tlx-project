import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large']

export const Button = ({children, type, onCLick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  
  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <div>
        <Link to='/sign-in' className="btn-mobile">
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
            onClick={onCLick}
            type={type}>

                {children}
            </button>
        </Link>
    </div>

      
  )
};
