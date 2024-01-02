import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";


const Header = () =>{
    const [btn, setBtn] = useState("Login");
    return (
        
             <div className='flex justify-between items-center bg-gray-700 sm:bg-yellow-700 md:bg-green-800 lg:bg-red-800 shadow-lg px-24'>
            <div className='logo-container'>
                <img 
                    className='w-36'
                    src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul className="flex gap-20 text-white">
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