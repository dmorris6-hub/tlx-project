import React from 'react'
import './SIButton.css'

const SIButton = ({ children, ...otherProps }) => {
    return (
        <button className='si-btn' {...otherProps}>
            {children}
        </button>
    )
}

export default SIButton
