import React from 'react'

//TODO add animated loader

const Loader = ({ text }) => {

    return (
        <div>
            <p className="mt-10 font-semibold">{text}</p>
        </div>
    )
}

Loader.defaultProps = {
    text: 'Loading...'
};

export default Loader