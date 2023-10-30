import React from 'react'
import './style.scss'

type Source = { source: string };

const CardRecipe = ({ source }: Source) => {
    return (

        <article className='recipe'>
            <figure>
                <img src={source} alt="" />
            </figure>
        </article>
    )
}

export default CardRecipe;