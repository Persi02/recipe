import React from 'react'
import './style.scss'
import Text from '../../General/text/Text'

type Source = { source: string };
function CardCollection({ source }: Source) {
    return (
        <article className='card_collection'>

            <figure>
                <img src={source} alt="" />
            </figure>
            <div className="body_card_collection">
                <Text text="Sushi combos for your Next Party" tag="h3" size='30px' weight="600" color="rgba(0, 0, 0, 0.70)" />
                <div className="nbr_recipe">156recipes</div>
            </div>
        </article>
    )
}

export default CardCollection