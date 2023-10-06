import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import playstore from '../assets/Gplaystore.png';
import appstore from '../assets/Applestore.png';


function Contact() {
    return (
        <div id="contact">
            <div className='footer bg-light'>
                <div className='row justify-content-center' style={{ margin: "50px" }}>
                    <div className='col-md-3 mb-4'>
                        <h4>TRUCKLAH</h4>
                        <span style={{ color: "red" }}>________</span>
                        <address style={{ margin: "13px", fontSize: "15px" }}>766,Sri Tower,<br />
                            Tower-7,6th floor,<br />
                            Anna salai, Chennai-600008.
                        </address>
                        <br />
                        <p><b>Phone no : </b><spam style={{ fontSize: "15px" }}>9876543210</spam></p>
                        <p><b>Email : </b><spam style={{ fontSize: "15px" }}>trucklah@gmail.com</spam></p>
                    </div>
                    <div className='col-md-2 '>
                        <h4>HELP</h4>
                        <span style={{ color: "red" }}>________</span>

                        <ul className='list-unstyled'>
                            <p>Sign Up</p>
                            <p>Login</p>
                            <p>Career</p>
                            <p>Privacy Policy</p>
                        </ul>

                    </div>
                    <div className='col-md-2 mb-4'>
                        <h4>OUR SERVICES</h4>
                        <span style={{ color: "red" }}>________</span>
                        <p>Online Truck</p>
                        <p>Booking</p>
                        <p>Packers & Movers</p>
                        <p>Logistics Services</p>
                    </div>
                    <div className='col-md-2 mb-10'>
                        <h4>FOLLOW US</h4>
                        <span style={{ color: "red" }}>________</span>
                        <div className='d-flex' >
                            <a href="https://www.twitter.com" style={{ color: "black", margin: "5px" }}>
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com" style={{ color: "black", margin: "5px" }}>
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://www.facebook.com" style={{ color: "black", margin: "5px" }}>
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </div>
                    </div>
                    <div className='col-md-2 mb-4'>
                        <a href="https://play.google.com">
                            <img src={playstore} style={{ width: "170px", marginTop: "50px" }} />
                        </a>

                        <a href="https://apps.apple.com/app/your-app-id">
                            <img src={appstore} alt="Download on the App Store" style={{ width: "170px", marginTop: "15px" }} />
                        </a>
                    </div>
                </div>
                <hr />
                <div className='mt-4'>
                    <p style={{ textAlign: "center", fontSize: "14px" }}>2023 © Copyright Yuaa Logistics. All Rights Reserved.</p>
                </div>
            </div>
        </div>


    )

}
export default Contact;