import React from 'react';

const navbarStyle = {
    backgroundColor: "#4374D9 !important"
};

const navbarStyleList = ["navbarStyle ui fixed menu inverted navbar"];

const NavBar = (prop) => {
    return (  
        <nav className={navbarStyleList} style={{backgroundColor:'#4374D9'}}>
            <a href="" className="brand item">#include</a>
            {/* <a href="" className="active item">Home</a>
            <a href="" className="item">About</a>
            <a href="" className="item">Contact</a> */}
            <div className="right menu">
                <a href="" className="item">About</a>
                <div className="item">
                    <button className="ui white button">Sign in</button>
                </div>
            </div>
            {/* <a className="ui dropdown item">Dropdown
            <i className="dropdown icon"></i>
            <div className=" menu">
                <div className="item">Action</div>
                <div className="item">Another action</div>
                <div className="item">Something else here</div>
                <div className="ui horizontal divider"></div>
                <div className="item">Seperated link</div>
                <div className="item">One more seperated link</div>
            </div>
            </a> */}
        </nav> 
    //     <nav className="ui menu inverted navbar page grid" style={{marginBottom:'0px'}}>
    //     <a href="" className="brand item">Project Name</a>
    //     <div className="right menu">
    //         <div className="item">
    //             <div className="ui input">
    //                 <input type="input" placeholder="Email" />
    //             </div>
    //         </div>
    //         <div className="item">
    //             <div className="ui input">
    //                 <input type="password" placeholder="Password" />
    //             </div>
    //         </div>
    //         <div className="item"><button className="ui green button">Sign in</button></div>
    //     </div>
    // </nav>
    );
}
 
export default NavBar;