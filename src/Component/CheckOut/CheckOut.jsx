import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './checkout.css'
const CheckOut = () => {
  const [data,setData]=useState({
    firstName:'',
    lastName:'',
    phoneNumber:'',
    address:''
  })
  const navigate = useNavigate();
  const handleSubmit=(event)=>
  {
    console.log(data)
    event.preventDefault();
    if(data.firstName==='')
    document.getElementById('firstNameError').innerText='FisrtName is Required'
    else if(data.phoneNumber.length!==10)
    {
      document.getElementById("phoneNumberError").innerText='Invalid Phone Number'
    }
    
    else if(data.address==='')
    document.getElementById("addressError").innerText="Address is Required"
    else
    {
      navigate('/orderSummary')
    }
    if(data.firstName!=='')
    document.getElementById('firstNameError').innerText=''
    if(data.phoneNumber.length===10)
    document.getElementById("phoneNumberError").innerText=''
    if(data.address!=='')
    document.getElementById("addressError").innerText=""
  }
  const handleInput=(event)=>
  {
    setData({
        ...data,
        [event.target.name]:event.target.value
      }
    )
    console.log("...")
  }
  return (
    <div className='checkoutContainer'>
       <form className='payment' onSubmit={handleSubmit}>
        <label>First Name</label>
        <input className='payinput'
         type='text' name='firstName' onChange={(e)=>handleInput(e)}/>
         <span id='firstNameError'className='checkOutError'></span>
        <label>Last Name</label>
        <input className='payinput' 
        type='text' name='lastName' onChange={(e)=>handleInput(e)}/>
        <span id='lastNameError' className='checkOutError'></span>
        <label>Phone Number</label>
        <input className='payinput' 
        type='text' name='phoneNumber' onChange={(e)=>handleInput(e)}/>
        <span id='phoneNumberError' className='checkOutError'></span>
        <label>Address</label>
        <input className='address' 
        type='text'name='address' onChange={(e)=>handleInput(e)}/>
        <span id='addressError' className='checkOutError' ></span>
        <div className='bp'>
          <Link to={'/cart'}>
        <button className='toPayment'>Back</button></Link>
        <button className='toPayment'>Next</button>
        </div>
       </form>
    </div>
  )
}

export default CheckOut