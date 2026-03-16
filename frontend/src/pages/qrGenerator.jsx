import React from "react";
import './styles/qrGenerator.css'
import Nav from "../components/nav";
import { useState } from "react";
import Footer from "../components/footer";

function QrGenerator(){
    const [warna,setwarna] = useState("#2A1205")
    const [bgColor,setbgColor] = useState("#FAF7F2")
    return(
        <>
        <Nav/>
        <div className="containerr">
            <div className="title">
                <div className="icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm13-2h2v2h-2v-2zm-4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2z"/>
                    </svg>
                </div>
                <p className="p">QR Generator</p>
                <span className="des">Ubah link menjadi kode QR dalam sekejap</span>

            </div>
            <div className="card">
                <div className="inside-card">
                    <span>Masukan URL</span>

                    <div className="duo">
                        <input type="text" placeholder="https://example.com"></input>
                        <button>Generate</button>
                    </div>

                    <div className="duo">
                        <div className="warnaOr">
                            <span>warnaOr</span>
                            <input type="color" value={warna} onChange={(e) => setwarna(e.target.value)}></input>
                        </div>
                        <div className="backgroundOr">
                            <span>background</span>
                            <input type="color" value={bgColor} onChange={(a) => setbgColor(a.target.value)}></input>
                        </div>

                    </div>
                    <div className="place">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm13-2h2v2h-2v-2zm-4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2z"/>
                        </svg>
                        <p>QR code akan muncul di sini</p>                      
                    </div>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default  QrGenerator