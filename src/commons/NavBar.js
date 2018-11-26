import React from 'react';
import { NavLink } from "react-router-dom";


const navbarStyleList = ["ui fixed menu inverted navbar"];

const NavBar = (prop) => {
    const { menus } = prop;
    // console.log(menus);
    
    return (  
        <nav className={navbarStyleList} style={{backgroundColor:'#4374D9'}}>
            <NavLink to="/">
                <h3 className="brand item">#include</h3>
            </NavLink>
            <div className="right menu">
                {menus.map(menu=>(
                    <NavLink to={menu.path} key={menu.name}>
                        <p className="item">{menu.name}</p>
                    </NavLink>
                ))}
                {/* <NavLink to="/main">
                    <p className="item">Main</p>
                </NavLink>
                <NavLink to="/notfound">
                    <p className="item">NotFound</p>
                </NavLink> */}
                {/* <div className="item">
                    <button className="ui white button">Sign in</button>
                </div> */}
            </div>
        </nav> 
    );
}
 
export default NavBar;