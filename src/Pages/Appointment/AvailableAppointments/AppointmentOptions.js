import React from 'react';

const AppointmentOptions = ({ option }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary text-white">book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;