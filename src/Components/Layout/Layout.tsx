import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './footer/Footer'
import Home from '../../page/homePage/Homepage'
import Inscription from '../../page/inscription/Inscription'
import Connexion from '../../page/connexion/Connexion'
import About from '../../page/about/About'
import Profil from '../../page/Profil/Profil'
import Contact from '../../page/contact/Contact'
import Recipe from '../../page/recipe/Recipe'
import MeanPlanners from '../../page/meanPlanners/MeanPlanners'
import Courses from '../../page/courses/Courses'


function Layout() {
    const [isLayout, setIsLayout] = useState<boolean>(true);
    const [isLogged, setIsLogged] = useState<boolean>(true);
    const [image, setImage] = useState<string>('')
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogged(false);
        } else {
            setIsLogged(true);
        }
    }, [isLayout])
    return (
        <>
            <Navbar isLogged={isLogged} image={image} setImage={setImage} />
            <Routes>

                <Route path="/"
                    element={<Home setIsLayout={setIsLayout} isLayout={isLayout} setImage={setImage} image={image} />} />
                <Route path="/about"
                    element={<About setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/profil"
                    element={<Profil setIsLayout={setIsLayout} isLayout={isLayout} setImage={setImage} image={image} />} />
                <Route path="/contact"
                    element={<Contact setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/recipe"
                    element={<Recipe setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/mealplanners"
                    element={<MeanPlanners setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/courses"
                    element={<Courses setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/inscription"
                    element={<Inscription setIsLayout={setIsLayout} isLayout={isLayout} />} />
                <Route path="/connexion"
                    element={<Connexion setIsLayout={setIsLayout} isLayout={isLayout} />} />
            </Routes>
            {isLayout && <Footer />}
        </>
    )
}

export default Layout