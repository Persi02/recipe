import React from 'react'
import CardFavorise from './CardFavorise'

interface Iproduct {
    products: {
        link: string,
        title: string,
        status: string,
        statusText: string
    }[]
}

function ProductItems({ products }: Iproduct) {
    return (
        <>
            {products.map((item, idx) => (<CardFavorise source={item.link} title={item.title} status={item.status} statusText={item.statusText} key={idx} />))}
        </>
    )
}


export default ProductItems