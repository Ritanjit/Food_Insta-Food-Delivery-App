import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"

const reloadPage = () => {
  window.location.reload();
}

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.</p>
            <button onClick={reloadPage}>View Menu</button>
        </div>
    </div>
  )
}

export default Header