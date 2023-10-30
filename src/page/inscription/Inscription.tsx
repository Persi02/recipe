import React, { useState } from 'react'
import './style.scss'
import { useEffect } from 'react'
import CardRecipe from '../../Components/Display/cardRecipe/CardRecipe'
import Text from '../../Components/General/text/Text'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '../../Components/icons/GoogleIcon'
import { TextField } from '@mui/material'
import ImgPub from '../../assets/image/imgconnexion.jpg'
import Button from '../../Components/General/button/Button'
import { toast } from 'react-hot-toast'
import { accountService } from '../../_service/account.service'
import UserService from "../../_service/UserService";



interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    isLayout: boolean
}
interface Iuser {
    username?: string,
    email?: string,
    password?: string
}
function Inscription({ setIsLayout, isLayout }: IisLayout) {

    const [user, setUser] = useState<Iuser>({});
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/')
        }
    })
    useEffect(() => {
        if (isLayout) {
            setIsLayout(false)
        }
    }, [isLayout, setIsLayout])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }
    const postUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (!user.email || !user.username || !user.password) {
            toast.error("veullez remplir tous les champs")
        } else if (user.username.length < 4) {
            toast.error("username trop court")
        } else if (user.password.length < 4) {
            toast.error("mot de pass trop court")
        }

        else {
            try {
                let res = await UserService.postUser("http://localhost:4400/api/user", user);
                accountService.saveToken(res.data.token);
                accountService.saveRefresToken(res.data.refreshToken
                );
                localStorage.setItem('username', res.data.data.username);
                localStorage.setItem('email', res.data.data.email);
                localStorage.setItem('userId', res.data.data._id);


                toast.success("inscription reussie")
                navigate('/')
            } catch (error) {
                console.error(error)
            }
        }
    }




    return (
        <div className="wrap_connexion">
            <CardRecipe source={ImgPub} />
            <div className="wrap_forme_login">
                <Text tag='h1' text='Sign up for FOOD RECIPE' size='30px' weight='600' />
                <Link to="" className="btn_google">
                    <GoogleIcon />
                    <Text tag='p' text='Connect with Google' size='14px' weight='600' color="#000" />
                </Link>
                <Text tag='p' text='or' size='14px' weight='600' color="#000" />
                <form >

                    <TextField label="User-Name" variant="standard" type='text' fullWidth sx={{ marginBottom: 1 }} onChange={handleChange} name='username' required />
                    <TextField label="E-mail" variant="standard" type='email' fullWidth sx={{ marginBottom: 1 }} onChange={handleChange} name='email' required />
                    <TextField label="Password" variant="standard" type="password" fullWidth sx={{ marginBottom: 3 }} onChange={handleChange} name='password' required />
                    <Link to='' className='forgot_center'>
                        <Text tag='p' size='10px' weight='400' text='By creating an account, you agree to our  Terms of use and Privacy policy' color="#000" />
                    </Link>
                    <Button
                        text='Sign up'
                        className='btn_sing btn--orange btn--lg'
                        type='submit'
                        postUser={postUser}
                    />
                    <div className='text_singup'>
                        <Text tag='p' size='10px' weight='400' text='Already have an account?' />
                        <Link to='/connexion'>Log In</Link>
                    </div>

                </form>

            </div>

        </div>
    )
}


export default Inscription