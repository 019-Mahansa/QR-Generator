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
        <div className="qr-section">

        <div className="qr-header">
            <span className="eyebrow">Quick Guide</span>
            <h1>Everything you need to know<br />to get started</h1>
            <p>In this section you will find what QR Codes are and how they work.</p>
        </div>

        {/* Body */}
        <div className="qr-body">

            {/* Kiri: Gambar */}
            <div className="qr-visual">
            <div className="qr-img-wrap">
                <img src={qr} alt="QR Code example" />
            </div>
            </div>

            <div className="qr-content">
            <h2>What is a QR Code?</h2>

            <div className="qr-stats">
                <div className="stat">
                <span className="val">2D</span>
                <span className="lbl">Barcode type</span>
                </div>
                <div className="stat">
                <span className="val">1994</span>
                <span className="lbl">Year created</span>
                </div>
                <div className="stat">
                <span className="val">4 levels</span>
                <span className="lbl">Error correction</span>
                </div>
            </div>

            <p>
                QR Code stands for Quick Response Code — a two-dimensional barcode first
                developed in Japan by Denso Wave to track vehicle parts. Today, their usage
                spans across payments, marketing, menus, transport, and education.
            </p>
            <p>
                The code appears as a square pattern of black and white modules, readable
                instantly by any smartphone camera. Unlike traditional one-dimensional
                barcodes, QR Codes store far more data and can be scanned from any direction.
            </p>
            <p>
                They support four error correction levels (L, M, Q, H) — making them
                readable even when partially damaged. Always verify the source before
                scanning to avoid malicious redirects.
            </p>

            <div className="qr-tags">
                <span className="tag">Digital payments</span>
                <span className="tag">Marketing</span>
                <span className="tag">Restaurant menus</span>
                <span className="tag">Ticketing</span>
                <span className="tag">Education</span>
                <span className="tag">Transportation</span>
            </div>
            </div>

        </div>
        </div>
        <Footer/>
        </>
    )
}

export default About