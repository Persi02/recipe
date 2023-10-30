import React from 'react'
import './style.scss'
import Text from '../../General/text/Text'

interface IcardRonded {
    source: string,
    title: string
}

function CardRonded({ source, title }: IcardRonded) {
    return (
        <article className='card_ronded'>
            <figure>
                <img src={source} alt="" />
            </figure>
            <Text tag='h3' text={title} weight="600" />
        </article>
    )
}

export default CardRonded