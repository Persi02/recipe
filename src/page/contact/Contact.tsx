import React, { useEffect } from 'react'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}

function Contact({ setIsLayout, isLayout }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])
    return (
        <div>Contact</div>
    )
}

export default Contact