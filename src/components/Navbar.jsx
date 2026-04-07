import React, { use } from "react";
import { Link, NavLink } from "react-router";
import User from "../assets/user.png";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {

  const {user,signOutUser} = use(AuthContext);
  // console.log(user);


  const handelSignOut = () => {
    signOutUser();
    console.log("signOut Succsesful!");
  }

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && <p>{user.email}</p>}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={User} alt="" />
        {user? <Link onClick={handelSignOut} className="btn btn-primary px-10 ">LogOut</Link>
          :<Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>}
      </div>
    </div>
  );
};

export default Navbar;
