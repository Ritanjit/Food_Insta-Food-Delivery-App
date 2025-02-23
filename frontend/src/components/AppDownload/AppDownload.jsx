import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> FoodInsta App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store1} alt="" />
                <img src={assets.app_store1} alt="" />
            </div>
        </div>
    )
}

export default AppDownload