import React, { useEffect } from 'react'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}

function MeanPlanners({ setIsLayout, isLayout }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])
    return (
        <div>MeanPlanners</div>
    )
}

export default MeanPlanners