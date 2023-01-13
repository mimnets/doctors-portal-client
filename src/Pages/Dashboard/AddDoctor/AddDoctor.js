import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    // console.log(imageHostKey);

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialists'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-three-ruby.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = data => {
        // console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            // console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url)
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
                }
                // Save doctor information to the database
                fetch('https://doctors-portal-server-three-ruby.vercel.app/doctors', {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully.`);
                    navigate('/dashboard/manage-doctors');
                })
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-6'>
            <h3 className="text-4xl">Add A Doctor</h3>
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
                            {...register("image")}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;