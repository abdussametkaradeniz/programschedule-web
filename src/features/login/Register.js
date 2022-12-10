import React, { Component } from 'react'


function Register(){
 

    return (
      <div>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Register</h3>
              <div className="form-group mt-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Name</label>
                <input
                  type="userName"
                  className="form-control mt-1"
                  placeholder="Enter your Name"
                  
                />
              </div>
              <div className="form-group mt-3">
                <label>Surname</label>
                <input
                  type="userName"
                  className="form-control mt-1"
                  placeholder="Enter your Surname"
           
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                 
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"
               >
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  
}



export default Register;
