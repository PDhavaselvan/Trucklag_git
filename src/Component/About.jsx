import React from 'react';
import aboutimg from '../assets/about_img.jpg';
import abliimg from '../assets/ab_li_logo.jpg';     

function About()
{
    return(
        <div id='about'>
          <canvas></canvas>
         <h3  style={{ fontFamily: "raleway", textAlign: "center"}}>What Are Agency</h3>
         <h1 style={{ textAlign: "center", color: "#106eea" }}>ABOUT US</h1>

         <div>
         <div class="row d-flex justify-content-center align-items-center p-5">
    <div class="col-md-6 align-content-center" >
    <h2 style={{ fontFamily: "raleway", textAlign: "center"}}><b>We Are Experienced Movers</b></h2>
    <p style={{fontSize:"28px", textAlign: "center"}}>Focused On Quality</p>
      <img src={aboutimg} alt="logo" style={{maxWidth:"100%" ,height:"400px"}} />
    </div>
    <div class="col-md-6 align-item-center ">
            <div>
              <p style={{fontSize:"21px"}}>Trucklah is strongly committed towards improving the quality<br/> 
                 of life of our partner drivers.</p><br/>
            <p style={{fontSize:"19px"}}>
            Our partners enjoy flexible working hours, increased earnings and
             an effective work life balance along with additional benefits 
            like discounted insurance and fuel costs.</p>
            <p style={{fontSize:"19px",fontWeight:"bold"}}><img src={abliimg} style={{width:"30px",height:"30px"}}/> Full Load Service</p>
            <p style={{fontSize:"19px",fontWeight:"bold"}}><img src={abliimg} style={{width:"30px",height:"30px"}}/> Transparent Pricing</p>
            <p style={{fontSize:"19px",fontWeight:"bold"}}><img src={abliimg} style={{width:"30px",height:"30px"}}/> Quick & Easy Portal</p>
            </div>
          </div>
        </div>
         </div>
        </div>
    )
    
}
export default About;