import React from 'react'
import CardCollection from './CardCollection';
interface ICollectionItem {
    items: {
        link: string,
        title?: string
    }[]
}
function CollectionItem({ items }: ICollectionItem) {
    return (
        <>
            {items.map((item, idx) => (<CardCollection source={item.link} key={idx} />))}
        </>
    )
}

export default CollectionItem;