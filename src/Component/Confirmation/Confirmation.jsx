import React from 'react'
import './Confirmation.css'
import { Link } from 'react-router-dom'
const Confirmation = ({emptyCart,carts}) => {
  return (
    <div className='confirmation'>
        <div className='confirmContainer'>
            <h3 className='confirmTitle'>Thanks for Purchasing</h3>
            <h5 className='confirmTitle'>Your orders will be delivered soon ...</h5>
            <Link to={'/home'}><button className='confirmButton'
            onClick={()=>
              emptyCart(carts)}>Home</button></Link>
        </div>
    </div>
  )
}
export default Confirmation