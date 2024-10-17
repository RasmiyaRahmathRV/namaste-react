import FoodFireLogo from '../../img/FoodFireLogo.png';
import { useState } from 'react';

const Header = () => {

    const[loginBtnName, setloginBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={FoodFireLogo}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => { 
                        loginBtnName === "Login"
                            ?setloginBtnName("Logout") : 
                            setloginBtnName("Login")
                        }
                    } >{loginBtnName}</button>
                </ul>
            </div>
        </div>
    )
    
};

export default Header;