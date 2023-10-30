import React from 'react'
import './style.scss';
interface Iinput {
    type?: string,
    placeholder?: string,
    className?: string
}

function Input({ type, placeholder, className }: Iinput) {

    return (
        <input type={type} placeholder={placeholder} className={`input_ladin ${className}`} />
    )
}
export default Input