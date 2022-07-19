import React from 'react';
import logo from '../images/img3.jpg';

const Header = ()=>{
    return (
        <>
            <div className="head">
                <span>
                    <img className="img_prop" src={logo} alt="logo_app" width="70" height="60"/>
                    <span className="brand_name">
                        Aditya's Note
                    </span>
                </span>
            </div>
        </>
    )
}

export default Header;