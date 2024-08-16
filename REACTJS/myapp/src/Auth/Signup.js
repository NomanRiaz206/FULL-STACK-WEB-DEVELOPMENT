import React, { useState } from "react";
const Signup= () => {
    const [name, setName]= useState("");
    const [email, setEmai]=useState("");
    const [password, setPassword]=useState("");
    const formhander =(e)=>{
        e.preventDefault(); 
        console.log(name,email, password) // to prevent page reload on form submission.
    }
  return (
    
    <div className="container">
      <h1 className="text-center ">Singup Screen</h1>
      <form onSubmit={formhander}>
        <div className="text-center m-auto rounded shadow w-25 p-3 bg-dark">
          <div className="p-3">
            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmai(e.target.value)} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-info">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
