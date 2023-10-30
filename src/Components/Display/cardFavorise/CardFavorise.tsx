import React from 'react'

import './style.scss'
import Text from '../../General/text/Text'

import HalfRating from './StartsRating'
import StatusCard from '../../General/statusCard/StatusCard'

interface IcardFavorise {
    source: string,
    title: string,
    status: string,
    statusText: string

}


function CardFavorise({ source, title, status, statusText }: IcardFavorise) {

    return (
        <article className='card_favorise'>

            <figure>
                <img src={source} alt="" />
            </figure>
            <div className="body_card_favorise">
                <div className='card_stars'>
                    <HalfRating />
                </div>
                <Text text={title} tag="h3" size='16px' weight="600" />
                <StatusCard text={statusText} className={status} />


            </div>
        </article>
    )
}


export default CardFavorise