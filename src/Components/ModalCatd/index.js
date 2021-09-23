import React from 'react';
import {useForm} from "react-hook-form";
import Modal from "react-modal";

const ModalCard = ({onSubmit, handleChange, showModal, setShowModal}) => {
    const {register, handleSubmit, reset} = useForm()

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
        >
            <form className='form-modal' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input className=' mb-3' type="file"
                           {...register('image', {required: true})}
                           onChange={handleChange}
                    />
                </div>
                <div className='mb-3 d-flex align-items-center justify-content-center'>
                    <input type="date" id="start" name="trip-start"
                           defaultValue="2021-07-22"
                           min="1940-01-01" max="2025-12-31" className='me-3'
                           {...register('dateS', {required: true})}
                    />
                    <input type="date" id="end" name="trip-start"
                           defaultValue="2021-07-22"
                           min="1940-01-01" max="2025-12-31"
                           {...register('dateE', {required: true})}

                    />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <input className='form-control mb-4 me-3' type="text"
                           placeholder='title'
                           {...register('title', {required: true})}/>
                    <input className='form-control mb-4' type="text"
                           placeholder='author'
                           {...register('author', {required: true})}/>
                    <button className='btn-aside' onClick={() => setShowModal={closeModal}}>Add</button>
                </div>
            </form>

        </Modal>
    );
};

export default ModalCard;