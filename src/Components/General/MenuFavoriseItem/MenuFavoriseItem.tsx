import React from 'react'
import { Link } from 'react-router-dom'
import Text from '../text/Text'

interface Imenu {
    items: {
        link: string,
        label: string
    }[]
    title: string,
}

function MenuFavoriseItem({ items, title }: Imenu) {
    return (
        <ul>
            <Text tag='h4' text={title} size='18px' color="var(--primary)" />
            {items.map((item, idx) => (
                (<Link to={item.link} key={idx}><Text tag='li' text={item.label} size='14px' weight='400' /></Link>)
            ))}
        </ul>
    )
}


export default MenuFavoriseItem;