import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ExceptionService = () => {
    return (
        <section className="">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row justify-center">
                    <div className='w-1/2 pl-50'>
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
                    </div>
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Getting Started</PrimaryButton>>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionService;