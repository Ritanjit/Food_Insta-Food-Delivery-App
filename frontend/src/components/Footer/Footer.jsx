import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo1} className='logo1' alt="" />
                    <p>Craving something delicious? FoodInsta is your go-to platform for exploring the best restaurants, trending dishes, and instant food delivery - all in one place! Think of it as Instagram for food lovers, where you can browse mouth-watering meals, read reviews, and order your favorite food with just a tap.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privary policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a href='tel:+91-9230598546'>+91-9230598546</a></li>
                        <li><a href='mailto:not.ritanjit@gmail.com'>not.ritanjit@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © FoodInsta.com - All Rights Reserved.</p>
        </div>
    )
}

export default Footer