import React from 'react'
import './style.scss'
interface Istatus {
    text: string,
    className: string
}

function StatusCard({ text, className }: Istatus) {
    return (
        <div className={`status_card ${className}`}  > {text}</div >
    )
}


export default StatusCard