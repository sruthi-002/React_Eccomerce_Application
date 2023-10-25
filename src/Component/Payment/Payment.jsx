import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  './Payment.css'
const Payment = () => {
  const[data,setData] =useState({
    holderName:'',
    cardNumber:'',
    month:'',
    year:0,
    cvv:''
  })
  const navigate = useNavigate()
  const handleSubmit=(event)=>{
    console.log(parseInt(data.month)<0)
    event.preventDefault();
    if(data.holderName==='')
    document.getElementById('holderError').innerText='Account holder name is required'
    else if(data.cardNumber==='')
    document.getElementById('cardNumberError').innerText='Card Number is required'
    else if(data.month==='')
    document.getElementById('monthError').innerText='Month is required'
    else if(data.year===0)
    document.getElementById('yearError').innerText='Year is required'
    else if(data.cvv==='')
    document.getElementById('cvvError').innerText='cvv is required'
    else if(data.cardNumber.length<16 || data.cardNumber.length>16)
    document.getElementById('cardNumberError').innerText='Enter a valid card Number'
    else if(parseInt(data.month)<0 || parseInt(data.month)>12)
    document.getElementById('monthError').innerText='Enter a valid month'
    else if(data.year<2023)
    document.getElementById('yearError').innerText='Enter a  valid year'
    else if(data.cvv.length<3)
    document.getElementById('cvvError').innerText='Enter a  valid cvv'
    else
    navigate('/confirm')
    if(data.holderName!=='')
    document.getElementById('holderError').innerText=''
    if(data.cardNumber.length===16)
    document.getElementById('cardNumberError').innerText=''
    if(parseInt(data.month)>0 && parseInt(data.month)<13)
    document.getElementById('monthError').innerText=''
    if(data.year>=2023)
    document.getElementById('yearError').innerText=' '
    if(data.cvv.length===3)
    document.getElementById('cvvError').innerText=''
  }
  const handleInput =(event)=>
  {
    setData({
      ...data,
      [event.target.name]:event.target.value
    })
    console.log("...")
  }
  return (
    <div className='PaymentContainer'>
        <div className='paymentForm'>
          <h2 className='paymentTitle'>Payment Information</h2>
            <form>
                <label>Account Holder Name</label>
                <input className='paymentInput' 
                type="text" name='holderName' onChange={(e)=>handleInput(e)}></input>
                <span id='holderError' className='paymentError'></span>
                <label style={{marginTop:'5px'}}>Card Number</label>
                <input className='paymentInput'
                type="text" name='cardNumber'onChange={(e)=>handleInput(e)}></input>
                <span id='cardNumberError'className='paymentError'></span>
                <input className='sm' placeholder='mm' type='number'
                name='month'onChange={(e)=>handleInput(e)}></input>
                <span id='monthError' className='paymentError'></span>
                <input className='sm' placeholder='yyyy' type='number'
                name='year'onChange={(e)=>handleInput(e)}></input>
                <span id='yearError'className='paymentError'></span>
                <br></br>
                <input className='sm' placeholder='cvv'
                name='cvv' onChange={(e)=>handleInput(e)}></input>
                <span id='cvvError'className='paymentError'></span>
            </form>
            <div className='buttons'>
              <Link to="/OrderSummary"><button className='confirm'>Back</button></Link>
              <button onClick={handleSubmit} className='confirm'>Next</button>
            </div>
        </div>
       
    </div>
  )
}

export default Payment