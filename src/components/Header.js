import {LOGO_URL} from '../utils/config';
import { useState } from 'react';

const Header = () => {
    let [btnName, setBtnName] = useState("Login");
    return (
        <div className='header-container'>
            <div className='logo-conatainer'>
                <img className='logo' alt="logo" src={LOGO_URL}></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="logout-btn" onClick={()=>
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;