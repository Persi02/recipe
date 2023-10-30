import React from 'react'
import './style.scss'
import FacebookIcon from '../../icons/FacebookIcon'
import InstaIcon from '../../icons/InstaIcon'
import LogoIcon from '../../icons/LogoIcon'
import CoeurIcon from '../../icons/CoeurIcon'
import TwitterIcon from '../../icons/TwitterIcon'
import Input from '../../General/input/Input'
import Button from '../../General/button/Button'
import NavbarItems from '../NavbarItems'
import Text from '../../General/text/Text'


function Footer() {
    const menuFooter = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "Dinner",
            link: "/dinner"
        },
        {
            label: "Recipes",
            link: "/recipes"
        },
        {
            label: "Meals",
            link: "/meals"
        },
        {
            label: "About us",
            link: "/about"
        },
        {
            label: "Ingredients",
            link: "/ingredients"
        },
        {
            label: "Privacy Policy",
            link: "/privacy"
        },
        {
            label: "Product vetting",
            link: "/product"
        }
        ,
        {
            label: "Terms of service",
            link: "/termsofservice"
        }

        ,
        {
            label: "Occasions",
            link: "/occasions"
        }
        ,
        {
            label: "sitemap",
            link: "/sitemap"
        },
        {
            label: "Cuisines",
            link: "/cuisines"
        },
        {
            label: "Contact us",
            link: "/contact"
        },
        {
            label: "KItchen Tips",
            link: "/kitchen"
        },
        {
            label: "Blog",
            link: "/blog"
        },
        {
            label: "News",
            link: "/news"
        }
        ,
        {
            label: "Career",
            link: "/career"
        }
        ,

        {
            label: "Feature",
            link: "/feature"
        }


    ]

    return (
        <footer>
            <div className="wrap">
                <div className='wrap_footer'>
                    <div className="contact_footer">
                        <div className="box_rsociaux">
                            <Text tag="h4" text="Story Connected" />
                            <div className="card_rsociaux">
                                <FacebookIcon />
                                <InstaIcon />
                                <CoeurIcon />
                                <TwitterIcon />
                            </div>
                        </div>
                        <div className="newsletter_footer">
                            <Text tag="h4" text="Subscribe to our Newsetter" />
                            <Input type="text" placeholder="E-mail" />
                            <Button className="btn_sing  btn--orange " text="Subscribe" />
                        </div>
                    </div>
                    <div className="menus_footer ">
                        <NavbarItems items={menuFooter} className="menu_footer" />
                    </div>
                    <div className="logo_footer">
                        <LogoIcon />
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer