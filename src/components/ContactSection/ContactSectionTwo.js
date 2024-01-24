import { contactSectionTwo } from "@/data/contactSection";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { title, text1,text2,text3, socials } = contactSectionTwo;

const ContactSectionTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, name) => (data[name] = value));
    console.log(data);
  };

  return (
    <div className="contact-section contact-two">
      <div className="auto-container">
        <Row>
          <Col lg={6}>
            <div className="contact-two__content">
              <div className="sec-title">
                <h2 className="font-bold">
                  {title} <span className="dot">.</span>
                </h2>
              </div>
              <div className="contact-two__text px-6">
                <ul>
                  <li className="mb-2 list-disc">{text1}</li>
                  <li className="mb-2 list-disc">{text2}</li>
                  <li className="mb-2 list-disc">{text3}</li>
                </ul>
              </div>
             
              <div className="font-semibold  contact-two__text">If the answer to any of the above questions is yes, then you have certainly reached the correct place!</div>
              <div className="contact-two__text px-4 mb-2">We buy used server equipment including used blade, tower, and rack servers along with networking equipment in India.</div>
              <div className="contact-two__text px-4">All you need to do is fill in the form on this page, sit back, relax and our team will take care of the rest. Yeah, it’s that simple!</div>
              {/* <div className="contact-two__social">
                {socials.map((icon, i) => (
                  <Link key={i} href="/" className={icon} passHref></Link>
                ))}
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <div className="form-box mt-4">
              <div className="default-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <Row className="clearfix">
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner mb-3">
                        <input
                          type="text"
                          name="username"
                          placeholder="Name*"
                          required
                        />
                      </div>
                      <div className="field-inner mb-3">
                        <input
                          type="text"
                          name="username"
                          placeholder="Company*"
                          required
                        />
                      </div>
                      <div className="field-inner mb-3">
                          <input
                            type="text"
                            name="username"
                            placeholder="Location/City"
                            required
                          />
                        </div>
                        <div className="field-inner mb-3">
                        <input
                          type="number"
                          name="username"
                          placeholder="Number of Server*"
                          min="0"
                          required
                        />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner mb-3">
                        <input
                          type="number"
                          name="contact"
                          placeholder="Contact*"
                          required
                        />
                      

                      </div>
                      <div className="field-inner mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required
                        />
                      </div>
                   
                      <div className="field-inner mb-3">
                        <input
                          type="number"
                          name="username"
                          placeholder="Number of Networking Devices"
                          min="0"
                          required
                        />
                      </div>
                      <div className="field-inner mb-3">
                        <input
                          type="number"
                          name="username"
                          placeholder="Number of Storages*"
                          min="0"
                          required
                        />
                      </div>
                    </Col>
                    {/* <Col lg={6} md={6} sm={12} className="form-group">
                     
            
                      <div className="field-inner mb-2">
                        <input
                          type="text"
                          name="username"
                          placeholder="Others"
                          required
                        />
                      </div>
                    </Col> */}
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <div className="field-inner">
                        <textarea
                          name="message"
                          placeholder="Please Mention Your Product Requirements Here"
                          required
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Submit</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>


          
        </Row>
              
      </div>
    </div>
  );
};

export default ContactSectionTwo;
