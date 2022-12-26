import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState();
    console.log(appointmentOptions)

    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
      },[])
    return (
        <section className='mt-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions key={appointmentOption._id}></AppointmentOptions>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;