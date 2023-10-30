import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

interface IsplideItem {
    products: {
        link: string,
        title?: string
    }[]
}
function SplideItem({ products }: IsplideItem) {
    return (
        <Splide aria-label="My Favorite Images" options={{
            type: 'loop',
            perPage: 5,
            focus: 'center',
            gap: '30px'

        }}>
            {products.map((product, idx) => (
                <SplideSlide key={idx} >
                    <img src={product.link} alt="" />
                </SplideSlide>))}

        </Splide>
    )
}

export default SplideItem;

