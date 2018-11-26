import React from 'react';


const navbarStyleList = ["ui fixed menu inverted navbar"];

const NavBar = (prop) => {
    return (  
        <nav className={navbarStyleList} style={{backgroundColor:'#4374D9'}}>
            <a href="/#/" className="brand item">#include</a>
            <div className="right menu">
                <a href="/#/" className="item">About</a>
                <div className="item">
                    <button className="ui white button">Sign in</button>
                </div>
            </div>
        </nav> 
    );
}
 
export default NavBar;