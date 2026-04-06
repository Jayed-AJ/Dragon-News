import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
    const {signInUser,setUser} = useContext(AuthContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(result => {
            const user = (result.user);
            console.log(user);
            setUser(user);
        }).catch(error => console.log(error));
        
    }

    return (
        <div>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5 mt-20 mx-auto">
            <div className="card-body">
                <form onSubmit={handelSubmit} className="fieldset">
                <h1 className="text-center text-2xl font-semibold">Login Your Account</h1>
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className="text-center font-bold mt-4">Do not have an Account?
                    <Link to="/auth/register" className='text-secondary' >Register</Link>
                </p>
            </div>
        </div>
        </div>
    );
};

export default Login;