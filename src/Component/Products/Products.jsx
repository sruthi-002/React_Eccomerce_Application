import React, { useEffect ,useState} from 'react'
import './Products.css'
import logo from '../Login/logo.png';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';
const Products = ({productList,handleAddtoCart,cartLength}) => {
    const[search,setSearch] =useState('');
    const handlefilter=(e)=>
    {
        setSearch(e.toLowerCase())
    }
    const filterProducts = productList.filter((pro)=>
    {
        if(pro.name.toLowerCase().includes(search))
        return pro
    })
  return (
    <div>
        <div className="navHome">
        <div className='left'>
        <img src={logo} className='logo'/>
        <h1 className='heading'>EASYBUY</h1></div>
        <a href='/cart'><div className='cart'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>{cartLength >0 && <p className='length'>{cartLength}</p>}</div></a>
        </div>
            <Slider/>
            <div className='search' >
            <input className='searchInput'  placeholder='search' onChange={(e)=> handlefilter(e.target.value)}>
            </input>
            <button className='searchButton'>Search</button>
            </div>
            {filterProducts.length > 0 ?
                    <div className="products">   
                    {
                        filterProducts.filter((pro)=>
                        {
                            if(pro.name.toLowerCase().includes(search))
                            return pro
                        }).map(product=>(
                            <div className="card" key={product.id}>
                                <img className="cardImage" src={product.image}/>
                                <h5 className="cardTitle">{product.name}</h5>
                                <h5 className="price">{product.price}</h5>
                                <button className="btnh" onClick={()=>
                                {
                                    handleAddtoCart({product})
                                }}> <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 576 512">
                                    <style></style><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                                </svg></button>
                            </div>))
                    }
                    <Footer/>
                    </div>:<div>
                    <h2 className='match'>No Products match</h2>
                </div>
            }
            </div>
  )
}

export default Products;