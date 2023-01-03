import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialists'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        console.log(data);
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-6'>
            <h3 className="text-3xl">Add A Doctor</h3>
            <div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email must be provided" })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Specialty</span></label>
                        <select className="select select-bordered w-full max-w-xs" {...register("specialty")}>
                            <option disabled selected>Please select a option</option>
                            {
                                specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input type="file"
                            {...register("file")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sing Up" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;