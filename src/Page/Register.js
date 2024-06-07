
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const firstNameRegEx  = /^[A-Za-z]+$/;
    const lastNameRegEx   = /^[A-Za-z]+$/;
    const emailRegEx      = /^[^@]+@([^@]+\.)+[a-z]{2,6}$/; 
    const passwordRegEx   = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");
  
    const [error_firstName, setError_firstName] = useState("");
    const [error_lastName, setError_lastName] = useState("");
    const [error_email, setError_email] = useState("");
    const [error_password, setError_password] = useState("");
    const [error_confirm_password, setError_confirm_password] = useState("");
  
    const verify = (event) =>{
      event.preventDefault();

      let valid = true;      
      
      if (!firstNameRegEx.test(firstName)) {
        setError_firstName("Invalid first name");
        valid = false;
      } else {
        setError_firstName("");
      }
    
      if (!lastNameRegEx.test(lastName)) {
        setError_lastName("Invalid last name");
        valid = false;
      } else {
        setError_lastName("");
      }
    
      if (!emailRegEx.test(email)) {
        setError_email("Invalid email address");
        valid = false;
      } else {
        setError_email("");
      }
    
      if (!passwordRegEx.test(password)) {
        setError_password("Invalid password");
        valid = false;
      } else {
        setError_password("");
      }
      
  
      if (password == confirm_password){
        if (!passwordRegEx.test(confirm_password)) {
          setError_confirm_password("Password match, but invalid password");
          valid = false;
        } else {
          setError_confirm_password("");
        }
      }else{
        valid = false;
  
        if (!passwordRegEx.test(confirm_password)) {
          setError_confirm_password("Invalid (confirm) password, and confirm password does not match password");
        } else {
          setError_confirm_password("Confirm password does not match password");
        }
      }
  
      if (valid) {
        navigate("/profile", {state: { firstName, lastName, email }}); 
      }
    }
  
    return (
      <div className="App">
        <header className="page_header">
          <h1> CSCI 4177 Tutorial 3 </h1>
        </header>
        
        <div className='register_body'>
            <div className='register_title'>
                <h2> Register </h2>
            </div>    

            <div className='register_form'>
                <form onSubmit={verify}>
                    <div>
                        <label> First Name: </label>
                        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <p> {error_firstName} </p>
                    </div>    
        
            

                    <div>
                        <label> Last Name: </label>
                        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <p> {error_lastName} </p>
                    </div>    
        
              

                    <div>
                        <label> Email: </label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                        <p> {error_email} </p>
                    </div>

           

                    <div>
                        <label> Password: </label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        <p> {error_password} </p>
                    </div>
                    
                   

                    <div>
                        <label> Confirm Password: </label>
                        <input type="password" value={confirm_password} onChange={e => setConfirm_password(e.target.value)}/>
                        <p> {error_confirm_password} </p>
                    </div>    

                    
        
                    <input type="submit" value="Submit"></input>
    
                </form>
            </div>
        </div>    
    </div>
    );
  }

  export default Register;