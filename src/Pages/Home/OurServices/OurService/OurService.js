import React from 'react';

const OurService = ({ service }) => {
    const { name, description, icon } = service;
    return (
        <div className="card card-side bg-base-100 shadow-xl flex flex-col">
            <div>
            <figure><img className='w-24' src={icon} alt="Movie" /></figure>
            </div>
            <div className="card-body text-center">
                <h2 className="font-semibold text-2xl">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default OurService;