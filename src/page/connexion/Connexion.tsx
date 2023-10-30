import React, { useEffect, useState } from 'react'
import './style.scss'
import ImgPub from '../../assets/image/imgconnexion.jpg'
import CardRecipe from '../../Components/Display/cardRecipe/CardRecipe'
import Text from '../../Components/General/text/Text';
import GoogleIcon from '../../Components/icons/GoogleIcon';
import { TextField } from '@mui/material';
import Button from '../../Components/General/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { accountService } from '../../_service/account.service';
import toast from 'react-hot-toast';
import UserService from '../../_service/UserService';



interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}
interface Iuser {

    email?: string,
    password?: string
}

function Connexion({ setIsLayout, isLayout }: IisLayout) {

    const [user, setUser] = useState<Iuser>({});
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    })



    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )

    }

    const login = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        if (!user.email || !user.password) {
            toast.error("veullez remplir tous les champs")
        } else if (user.password.length < 4) {
            toast.error("mot de pass trop court")
        }

        else {
            try {
                let res = await UserService.postUser("http://localhost:4400/api/user/login", user);
                if (res.data.token && res.data.refreshToken) {
                    accountService.saveToken(res.data.token);
                    accountService.saveRefresToken(res.data.refreshToken
                    );
                    localStorage.setItem('username', res.data.user.username);
                    localStorage.setItem('email', res.data.user.email);
                    localStorage.setItem('userId', res.data.user._id);

                    // localStorage.setItem('avatar', res.data.user.avatar.nameHashed);




                    toast.success("Bienvenue")
                    navigate('/')
                } else {
                    toast.error("information incorrect")
                }

            } catch (error) {
                toast.error("information incorrect")
                console.error(error)
            }


        }
    }

    useEffect(() => {
        if (isLayout) {
            setIsLayout(false)
        }
    }, [isLayout, setIsLayout])
    return (

        <div className="wrap_connexion">
            <CardRecipe source={ImgPub} />
            <div className="wrap_forme_login">
                <Text tag='h1' text='Welcome Back' size='30px' weight='600' />
                <Link to="" className="btn_google">
                    <GoogleIcon />
                    <Text tag='p' text='Connect with Google' size='14px' weight='600' color="#000" />
                </Link>
                <Text tag='p' text='or' size='14px' weight='600' color="#000" />
                <form action="">
                    <TextField label="E-mail" variant="standard" type='email' fullWidth sx={{ marginBottom: 1 }} onChange={handleChange} name='email' required />
                    <TextField label="Password" variant="standard" type="password" fullWidth required sx={{ marginBottom: 3 }} onChange={handleChange}
                        name='password' />
                    <Link to='' className='forgot'>
                        <Text tag='p' size='10px' weight='400' text='Forget password?' color="#000" />
                    </Link>
                    <Button text='Log in' className='btn_sing btn--orange btn--lg' postUser={login} />
                    <div className='text_singup'>
                        <Text tag='p' size='10px' weight='400' text='Don’t have an account?' />
                        <Link to='/inscription'>SingUp</Link>
                    </div>

                </form>

            </div>

        </div>

    )
}


export default Connexion