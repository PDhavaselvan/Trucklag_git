import React from 'react';
import servic from "../assets/service.jpg";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IS from '../assets/item_s.jpg';
import Pcimg from '../assets/house_s.jpg';
import Conform from '../assets/com_s.jpg';
import Ship from '../assets/indusrial_s.jpg';
import Autoimg from '../assets/Auto.jpg';
import tataac from '../assets/tata_AC.png';
import bolero from '../assets/Bolero.jpg';
import havy from '../assets/havy.jpg';
import lede_p from '../assets/ledeposition.jpg';
import mob_map from '../assets/mobile_map.jpg';
import { Outlet } from 'react-router-dom';

function Service() {
  return (
    <div id="service">
      <canvas></canvas>
      <div className="container" style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={servic} alt="Logo" style={{ maxWidth: "100%", height: "auto" }} />
      </div>
      <div className="container mt-4" id="h_card" style={{ width: '100%', margin: '0 auto' }}>
        <div className="row " id="h_card">
          <div className="col-md-3"><br />
            <Card style={{ maxHeight: "350px", textAlign: "center" }}>
              <Card.Img variant="top" src={IS} alt="img 1" style={{ width: "100px", height: "100px", top: "1", alignSelf: "center" }} />
              <spam style={{ color: "red" }}>_________</spam>
              <Card.Body style={{ height: "180px" }}>
                <Card.Title>Item Shifting</Card.Title><br />
                <Card.Text>
                  Professional relocation services at
                  lowest prices. Get premium
                  packaging & no hidden costs.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3"><br />
            <Card style={{ maxHeight: "350px", textAlign: "center" }}>
              <Card.Img variant="top" src={Pcimg} alt="img 2" style={{ width: "100px", height: "100px", alignSelf: "center" }} />
              <spam style={{ color: "red" }}>_________</spam>
              <Card.Body style={{ height: "180px" }}>
                <Card.Title>House Shifting</Card.Title><br />
                <Card.Text>
                  Professinal house shifting Service.
                  Quick & Safe delivery, Well Experienced staff .
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3"><br />
            <Card style={{ maxHeight: "350px", textAlign: "center" }}>
              <Card.Img variant="top" src={Conform} alt="img3" style={{ width: "100px", height: "100px", alignSelf: "center" }} />
              <spam style={{ color: "red" }}>_________</spam>
              <Card.Body style={{ height: "180px" }}>
                <Card.Title>Commercial Move</Card.Title><br />
                <Card.Text>
                  This can include office furniture,
                  electronic equipment, IT systems,
                  scanners, and printers.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3"><br />
            <Card style={{ maxHeight: "350px", textAlign: "center" }}>
              <Card.Img variant="top" src={Ship} alt="img4" style={{ width: "100px", height: "100px", alignSelf: "center" }} />
              <spam style={{ color: "red" }}>_________</spam>
              <Card.Body style={{ height: "180px" }}>
                <Card.Title>Industrial Move</Card.Title><br />
                <Card.Text>
                  raw and finished goods, storage racking, handling equipment, heavy machinery, etc...
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>  <br /><br />

      {/*----------------------------------------VEHICLES--------------------------------------------*/}

      <h1 style={{ textAlign: "center", color: "#106eea" }}>AVAILABLE VEHICLES</h1>

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: " rgb(233 233 233)" }}>
        <div className="container mt-3" style={{ maxWidth: "1000px" }}>

          <div className="row" style={{ height: "auto" }}>

            <div className="col-md-3">
              <Card style={{ maxHeight: "350px", textAlign: "center", border: "none" }}>
                <Card.Img variant="top" src={Autoimg} alt="img 1" style={{ maxWidth: "100%", height: "175px", top: "1", alignSelf: "center" }} /><br />
                <Card.Title>3 Wheelers</Card.Title><br />
                <Card.Body style={{ height: "175px", boxShadow: '0 0 10px 1px black', borderRadius: "5px" }}>

                  <Card.Text>
                    Professional relocation services at
                    lowest prices. Get premium
                    packaging & no hidden costs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card style={{ maxHeight: "350px", textAlign: "center", border: "none" }}>
                <Card.Img variant="top" src={tataac} alt="img 2" style={{ maxWidth: "100%", height: "175px", alignSelf: "center" }} /><br />
                <Card.Title>Tata Ac</Card.Title><br />
                <Card.Body style={{ height: "175px", boxShadow: '0 0 10px 1px black', borderRadius: "5px" }}>
                  <Card.Text>
                    Professinal house shifting Service.
                    Quick & Safe delivery, Well Experienced staff .
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ maxHeight: "350px", textAlign: "center", border: "none" }}>
                <Card.Img variant="top" src={bolero} alt="img 1" style={{ maxWidth: "100%", height: "175px", top: "1", alignSelf: "center" }} /><br />
                <Card.Title>Bolero</Card.Title><br />
                <Card.Body style={{ height: "175px", boxShadow: '0 0 10px 1px black', borderRadius: "5px" }}>

                  <Card.Text>
                    Professional relocation services at
                    lowest prices. Get premium
                    packaging & no hidden costs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card style={{ maxHeight: "350px", textAlign: "center", border: "none" }}>
                <Card.Img variant="top" src={havy} alt="img 1" style={{ maxWidth: "100%", height: "175px", top: "1", alignSelf: "center" }} /><br />
                <Card.Title>Container Trucks</Card.Title><br />
                <Card.Body style={{ height: "175px", boxShadow: '0 0 10px 1px black', borderRadius: "5px" }}>

                  <Card.Text>
                    Professional relocation services at
                    lowest prices. Get premium
                    packaging & no hidden costs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div><br /><br />

      { /*------------------------LEADING POSITION-----------------------------------------*/}

      <h3 style={{ fontFamily: "raleway", textAlign: "center" }}>We Take The</h3>
      <h1 style={{ textAlign: "center", color: "#106eea" }}>LEADING POSITION</h1>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-6">
            <img src={lede_p} alt="logo" style={{ maxWidth: "100%", height: "380px" }} />
          </div>
          <div class="col-md-6 align-content-center">
            <div style={{ borderLeft: "5px solid gray", borderBottom: "5px solid gray" }}>
              <ul id="lede_P" style={{ alignItems: "center" }}>
                <li> Business it will frequently occur that pleasures.</li>
                <li>Foresee the pain and trouble that are bound.</li>
                <li>Make long term business decisions</li>
                <li>Provide a service we are proud of</li>
                <li>Be a responsible member of the community</li>
                <li>Do what we like best, every pleasure is to be</li>
                <li>Always seek to improve</li>
              </ul>
            </div>
          </div>
        </div>
      </div><br /><br />
      {/*---------------------------------------------------*/}
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", backgroundColor: " rgb(233 233 233)" }}>
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6 align-content-center" style={{ backgroundColor: " rgb(233 233 233)" }}>
              <img src={mob_map} alt="logo" style={{ maxWidth: "100%", maxHeight: "400px" }} />
            </div>
            <div class="col-md-6 align-content-center">
              <div>
                <h1 style={{ color: "#106eea" }}>MOBILE APP</h1><br />
                <p style={{ fontFamily: "ZCOOLxiaowei", fontSize: "25px" }}>
                  TRUCKLAH APP enhances workforce engagement with real time alerts
                  and notification. Users can keep track of their schedule,
                  time-off and pay details from their smartphones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Service;