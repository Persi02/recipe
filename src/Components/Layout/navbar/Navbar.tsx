import React, { useEffect, useState } from 'react'
import './style.scss'

import MenuIcon from '../../icons/MenuIcon';
import LogoIcon from '../../icons/LogoIcon';
import NavbarItems from '../NavbarItems';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../../General/searchBar/SearchBar';
import Button from '../../General/button/Button';
import NotifIcon from '../../icons/NotifIcon';
import ProfilIcon from '../../icons/ProfilIcon';

interface Iitems {
    label: string,
    link: string
}
interface IisLogged { isLogged: boolean, image: string, setImage: React.Dispatch<React.SetStateAction<string>>, }



function Navbar({ isLogged, image, setImage }: IisLogged) {

    const [isProfil, setIsProfil] = useState<boolean>(true)
    const navigate = useNavigate();

    const logOut: React.MouseEventHandler<HTMLButtonElement> = () => {
        localStorage.clear();
        navigate('/connexion')
    }

    const items: Iitems[] = [{ label: "Home", link: "/" }, { label: "Recipe", link: "/recipe" }, { label: "Meal Planners", link: "/mealplanners" }, { label: "Courses", link: "/courses" }, { label: "About us", link: "/about" }, { label: "Contact", link: "/contact" }
    ]
    useEffect(() => {
        if (localStorage.getItem('avatar')) {
            console.log(localStorage.getItem('avatar'));
        }
    }, [])

    return (
        <header className='navbar'>
            <div className="wrap_logo">
                <div className='icon_menu'>
                    <MenuIcon />
                </div>
                <LogoIcon />
            </div>
            <nav className="nav">
                <NavbarItems items={items} className="nav_link" />
            </nav>
            <div className="menu_nav">
                <SearchBar />
                {isLogged && <Link to='/connexion' >
                    <Button className="btn_sing btn--orange " text="Login" />
                </Link>}
                {isLogged && <Link to='/inscription' >
                    <Button className="btn_sing" text="Sing Up" />
                </Link>}
                {!isLogged &&
                    <div className="wrap_profil">
                        {image && <Link to='/profil'> <img src={image} alt="" /></Link>}
                        {!image && <Link to='/profil'><ProfilIcon /></Link>}
                    </div>}
                {!isLogged && <NotifIcon />}
                {!isLogged && <Button postUser={logOut} className="btn_sing" text="log out" />}

            </div>
        </header>
    )
}

export default Navbar;