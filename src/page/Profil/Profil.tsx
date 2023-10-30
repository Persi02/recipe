import React, { useEffect, useState } from 'react'
import './style.scss'
import imgProfil from './profil.jpg'
import axios from 'axios'
import Button from '../../Components/General/button/Button'



interface IisLayout {
    setIsLayout: React.Dispatch<React.SetStateAction<boolean>>,
    setImage: React.Dispatch<React.SetStateAction<string>>,
    isLayout: boolean,
    image: string

}
let fileFinale: string = ''


function Profil({ setIsLayout, isLayout, setImage, image }: IisLayout) {
    const [file, setFile] = useState<File>()

    const formData: FormData = new FormData()
    const [isHide, setIsHide] = useState<boolean>(false)
    const [update, setUpdate] = useState<boolean>(false)
    const username = localStorage.getItem('username');


    useEffect(() => {
        if (!isLayout) {
            setIsLayout(true)
        }
    }, [isLayout, setIsLayout])

    const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            setFile(e.target.files[0]);


        }
    }
    useEffect(() => {
        if (file) {
            fileFinale = URL.createObjectURL(file);
        };
    }, [file, update])

    const postImgUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault()


        if (file) {
            setIsHide(false)
            setUpdate(!update)
            setImage(fileFinale)


            const userId: string | null = localStorage.getItem('userId');
            if (typeof userId === "string") {
                formData.append('file', file);
                formData.append('userId', userId)
                console.log(formData.get('file'));
                console.log(formData.get('userId'));



                try {

                    await axios.post("http://localhost:4400/api/image", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });



                } catch (error: any) {
                    console.error(error);


                }
            }

        }
    }


    return (
        <>
            <section className="couverture">
                <div className="card_profil">
                    <div className='wrap_profil'>
                        {image ? <img src={image} alt="" className='photo_profil' /> : <img src={imgProfil} alt="" className='photo_profil' />}
                        <button className='edit_profil' onClick={() => setIsHide(true)}></button>

                    </div>
                    <h3>{username}</h3>
                    {isHide && <div className="card_edit">
                        <form action="submit" encType='multipart/form-data' onSubmit={postImgUser}  >
                            <div className="wrap_edit"
                            >
                                <button className='cancel' onClick={() => setIsHide(false)}></button>
                                <input
                                    type='file'
                                    accept='/image/*'
                                    onChange={handlechange}
                                    name='file'
                                />
                            </div>

                            <Button type='submit' text='Send' className='btn_sing btn--orange btn--lg' />
                        </form>
                    </div>}



                </div>
            </section>
        </>

    )
}

export default Profil







