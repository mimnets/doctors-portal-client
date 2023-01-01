import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {createUser, updateUser} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    if(token){
        navigate('/');
    }


    const handleSignUp = (data)=>{
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast('User created successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
                saveUser(data.name, data.email);
            })
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error)
            setSignUpError(error.message)
        });
        // console.log(errors);
    }

    const saveUser = (name, email) =>{
        const user = {name, email}
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('Save User', data);
            setCreatedUserEmail(email);
        })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                        {...register("name")}
                        className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                        {...register("email", {required: "Email must be provided"})}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {value: 6, message: "Password must be at least 6 characters long"},
                            pattern: {value: /(?=.*?[A-Z])(?=.*)(?=.*?[0-9])/, message: 'Password must be strong.'}
                        })}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Sing Up" type="submit" />
                    {signUpError && <p>{signUpError}</p>}
                </form>
                <p className='text-center'>Already have an account? <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;