import React from 'react';
import { NavLink } from "react-router-dom";


const navbarStyleList = ["ui fixed menu inverted navbar"];

const NavBar = (prop) => {
    const { menus } = prop;
    // console.log(menus);
    
    return ( 
//         <div class="ui fixed inverted menu">
//     <div class="ui container">
//       <a href="#" class="header item">
//         <img class="logo" src="assets/images/logo.png" />
//         Project Name
//       </a>
//       <a href="#" class="item">Home</a>
//       <div class="ui simple dropdown item">
//         Dropdown <i class="dropdown icon"></i>
//         <div class="menu">
//           <a class="item" href="#">Link Item</a>
//           <a class="item" href="#">Link Item</a>
//           <div class="divider"></div>
//           <div class="header">Header Item</div>
//           <div class="item">
//             <i class="dropdown icon"></i>
//             Sub Menu
//             <div class="menu">
//               <a class="item" href="#">Link Item</a>
//               <a class="item" href="#">Link Item</a>
//             </div>
//           </div>
//           <a class="item" href="#">Link Item</a>
//         </div>
//       </div>
//     </div>
//   </div>
         
        <nav className={navbarStyleList} style={{backgroundColor:'#39a2fb'}}>
            <NavLink to="/">
                <h3 className="brand item">#include</h3>
            </NavLink>
            <div className="right menu">
                {menus.map(menu=>(
                    <NavLink className="item" to={menu.path} key={menu.name}>
                        <span>{menu.name}</span>
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