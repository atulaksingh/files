import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import BlogEight from "@/components/NewsSection/BlogEight";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceCard1 from "@/components/ServicesSection/ServiceCard1";
import ServiceCard2 from "@/components/ServicesSection/ServiceCard2";
import ServicesSectionOne from "@/components/ServicesSection/ServicesSectionOne";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import React from "react";

const services = () => {
  return (
    <Layout pageTitle="Services">
      <Style />
  


      <Style />
      <HeaderTwo/>
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Services" />
      {/* <BlogEight /> */}
      <ServiceCard1 />
      {/* <ServiceCard2 /> */}
      {/* <ServicesSectionThree className="padd-top" /> */}
      {/* <ServicesSectionThree className="padd-top" /> */}
      {/* <GrHostMaintenance />
      <BsHddNetwork />
      <GrHostMaintenance /> */}
      <ServicesSectionOne />
      {/* <WeWorkSection /> */}
      <CallToSectionTwo className="alternate" />
      <FooterSix />
    </Layout>
  );
};

export default services;
