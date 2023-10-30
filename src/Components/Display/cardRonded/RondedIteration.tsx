import React from 'react'

import CardRonded from './CardRonded'

interface IrondedIteration {
    items: {
        link: string,
        title: string
    }[]
}

function RondedIteration({ items }: IrondedIteration) {
    return (
        <>
            {items.map((item, idx) => (<CardRonded key={idx} source={item.link} title={item.title} />))}
        </>
    )
}

export default RondedIteration