import React from 'react'
import './Button.css'

const Button = ({ onClick, text, textClasses, classes }) => {
    return (
        <button onClick={onClick} type='submit' className={classes}>
            <span className={textClasses}>{text}</span>
        </button>
    )
}

Button.defaultProps = {
    text: 'Submit'
};

export default Button