import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png';
import cavity from '../../../../assets/images/cavity.png';
import whitening from '../../../../assets/images/whitening.png'
import OurService from '../OurService/OurService';
const OurServices = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-secondary text-xl font-semibold uppercase'>OUR SERVICES</h2>
                <h1 className='text-2xl font-semibold'>Services We Provide</h1>
            </div>

        <div className='grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
            {
                services.map(service => <OurService key={service.id} service={service}></OurService>)
            }
        </div>
        </div>
    );
};

export default OurServices;