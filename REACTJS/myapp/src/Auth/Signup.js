import React, { useState } from "react";
import { toast } from "react-toastify";
const Signup= () => {
    const [name, setName]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const formhander =(e)=>{
      e.preventDefault(); 
      try {
        console.log(name,email, password) // to prevent page reload on form submission.
    toast.success("user register successfully")
    setName("")
    setEmail("")
    setPassword("")
      } catch (error) {
        console.log(error)
        toast.error("Failed to register user")
      }
    }

  return (

    <div className="container">
      <h1 className="text-center ">SignUp Screen</h1>
      <form onSubmit={formhander}>
        <div className="text-center m-auto rounded shadow w-25 p-3 ">
          <div className="p-3">
            <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-info">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
