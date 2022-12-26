import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    let footer = <p>Please pick a day</p>;
    if(selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}</p>
    }
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onChange={selectedDate}
                            onSelect={setSelectedDate}
                            footer={footer}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;