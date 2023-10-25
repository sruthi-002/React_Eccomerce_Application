import React, { useState } from 'react'
import './OrderSummary.css'
import { Link} from 'react-router-dom'
import Pagination from '../Pagination/Pagination';
const OrderSummary = ({carts}) => {
  let total=0;
  const sum = (price , quantity) =>
  {
      const pr = price.replace('$','');
      const result =Number(pr)*Number(quantity);
      return result;
  }
  const totalAmount=()=>
  {
    for(let cart of carts)
    {
      const pr = cart.products.product.price.replace('$','');
      const result =Number(pr)*Number(cart.quantity);
      total=total+result;
    }
    return total;
  }
  totalAmount();
  const[currentpage,setCurrentpage]=useState(1);
  const rows=4;
  let lastindex = currentpage*rows;
  let firstindex=lastindex-rows;
  let cartpage = carts.slice(firstindex,lastindex);
  return (
    <div className='OrderContainer'>
       <div className='order'>
        <h3 className='orderTitle'>Order Summary</h3>
        <div>
        <table className='tab'>
          <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
              {cartpage.map((cart)=>
              (
                  <tr key={cart.id}>
                  <td>{cart.products.product.name}</td>
                  <td>{sum(cart.products.product.price,cart.quantity)}</td>
                  <td>{cart.quantity}</td>
                  </tr>
              ))}
              <tr>
                <td  className='totalAmount'>TOTAL</td>
                <td  className='totalAmount' colSpan={2}>{total}</td>
              </tr>
            </tbody>
        </table>
        { carts.length>rows &&
          <Pagination rows={rows} total={carts.length} setPage={setCurrentpage}/>
        }
        </div>
        <div className='payButton'>
        <Link to='/checkout'><button className='Pay'>Back</button></Link>
          <Link to='/payment'><button className='Pay'>Pay</button></Link>
        </div>
        </div>
        
    </div>
  )
}
export default OrderSummary