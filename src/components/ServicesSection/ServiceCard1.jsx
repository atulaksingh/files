import Link from 'next/link';
import React from 'react'
import { Row } from "react-bootstrap";
import { Col, Image } from "react-bootstrap";
function ServiceCard1() {
    return (
        <>
        <div className="about-six">
      <div className="about-six__curv">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 122"
        >
          <divath
            fill="currentColor"
            d="M0,122.005S80.814,20.129,283.871,2.426C526.255-18.706,550.388,91.2,792.025,102.115c243.565,11.006,299.815-108,520.765-97.662,220.1,10.3,273.86,88.036,415.09,98.26C1878.57,113.62,1920,51.068,1920,51.068V-862.995H0v985Z"
          />
        </svg>
      </div>

      <div className="auto-container">
        <Row>
        <Col md={12} lg={7} className="animated fadeInRight">
            <div className="" style={{width:"100%;",margin:"auto;"}}>
              <Image  src={
              require(`@/images/zaco/it-lifecycle.png`).default.src
            } alt="" width={"70%"} />
            </div>
          </Col>
          <Col md={12} lg={5}>
            <div className="about-six__content">
              <div className="sec-title-six">
                <div className="sec-title-six__text">
                  <span>Our Company Benefits</span>
                </div>
                <h2 className="sec-title-six__title">Empowering Your IT Journey</h2>
              </div>
              <div className="about-six__text">Experience a seamless IT journey with us. From initial assessment and strategic planning to smooth deployment, ongoing maintenance and future-proofing upgrades, we're your partner in every phase. Our expertise extends to environmentally conscious end-of-life management, ensuring secure disposal and compliance. Maximize efficiency, minimize risks, and stay ahead in the ever-evolving landscape with our tailored IT lifecycle services</div>
            </div>
          </Col>
        
        </Row>
      
      </div>
    </div>
        </>
    )
}

export default ServiceCard1