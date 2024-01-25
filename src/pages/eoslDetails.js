import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
function eoslDetails({ EoslData,brand }) {

  const [selectedBrand, setSelectedBrand] = useState(brand); 
  // Set the initial value
  const [eoslData, setEoslData] = useState(EoslData); 
  // Initialize with the data from props

  const router = useRouter();

  const handleBrandChange = async (event) => {
    const brandValue = event.target.value;

    // Update the state with the selected brand
    setSelectedBrand(brandValue);

    // Make the API request using Axios when the brand changes
    const response = await axios.get(
      `http://127.0.0.1:8000/detail-view-eosl/${brandValue}`
    );

    // Extract the data from the response
    const updatedEoslData = response.data;

    // Update the component state with the new data
    setEoslData(updatedEoslData);

    // Update the URL with the selected brand using Next.js router
    router.push(`/eoslDetails?brand=${brandValue}`);
  
  };
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
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="all">All</option>
              {eoslData?.brands?.map((item) => (
                <option key={item.id} value={item.brand_name}>
                  {item.brand_name}
                </option>
              ))}
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
                  <th scope="col">MODEL</th>
                  <th scope="col">EOSL DATE</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {eoslData?.eosls?.map((item) => (
                  <>
                    <tr className="text-md font-semibold">
                      <td>{item.model}</td>
                      <td>{item.eosl_date}</td>
                      <td>{item.category}</td>
                      <td className="text-right">
                        <button className="theme-btn btn-style-one mt-2">
                          <i className="btn-curve"></i>
                          <span className="btn-title">View More</span>
                        </button>
                      </td>
                    </tr>
                  </>
                ))}

             
              </tbody>
            </table>
          </div>
        </div>

        <FooterSix />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    // console.log("data3786478326")
    const { brand } = context.query;
// setSelectedBrand(brand)
    // console.log("data3786478326",brand)
    // Make a GET request using Axios
    const response = await axios.get(
      `http://127.0.0.1:8000/detail-view-eosl/${brand}`
    );

    // Extract the data from the response
    // console.log("data3786478326",response.data)
    const EoslData = response.data;
    // Return the data as props
    return {
      props: {
        EoslData,
        brand
      },
    };
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);

    // You can also return an empty object or handle the error in other ways
    return {
      props: {},
    };
  }
}

export default eoslDetails;
