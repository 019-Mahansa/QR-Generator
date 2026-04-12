import React from "react";
import './styles/qrGenerator.css'
import Nav from "../components/nav";
import { useState } from "react";
import Footer from "../components/footer";
import QRCode from "qrcode";


function QrGenerator(){
    const [warna,setwarna] = useState("#2A1205")
    const [bgColor,setbgColor] = useState("#FAF7F2")

    const [url,seturl] = useState("")
    const [qr,setqr] = useState("")

    const generateImage = async () =>{
        const is = await QRCode.toDataURL(url)
        setqr(is)

    }

    // const [inputValue, setInputValue] = useState("")
    // const [qrImage, setQrImage] = useState("")

    // const handleDownload = async () =>{
    //     try {
    //     const response = await fetch(qrImage);
    //     const blob = await response.blob();
    //     const blobUrl = URL.createObjectURL(blob);

    //     const link = document.createElement("a");
    //     link.href = blobUrl;
    //     link.download = "Qr-code Generator.png";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);

    //     URL.revokeObjectURL(blobUrl); 
    // } catch (error) {
    //     console.error("Gagal download:", error);
    // }
    

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
                <span className="des">Turn your link into a QR in a second!</span>

            </div>
            <div className="card">
                <div className="inside-card">
                    <span>Enter URL</span>

                    <div className="duo">
                        <input type="text" placeholder="https://example.com" value={url} onChange = {(e) => seturl(e.target.value)}></input>
                        <button className="generate" onClick={generateImage}> Generate</button>
                    </div>

                    <div className="duo">
                        <div className="warnaOr">
                            <span>colorOr</span>
                            <input type="color" value={warna} onChange={(e) => setwarna(e.target.value)}></input>
                        </div>
                        <div className="backgroundOr">
                            <span>background</span>
                            <input type="color" value={bgColor} onChange={(a) => setbgColor(a.target.value)}></input>
                        </div>

                    </div>
                    <div className="place">
                            { qr ?(
                            <img src={qr}  className="w" alt="qr-codes"/>
                            ):(
                            <>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm13-2h2v2h-2v-2zm-4 0h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm2 2h2v2h-2v-2zm2-2h2v2h-2v-2z"/>
                                </svg>
                                <p>QR code will append in here</p>
                            </>   
                            )}           
                    </div>
                       <button type="button" className="generate" >Download</button>

                </div>

            </div>


        </div>
        <Footer/>
        </>
    )
}





export default  QrGenerator