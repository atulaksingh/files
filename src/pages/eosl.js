import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MapBox from "@/components/MapSection/MapBox";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function eosl({
    className = "alternate",
    btnClassName = "btn-style-two",
  }) {
  return (
    <>
      <Layout pageTitle="Contact">
        {/* <Style /> */}
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Eosl Library" />
        {/* <ContactSectionTwo /> */}
        {/* <ContactInfoTwo /> */}
        {/* <MapBox /> */}
        <div className="mx-60 py-10">
          <div className="grid grid-cols-2">
            <div className="col-span-1 w-72">
              <select
                className="form-select form-select-md"
                aria-label="large select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-span-1  mx-auto">
              <div className="search ">
                <form className="form-inline flex gap-3 my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-warning my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
                <div className="text-xs mt-1">
                  Or Search Our Entire EOSL Library by the Model Number Directly
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 ">
            <div className="shadow-2xl my-1">
              <div className="p-4">
                <div
                  className="text-2xl  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  LENOVO
                </div>
                <div className="flex justify-between py-3">
                  <div>
                    <strong className="text-sm uppercase text-black">
                      Model
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      eosl date
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      category
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                </div>

                <Link href={"/eoslDetails"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">View More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="shadow-2xl my-1">
              <div className="p-4">
                <div
                  className="text-2xl  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  LENOVO
                </div>
                <div className="flex justify-between py-3 ">
                  <div>
                    <strong className="text-sm uppercase text-black">
                      Model
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      eosl date
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      category
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                </div>

                <Link href={"/"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">View More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="shadow-2xl my-1">
              <div className="p-4">
                <div
                  className="text-2xl  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  LENOVO
                </div>
                <div className="flex justify-between py-3 ">
                  <div>
                    <strong className="text-sm uppercase text-black">
                      Model
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      eosl date
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      category
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                </div>

                <Link href={"/"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">View More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="shadow-2xl my-1">
              <div className="p-4">
                <div
                  className="text-2xl  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  LENOVO
                </div>
                <div className="flex justify-between py-3 ">
                  <div>
                    <strong className="text-sm uppercase text-black">
                      Model
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      eosl date
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      category
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                </div>

                <Link href={"/"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">View More</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="shadow-2xl my-1">
              <div className="p-4">
                <div
                  className="text-2xl  text-black leading-loose"
                  style={{ borderBottom: "2px solid #80808054" }}
                >
                  LENOVO
                </div>
                <div className="flex justify-between py-3 ">
                  <div>
                    <strong className="text-sm uppercase text-black">
                      Model
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      eosl date
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                  <div>
                    <strong className="text-sm uppercase text-black">
                      category
                    </strong>
                    <div>jhsdgjhsgd</div>
                    <div>jhsdgjhsgd</div>
                  </div>
                </div>

                <Link href={"/"}>
                  <button className="theme-btn btn-style-one mt-2">
                    <i className="btn-curve"></i>
                    <span className="btn-title">View More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className={`call-to-section-two ${className}`}>
      <div className="auto-container">
        <div className="inner clearfix">
          <div>
            <h2>
REQUEST FOR A QUOTE
              {/* CONTACT YOUR IT <br/> SOLUTIONS PROVIDER NOW */}
              {/* We’re Ready to Bring Bigger <br />& Stronger Projects */}
              <div className="text-sm mt-2  text-white"> Request a QuoteInterested in learning more about how zACO Place can help maximize your uptime after the OEM warranty? <br />Request a quote from our team today.</div>
            </h2>
          </div>
          
          <div className="link-box">
            <Link href="/contact" passHref>
              <div className={`theme-btn ${btnClassName}`}>
                <i className="btn-curve"></i>
                <span className="btn-title">Get To Quote</span>
              </div>
            </Link>
          </div>
          
        </div>


      </div>
    </div>
        </div>
        <FooterSix />
      </Layout>
    </>
  );
}

export default eosl;
