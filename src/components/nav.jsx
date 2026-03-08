import React from "react";
import './style/nav.css'

function Nav(){
    return(
        <>
            <div className="ok">
                <nav>
                    <div className="left">
                        <h1>Title</h1>
                    </div>
                    <div className="mid">
                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                        <p>item4</p>
                    </div>
                    <div className="right">
                        <button className="login">Login</button>
                        <button className="try">Try for free</button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav