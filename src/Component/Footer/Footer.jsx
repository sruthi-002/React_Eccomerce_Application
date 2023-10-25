import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <h3 className='text'>Shop Non-stop on EasyBuy</h3>
            <h4 className='text'>Trusted by more than 1 million people</h4>
        </div>
        <div>
            <h3 className='text'>Reach out to us</h3>
            <img className='footerimg' src='https://images.meesho.com/images/pow/facebook.png'></img>
            <img className='footerimg' src='https://images.meesho.com/images/pow/instagram.png'></img>
            <img className='footerimg' src='https://images.meesho.com/images/pow/linkedin.png'></img>
        </div>
        <div>
            <h3 className='ptext'>Contact</h3>
            <p className='ptext'>Fashion Technologies near meenakshi</p>
            <p className='ptext'>amman temple , madurai</p>
            <p className='ptext'>email address : easybuy@gmail.com,</p>
            <p className='ptext'>contact number:234567890</p>
        </div>
    </div>
  )
}

export default Footer