import React, { useEffect, useState } from 'react'
import { capitalizeFirstLetterText } from '../../../helpers/strings'

const InputText = ({ onChange: onChangeProp, classes, placeholder, autofocus, capitalizeFirstLetter, allowSpecialChars }) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        const inputVal = e.target.value;
        const textVal = allowSpecialChars ? inputVal : inputVal.replace(/[^a-zA-Z, .']+/g, '');
        const finalVal = capitalizeFirstLetter ? capitalizeFirstLetterText(textVal) : textVal;
        setValue(finalVal);
    }

    //TODO add clear input X

    useEffect(() => {
        onChangeProp(value);
    }, [value])

    return (
        <input
            onChange={onChange}
            value={value}
            className={classes}
            placeholder={placeholder}
            autoFocus={autofocus} />
    )
}

export default InputText