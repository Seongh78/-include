import React from 'react';

const NavBar = (prop) => {
    return (  
        <nav className="ui fixed menu inverted navbar">
            <a href="" className="brand item">Project Name</a>
            <a href="" className="active item">Home</a>
            <a href="" className="item">About</a>
            <a href="" className="item">Contact</a>
            <a className="ui dropdown item">Dropdown
            <i className="dropdown icon"></i>
            <div className="menu">
                <div className="item">Action</div>
                <div className="item">Another action</div>
                <div className="item">Something else here</div>
                <div className="ui horizontal divider"></div>
                <div className="item">Seperated link</div>
                <div className="item">One more seperated link</div>
            </div>
            </a>
        </nav> 
    );
}
 
export default NavBar;