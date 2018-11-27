import React from 'react';

const wrapStyle = {
    background:'#F1F9FF', 
    border:'1px solid #bce0fd', 
    padding:'18px'
}

const ContentWraper = prop => {
    
    
    return (  
        <div style={wrapStyle}>
            {prop.children}
        </div>
    );
}
 
export default ContentWraper;