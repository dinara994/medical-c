import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../../Components/Spinner";
import ModalCard from "../../Components/ModalCatd";
//FormData - это КОНСТРУКТОР создает новые обьект FormData, простыми словани создает HTML-форму

const Project = ({reset}) => {
    const [gallery, setGallery] = useState([])
    const [image, setImage] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [cName, setClassName] = useState('jsGridView');
    const [showModal, setShowModal] = useState(false);

    const onSubmit = (data) => { //форма отправляется собирает все данные с модалки и отправляет
       data.image = image.url //в ключ image добавим ссылку которую мы получили от cloudinary  {(изменили назв-я ключа в обьекте(можем еще добавлять ключ))}
        axios.post('https://613f1faee9d92a0017e17474.mockapi.io/api/gallery', data) //загружаем на mockapi
            .then(({data}) => {
                setGallery([...gallery, data])
                setShowModal(false)

            })

    }

    const handleChange = (e) => {
        const  formData = new FormData()
        formData.append('file', e.target.files[0]) //ключт 'file' => значение ключа data.image
        formData.append('upload_preset', 'gallery') //ключт 'file' => значение ключа data.image

        axios.post('https://api.cloudinary.com/v1_1/dinara994/upload', formData) //- отправляется на cloudinary
            .then(({data}) => setImage(data)) //приходит в виде обьекта ссылкой => кладется в useState
    }

    useEffect(() => {
        axios('https://613f1faee9d92a0017e17474.mockapi.io/gallery')
            .then(({data}) => {
                setGallery(data)
                setIsLoading(false)

            })
    }, [])



    if (isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <div>
            <button  onClick={() => setShowModal(true)}>Add new card</button>
            <ModalCard onSubmit={onSubmit}
                       handleChange={handleChange}
                       setShowModal={setShowModal}
                       showModal={showModal}
            />

            <div className='mb-5 d-block'>
                <button className="view-btn list-view" title="List View" onClick={() => {
                    setClassName('jsListView')}}>
                    <i className="fa fa-bars"></i>
                </button>
                <button className="view-btn list-view" title="Grid View" onClick={() => setClassName('jsGridView')}>
                    <i className="fa fa-th-large" ></i>
                </button>
            </div>
            <div className='row'>

                <div className={'col ' +cName}>
                    {
                        gallery.map(item =>
                            <div className='col ' key={item.id}>
                                <div className="box">
                                    <img src={item.image} className='card__img'/>
                                    <p className='date'>{item.dateS} / {item.dateE} гг.</p>
                                    <h3 className='card__author'>{item.author}</h3>
                                    <h5 className='card__title'>{item.title}</h5>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Project;