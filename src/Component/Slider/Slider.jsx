import React from 'react'
import './Slider.css'
const Slider = () => {
  return (
    <div>
       <div className='slider'>
        <div className='sliderContents'>
          <div>
            <h2 className='slideTitle'>Lowest Prices</h2>
            <h2 className='slideTitle'>Best Quality Shopping</h2>
            <div className='small'>
              <img src='https://images.meesho.com/images/pow/freeDelivery_jamun.svg'></img>
              <h6 className='smallText'>Free Delivery</h6>
              <img src='https://images.meesho.com/images/pow/cod_jamun.svg'></img>
              <h6 className='smallText'>Cash on Delivery</h6>
              <img src='https://images.meesho.com/images/pow/easyReturns_jamun.svg'></img>
              <h6 className='smallText'>Easy Returns</h6>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Slider