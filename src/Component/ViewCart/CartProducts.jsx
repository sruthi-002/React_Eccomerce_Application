import React from 'react'
import logo from '../Login/logo.png'
import './cart.css'
const CartProducts = ({carts,addQuantity,reduceQuantity,removeCart,emptyCart}) => {
    console.log(carts);
    const FillCart =() =>
    {
      return (
        <div>
          <div className='products'>
          {
            carts.map((cart)=>(
              <div className="cartCard" key={cart.id}>
                        <img className="cardImage" src={cart.products.product.image}/>
                        <h5 className="cardTitle">{cart.products.product.name}</h5>
                        <h5 className="price">{cart.products.product.price}</h5>
                        <div className='Add'>
                        <button className='AddButton' onClick={() =>
                         addQuantity(cart.id)
                        }>+</button>
                        {cart.quantity}
                        <button  id='less'className='LessButton'onClick={() => {
                          reduceQuantity(cart.id)
                        }} disabled={cart.quantity==1}>-</button>
                        </div>
                        <button className='remove'  onClick={() =>
                        {
                          removeCart(cart.id)
                        }}>Remove</button>
              </div>
            ))
          }
        </div>
        <div className='buttons'>
          <a href='/home'><button className='checkout'>Back</button></a>
          <a href='/checkout'><button className='checkout'>Checkout</button></a>
        </div>
        <br/>
      </div>
      )
    }

    const Empty =() =>
    {
      return (
        <div className='empty'>You have no items in the cart ,Go and add Products...
        <a href='/home'><button className='toProducts'>To add Products</button></a>
        </div>
      )
    }
  return (
    <div>
        <div className="navHome">
        <div className='left'>
        <img src={logo} className='logo'/>
        <h1 className='heading'>EASYBUY</h1>
        </div>
        </div>
        {carts.length >0 ? <FillCart/> :<Empty/>}
      </div>
  )
}

export default CartProducts;