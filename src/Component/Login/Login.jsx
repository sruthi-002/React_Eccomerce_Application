import React, { useState } from 'react';
import './Login.css' 
import logo from './logo.png';
import { useNavigate ,Link } from 'react-router-dom';
const Login = () => {
  const [ data , setData ]= useState({
    userName:'',
    password:''
  })
  let navigate = useNavigate()
  function handleInput(event)
  {
    setData(()=>
    {
      return {
        ...data,
        [event.target.name]:event.target.value
      }
    })
  }
  function handleSubmit(event)
  {
    event.preventDefault()
    let Emailpattern = "^(?=.*[a-z])(?=.*[@]).+$"
    let Passwordpattern ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    if(data.userName==='')
    {
      document.getElementById("userInformation").innerText='Email Id is required'
    }
    else if(!(data.userName.match(Emailpattern)))
    {
      document.getElementById("userInformation").innerText='Incorrect Email Id'
    }
    else if(data.password==='')
    {
      document.getElementById("passwordInformation").innerText='Password is required'
    }
    else if(!(data.password.match(Passwordpattern)))
    {
      document.getElementById("passwordInformation").innerText='Password must contain atleast one uppercase,number and a special character'
    }
    else
    {
      console.log("Success")
      navigate('/home')
    }
    if(data.userName.match(Emailpattern))
    {
      document.getElementById('userInformation').innerText=''
    }
    if(data.password.match(Passwordpattern))
    {
      document.getElementById('passwordInformation').innerText=''
    }
  }
  return (
    <div className='back'>
        <div>
            <div className="nav">
              <img className='logoh' src={logo}/>
                <h1>EASYBUY</h1>
            </div>
        </div>
        <div className="container">
          <form className="formContainer" action="/home" onSubmit={handleSubmit}>
              <h3>SignIn</h3>
              <input className="input1" type="text" id="username"
               name="userName" placeholder="Email Id" 
               size="30" onChange={(e) => handleInput(e)}/>
               <span id='userInformation' className='loginError'></span>
              <input className="input1" type="password" id="password" name="password" 
              placeholder="Password" 
              size="30"
              onChange={(e)=>handleInput
              (e)}/><span id="passwordInformation" className='loginError'></span>
              <label style={{float:"left"}}>
                  <input type="checkbox"/>
                  Remember Me
              </label>
              <button type="submit" className="btn">Login</button> 
              <Link to='/signup' id='signup'className='links'>New User?</Link>
          </form>
        </div>
    </div>
  )
}

export default Login;