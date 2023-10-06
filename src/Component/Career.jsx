import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import career from '../assets/career.jpg'

function Career() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div id="career">
            <canvas></canvas>
            <h1 style={{ textAlign: "center", color: "#106eea" }}>MOSTLY ASKED</h1><br />
            <div className='container'>
                <div className="accordion">
                    {Array(5).fill().map((_, index) => (
                        <div className={`contentBX ${index === activeIndex ? 'active' : ''}`} key={index}>
                            <div className='label' onClick={() => handleAccordionClick(index)} >
                                <p> What is the Accordion?</p>
                                <div><FontAwesomeIcon
                                    icon={index === activeIndex ? faAngleUp : faAngleDown}
                                    style={{ alignItems: "flex-end" }}

                                /></div>
                            </div>

                            <div className="content">
                                <p>
                                    In web design, an accordion is a type of menu that displays a
                                    list of headers stacked on top of one another. When clicked on
                                    (or triggered by a keyboard interaction or screen reader),
                                    these headers will either reveal or hide associated content.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: "rgb(233 233 233)" }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <img src={career} alt="logo" className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <div style={{ background: "white",maxWidth:"400px", minHeight: "300px", }}>
                                <canvas style={{ height: "20px", width: "100%",borderRadius:"5px", background: "#6c54ff", top: "0" }}></canvas>
                                <form style={{ maxWidth: "450px", padding: "20px" }}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">E-mail:</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phone" className="form-label">Phone no:</label>
                                        <input type="text" className="form-control" id="phone" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Your message:</label>
                                        <input type="text" className="form-control" id="message" />
                                    </div>
                                    <button type="button" className="btnt">
                                        Submit
                                    </button>
                                </form>
                                <canvas style={{ height: "20px", width: "100%", background: "#6da8e0" }}></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Career;
