import React from 'react'

const FeedbackMessage = ({ type, text, classes }) => {
    const cssStyle = () => {
        if (type === 'error') {
            return 'text-red-800 text-opacity-80';
        } else if (type === 'info') {
            return 'text-purple-800 text-opacity-80';
        } else {
            return 'text-gray-700';
        }
    }

    return (
        <div className={`${cssStyle()} font-semibold ${classes}`}>{text}</div>
    )
}

export default FeedbackMessage