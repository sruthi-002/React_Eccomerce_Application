import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import Login from './Component/Login/Login';
import Products from "./Component/Products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProducts from "./Component/ViewCart/CartProducts";
import CheckOut from "./Component/CheckOut/CheckOut";
import OrderSummary from "./Component/OrderSummary/OrderSummary";
import Payment from "./Component/Payment/Payment";
import Confirmation from "./Component/Confirmation/Confirmation";
import Signup from "./Component/SignUp/Signup";
function App() {
  const [carts , setCarts] = useState([]);
  const[productList , setProductList]=useState([]);
  const Pro = async () =>
  {
     await axios
    .get("http://localhost:3000/Products")
    .then((response)=>setProductList(response.data))
    .catch((error=>console.log(error)))
  }
  const handleAddtoCart = async (products)=>
  {
    await axios
    .post("http://localhost:3000/AddCard",{products,quantity:1})
    .then( cards())
    .catch(error=>console.log(error))
  }

  const cards = async() =>
  {
    await axios
    .get("http://localhost:3000/AddCard")
    .then((response)=>setCarts(response.data))
    .catch(error=>console.log(error))
  }

  const addQuantity =async(id)=>
    {
      const {data} = await axios.get("http://localhost:3000/AddCard/"+id);
      const q = data.quantity+1;
      const products=data.products;
      await(axios.put("http://localhost:3000/AddCard/"+id,{products,quantity:q}));
      cards();
    }

    const reduceQuantity =async(id)=>
    {
      const {data} = await(axios.get("http://localhost:3000/AddCard/"+id));
      const q = data.quantity-1;
      const products=data.products;
      await(axios.put("http://localhost:3000/AddCard/"+id,{products,quantity:q}));
      cards();
    }
    const removeCart = async(id) =>
    {
      await axios
      .delete("http://localhost:3000/AddCard/"+id)
      .then(cards())
      .catch(error=>
        console.log(error))
    }

    const emptyCart = (carts) =>
    {
      const data = carts;
      for(let d of data)
      {
        removeCart(d.id)
      }
      cards();
    } 

  useEffect(()=>
  {
    Pro();
    cards();
  },[]);

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/home" element={<Products productList={productList} handleAddtoCart={handleAddtoCart} cartLength={carts.length}/>}/>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path="/cart" element={<CartProducts carts={carts}  
           addQuantity={addQuantity} 
           reduceQuantity={reduceQuantity}
           removeCart={removeCart}
           emptyCart={emptyCart}
           />}></Route>
           <Route path="/checkout" element={<CheckOut/>}></Route>
           <Route path="/orderSummary" element={<OrderSummary carts={carts}/>}></Route>
           <Route path="/payment" element={<Payment/>}></Route>
           <Route path="/confirm" element={<Confirmation emptyCart={emptyCart} carts={carts}/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
