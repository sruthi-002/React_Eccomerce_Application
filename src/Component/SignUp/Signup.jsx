import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
    const [data,setData] =useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const navigate = useNavigate()
    const handleInput=(e)=>
    {
        setData(()=>
        {
            return{
                ...data,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleSubmit=(event)=>
    {
        console.log(data)
        event.preventDefault();
        let Emailpattern = "^(?=.*[a-zA-Z0-9])(?=.*[@]).+$"
        let Passwordpattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
        if(data.name==='')
        {
            document.getElementById('signUpName').innerText='Username is Required'
        }
        else if(data.email==='')
        {
            document.getElementById("userRegister").innerText='Email Id is Required'
        }
        else if(!(data.email.match(Emailpattern)))
        {
            document.getElementById("userRegister").innerText="Enter a valid Email Id"
        }
        else if(data.password==='')
        {
            document.getElementById("passwordRegister").innerText='Password is Required'
        }
        else if(!(data.password.match(Passwordpattern)))
        {
            console.log("pattern")
            document.getElementById("passwordRegister").innerText="Password must contain atleast one uppercase,number and a special character"
        }
        else if (!(data.password === data.confirmPassword))
        {
            document.getElementById("confirmRegister").innerText=`Password doesn't match`
        }
        else{
            document.getElementById('userRegister').innerText=''
            document.getElementById('passwordRegister').innerText=''
            navigate('/')
        }
        if(data.name!=='')
        {
            document.getElementById('signUpName').innerText=''
        }
        if(data.password.match(Passwordpattern))
        {
            document.getElementById('passwordRegister').innerText=''
        }
        if(data.email.match(Emailpattern))
        {
            document.getElementById("userRegister").innerText=''
        }
    }
  return (
    <div className='signupContainer'>
            <form className='sign' onSubmit={(e)=>handleSubmit(e)}>
                <h3 className='register'>Register</h3>
                <input className='SignInput' 
                type='text' placeholder='Name' name='name'
                onChange={(e)=>handleInput(e)}/>
                <span id="signUpName" className='signUpError'></span>
                <input className='SignInput' type='text' placeholder='Email' name='email'
                onChange={(e)=>handleInput(e)}/>
                <span id="userRegister" className='signUpError'></span>
                <input className='SignInput' type='password' placeholder='Password' name='password'
                onChange={(e)=>handleInput(e)}/>
                <span id="passwordRegister" className='signUpError' ></span>
                <input className='SignInput' type='password' placeholder='Confirm Password' name='confirmPassword'
                onChange={(e)=>handleInput(e)}/>
                <span id="confirmRegister" className='signUpError'></span>
                <div></div>
                <button className='signUpbutton'>SignIn</button>
                <div className='link'>
                    <p>Already have an account?
                    <Link to='/' style={{textDecoration:'underline'}}>Login</Link></p>
                </div> 
            </form>
    </div>
  )
}

export default Signup