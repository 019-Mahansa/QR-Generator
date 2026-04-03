import React from "react";
import './styles/qrGenerator.css'
import Nav from "../components/nav";
import { useState } from "react";
import Footer from "../components/footer";
import './styles/about.css'
import qr from '../assets/qr-code-coklat.png'

function About(){
    return(
        <>
        <Nav/>
        <div className="title">
            <h1>Everything you need to know to get started</h1>
            <p>In this section you will find what is QR-codes</p>
        </div>
        <div className="contaner">
            <div className="container-left">
                <img src={qr} alt=""/>
            </div>
            <div className="contaner right"></div>
        </div>
        <Footer/>
        </>
    )
}

export default About