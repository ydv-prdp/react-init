import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";


const Header = () =>{
    const [btn, setBtn] = useState("Login");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img 
                    className='logo'
                    src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button onClick={()=>{
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header