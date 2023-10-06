import React from 'react';
import delivery from '../assets/delivery_img.jpg';
import h_delivery from '../assets/house_delvery.png';
import item_delivery from '../assets/box.jpg';
import { Link } from 'react-router-dom';

function Shipping_method() {
    return (
        <>
            <img src={delivery} style={{ maxWidth: "100%" }} />
            <div id="shipe">
                
                <Link to={"/h_shifting"} className="text-decoration-none">
                <div className='container m-7' id='shifting' style={{ maxWidth: "500px" }}>
                    <img src={h_delivery} style={{ width: "75px", height: "75px",marginTop:"-3px" }} />
                    <p style={{margin:"5px",color:"black",fontSize:"20px"}}>House Shifting</p>
                </div>
                </Link>

                <Link to={"/item_shifting"} className="text-decoration-none">
                <div className='container m-7' id='shiftin' style={{ maxWidth: "500px" }}>
                    <img src={item_delivery} style={{ width: "70px", height: "50px" }} />
                    <p style={{margin:"5px",color:"black",fontSize:"20px"}}>Items Shifting</p>
                </div>
                </Link>

            </div>
        </>
    )
}
export default Shipping_method;