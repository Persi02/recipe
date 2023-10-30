import React, { useEffect } from 'react'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}

function About({ setIsLayout, isLayout }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])

    return (
        <div>About</div>
    )
}

export default About