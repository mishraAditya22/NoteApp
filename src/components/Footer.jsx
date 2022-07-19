import React from 'react';

const Footer = ()=>{
    let year = new Date().getFullYear();
    return (
        <>
            <h6 className="footer">Aditya Mishra © {year}</h6>
        </>
    )
};

export default Footer;