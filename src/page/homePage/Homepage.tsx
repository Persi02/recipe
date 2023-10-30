import './style.scss'
import React, { useEffect } from 'react'
import Gateaux from '../../assets/image/gateaux.jpg'
import Burger from '../../assets/image/burger.jpg'
import Pizza from '../../assets/image/pizza.jpg'
import Chalade from '../../assets/image/chalade.jpg'
import Beur from '../../assets/image/beur.jpg'
import Fruit from '../../assets/image/fruit.jpg'
import Multi from '../../assets/image/multi.jpg'
import Text from '../../Components/General/text/Text'
import Input from '../../Components/General/input/Input'
import Button from '../../Components/General/button/Button'
import ImgRecipe1 from '../../assets/image/recipe1.png';
import ImgRecipe2 from '../../assets/image/recipe2.png';
import SplideItem from './SplideItem'
import CardHero from '../../Components/Display/cardHero/CardHero'
import MenuFavoriseItem from '../../Components/General/MenuFavoriseItem/MenuFavoriseItem'
import ProductItems from '../../Components/Display/cardFavorise/ProductItems'
import RondedIteration from '../../Components/Display/cardRonded/RondedIteration'
import CardRecipe from '../../Components/Display/cardRecipe/CardRecipe'
import CollectionItem from '../../Components/Display/cardCollection/CollectionItem'

interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    image: string
}

function Home({ setIsLayout, isLayout, setImage, image }: IisLayout) {
    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])

    const productesFavoris = [
        { link: Burger, title: "Cheese burger", status: "public", statusText: "Public" }
        ,

        { link: Pizza, title: "Mac & Cheese", status: "public", statusText: "Public" }
        ,

        { link: Chalade, title: "Salad caesar with chicken", status: "private", statusText: "Private" }

    ];
    const sweetyTooth = [
        { link: Beur, title: "Caramel pots", status: "public", statusText: "Public" }
        ,

        { link: Multi, title: "Cheesecake", status: "private", statusText: "Private" }
        ,
        { link: Fruit, title: "Japanese Pancake", status: "public", statusText: "Public" }]


    const Diet = [
        {
            label: "Dairy free",
            link: "/"
        },
        {
            label: "Egg free",
            link: "/#"
        }
        ,
        {
            label: "Sugar free",
            link: "/#"
        },
        {
            label: "Glutten free",
            link: "/#"
        }
    ]
    const Allergies = [
        {
            label: "Glutten",
            link: "/"
        },
        {
            label: "Legme",
            link: "/#"
        }
        ,
        {
            label: "Fruite",
            link: "/#"
        },
        {
            label: "Grain",
            link: "/#"
        }
    ];
    const Cuisines = [
        {
            label: "Asian",
            link: "/"
        },
        {
            label: "Italian",
            link: "/#"
        }
        ,
        {
            label: "Mexican",
            link: "/#"
        },
        {
            label: "Thai",
            link: "/#"
        }
    ];
    const Goals = [
        {
            label: "Wheight loss",
            link: "/"
        },
        {
            label: "Freshness",
            link: "/#"
        }
        ,
        {
            label: "Activeness",
            link: "/#"
        },
        {
            label: "Rich nutritions",
            link: "/#"
        }
    ];
    const popular = [
        { link: Burger, title: "Pasta" }
        ,

        { link: Pizza, title: "Pizza" }
        ,

        { link: Chalade, title: "Vegan" }
        ,
        { link: Beur, title: "Dessert" }
        ,

        { link: Multi, title: "Smoothie" }
        ,
        { link: Fruit, title: "Breakfast" }
        ,
        { link: Beur, title: "Dinner" }
    ]
    // useEffect(() => {
    //     if (localStorage.getItem('avatar')) {
    //         setImage(JSON.stringify(localStorage.getItem('avatar')))

    //     }
    // })


    return (
        <main>
            <section className='section_hero'>
                <div className='wrap'>

                    <CardHero source={Gateaux} />

                </div>
            </section>
            <section className='section_favorise wrap'>
                <div className="wrap_menu_favorise">
                    <div className="favorise_menu">
                        <Text tag="h3" text='Filter Recipes' weight='400' color="var(--primary)" />
                        <MenuFavoriseItem items={Diet} title="Diet" />
                        <MenuFavoriseItem items={Allergies} title="Allergies" />
                        <MenuFavoriseItem items={Cuisines} title="Cuisines" />
                        <MenuFavoriseItem items={Goals} title="Goals" />

                    </div>
                </div>
                <div className="card_favorise_product">
                    <Text tag="h2" text="Super Delicious" size="20px" weight='600' color='rgba(0, 0, 0, 0.70)' />
                    <div className="favorise_product">
                        <ProductItems products={productesFavoris} />
                    </div>
                    <Text tag="h2" text="Sweety tooth" size="20px" weight='600' color='rgba(0, 0, 0, 0.70)' />
                    <div className="favorise_product">
                        <ProductItems products={sweetyTooth} />


                    </div>
                </div>

            </section>
            <section className='popular_category wrap' >
                <Text tag="h2" text="Super Delicious" size="20px" weight='600' color='rgba(0, 0, 0, 0.70)' />
                <div className="wrap_popular">
                    <RondedIteration items={popular} />
                </div>
            </section>
            <section className='get_recipe wrap'>
                <div className="card_recipe">
                    <CardRecipe source={ImgRecipe1} />
                    <CardRecipe source={ImgRecipe2} />
                </div>
                <div className="card_get">
                    <div>
                        <Text tag="h2" text="Get the recipe book!!!" size="18px" weight='600' color='rgba(0, 0, 0, 0.70)' />
                        <Text tag="p" text="A recipe book , guiding both novice and experienced cooks through the art of preparing delightful dishes." weight='400' color='rgba(0, 0, 0, 0.70)' />
                    </div>
                    <Text tag="p" text="Or contact us  :+854 745 963" weight='400' color='rgba(0, 0, 0, 0.70)' />
                    <div>
                        <Input type="text" placeholder="E-mail" />
                        <Button className="btn_sing  btn--orange " text="Get" />
                    </div>
                </div>
            </section>
            <section className="wrap_collection">
                <Text tag="h2" text="Hand-Picked Collections" weight='400' size='30px' />
                <div className="collection">
                    <CollectionItem items={productesFavoris} />
                    <CollectionItem items={sweetyTooth} />

                </div>
            </section>
            <section className="latest_recipe wrap">
                <Text tag="h2" text="Latest recipe" size="20px" weight='600' color='rgba(0, 0, 0, 0.70)' />
                <div className="carosel">
                    <SplideItem products={popular} />
                </div>

            </section>
        </main>

    )
}


export default Home;