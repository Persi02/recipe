import React, { useEffect } from 'react'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}

function Courses({ setIsLayout, isLayout }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])
    return (
        <div>Courses</div>
    )
}

export default Courses