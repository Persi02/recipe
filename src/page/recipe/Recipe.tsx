import React, { useEffect } from 'react'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}

function Recipe({ setIsLayout, isLayout }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])
    return (
        <div>Recipe</div>
    )
}

export default Recipe;