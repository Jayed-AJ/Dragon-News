import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Register = () => {

    const {createUser,setUser} = use(AuthContext);

    const handelSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
        }).catch(error => console.log(error))
        
    }

    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5 mt-20 mx-auto">
                <div className="card-body">
                    <form onSubmit={handelSubmit} className="fieldset">
                <h1 className="text-center text-2xl font-semibold">Register Your Account</h1>
                    <label className="label">Name</label>
                    <input name='name'  type="text" className="input" placeholder="Name" />
                    <label className="label">Photo Url</label>
                    <input name="url"  type="text" className="input" placeholder="Photo-URL" />
                    <label className="label">Email</label>
                    <input name='email' required type="email" className="input" placeholder="Email" />
                    <label  className="label">Password</label>
                    <input name='password' required type="password" className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className="text-center font-bold mt-4">All Ready have an Account?
                         <Link to="/auth/login" className='text-secondary' >Login</Link>
                    </p>
                </div>
                </div>
        </div>
    );
};

export default Register;