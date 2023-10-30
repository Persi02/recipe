import React from 'react'
import { Link } from 'react-router-dom'
interface Props {
    items: {
        label: string,
        link: string
    }[],
    className: string
}
function NavbarItems({ items, className }: Props) {
    return (
        <>
            {items.map((item, idx) => (<Link to={item.link} className={className} key={idx}>{item.label}</Link>))}
        </>
    )
}

export default NavbarItems