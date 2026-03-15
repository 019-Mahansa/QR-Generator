import React from "react";
import Nav from "./components/nav";
import qr from "./assets/dummyQR.png";
import "./landingpage.css"
import { useNavigate } from "react-router-dom";


function Landingpage(){
    const navigate = useNavigate()
    return(
        <>
        <Nav/>
        <div className="container">
            <div className="home">
                <div className="left">
                    <div className="text">
                        <h1 className="c">Click Less. </h1>
                        <h1 className="scan">Scan More</h1>
                    </div>

                    <p className="des">Generate QR codes from any URL in seconds, easier to share</p>
                    <button onClick={() => navigate("/login")}>try for free</button>
                </div>
                <div className="right">
                    <img src={qr} alt="gambar" />

                </div>
            </div>
        </div>
        </>
    )
}

export default Landingpage