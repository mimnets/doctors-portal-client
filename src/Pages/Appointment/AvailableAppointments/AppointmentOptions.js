import React from 'react';

const AppointmentOptions = ({ option, setTreatment }) => {
    const { name, price, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label 
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn btn-primary" 
                    onClick={()=> setTreatment(option)}
                    >book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;