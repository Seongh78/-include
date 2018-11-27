import React from 'react';

const SearchForm = () => {
    return (  
        <div className="ui action mini input" style={{marginTop:'7px', width:'100%'}}>
            <input type="text" placeholder="Search..." style={{borderRadius:'0', borderColor:'#39a2fb', color:'#39a2fb'}} />
            <button className="ui icon button" style={{borderRadius:'0', background:'#39a2fb', color:'#fff'}}>
            <i className="search icon"></i>
            </button>
        </div>
    );
}
 
export default SearchForm;