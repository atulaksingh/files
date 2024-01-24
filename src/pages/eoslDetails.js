import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

function eoslDetails() {
  return (
    <>
      <Layout pageTitle="Contact">
        {/* <Style /> */}
        <HeaderSix />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Eosl Library" />

        <div className="mx-60 py-10">
          <div className="grid grid-cols-2">
            <div className="col-span-1 w-72">
              <div>Select Brand</div>
              <select
  className="form-select form-select-md"
  aria-label="large select example"
  defaultValue="2"
>
  <option value="All">All</option>
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

          <div className="my-10">
            <table className="table ">
              <thead>
                <tr className="bg-[#EFEFEF] text-gray-600">
                  {/* <th scope="col">#</th> */}
                  <th scope="col">MODEL</th>
                  <th scope="col">EOSL DATE</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-md font-semibold">
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td className="text-right">
                    <button className="theme-btn btn-style-one mt-2">
                      <i className="btn-curve"></i>
                      <span className="btn-title">View More</span>
                    </button>
                  </td>
                </tr>
                <tr className="text-md font-semibold">
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td className="text-right">
                    <button className="theme-btn btn-style-one mt-2">
                      <i className="btn-curve"></i>
                      <span className="btn-title">View More</span>
                    </button>
                  </td>
                </tr>
                <tr className="text-md font-semibold">
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td className="text-right">
                    <button className="theme-btn btn-style-one mt-2">
                      <i className="btn-curve"></i>
                      <span className="btn-title">View More</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <FooterSix />
      </Layout>
    </>
  );
}

export default eoslDetails;
