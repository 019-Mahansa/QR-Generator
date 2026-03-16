import React from "react";
import './style/card.css'
function Card({ price, period = "m", title, description, features, buttonText = "Choose plan", buttonHref = "#" }){
    return(
        <>
            <div className="plan">
                <div className="inner">
                    <span className="pricing">
                        <span>
                            {price} <small>/ {period}</small>
                        </span>
                    </span>
                    <p className="title">{title}</p>
                    <p className="info">{description}</p>
                    <ul className="features">
                        {features.map((feature, index) => (
                            <li key={index}>
                                <span className="icon">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                                    </svg>
                                </span>
                                <span dangerouslySetInnerHTML={{ __html: feature }} />
                            </li>
                        ))}
                    </ul>
                    <div className="action">
                        <a className="button" href={buttonHref}>
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card


//How to use the card compenent:

            //  <Card
            //     price="$2"
            //     period="m"
            //     title="Basic"
            //     description="This plan is for those who want get fully accesed to <strong>QR-Generator</strong>"
            //     features={[
            //         "Unlimited <strong>Generate</strong>",
            //         "History",
            //     ]}
            //     buttonText="Choose plan"
            //     buttonHref="#"
            // />