import React from "react";
import './style/nav.css'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Nav(){
    const navigate = useNavigate()
    return(
        <>
            <div className="ok">
                <nav>
                    <div className="left">
                        <h1>Digito</h1>
                    </div>
                    <div className="mid">
                        <Link to={"/"}  className="a">Home</Link>
                        <Link to={"/qr-code"} className="a">QR-generator</Link>
                        <Link to={"/about"} className="a">About</Link>
                        <Link to={"/register"} className="a">Register</Link>
                    </div>
                    <div className="right">
                        <button onClick={() => navigate("/login")}className="login">Login</button>
                        <button className="try">Try for free</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav