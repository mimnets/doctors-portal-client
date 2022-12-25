import React from 'react';
import Banner from '../Banner/Banner';
import ExceptionService from '../ExceptionService/ExceptionService';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurServices from '../OurServices/OurServices/OurServices';
import Testimonial from '../Testimonial/Testimonial';
import Contacts from './Contacts/Contacts';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <ExceptionService></ExceptionService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;