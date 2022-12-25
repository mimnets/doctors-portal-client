import React from 'react';
import appointment from '../../../../assets/images/appointment.png';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const Contacts = () => {
    return (
        <section 
        style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover',
        }}
            className="mt-16">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div>
                                <h2>Contact US</h2>
                                <h1>Stay Connected With Us</h1>
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">

                                <input type="text" placeholder="Subject" className="input input-bordered" />

                            </div>
                            <div className="">

                                <textarea type="text" placeholder="Your Message" className="input input-bordered h-24"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;