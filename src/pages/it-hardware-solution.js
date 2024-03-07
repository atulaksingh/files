import AboutMeOne from "@/components/AboutSection/AboutMeOne";
import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceCard1 from "@/components/ServicesSection/ServiceCard1";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import WeWorkSection from "@/components/WeWorkSection/WeWorkSection";
import IHSS from "@/components/service_Card/IHSS";
import React from "react";

function ithardwaresolution() {
  return (
    <>
      <Layout pageTitle="Services">
        <Style />

        <Style />
        <HeaderTwo />
        <MobileMenu />
        <SearchPopup />
        <PageBanner title="Empowering businesses worldwide with reliable IT hardware and expert support" />
        <IHSS />
        <AboutMeOne />

        <CallToSectionTwo className="alternate" />
        <FooterSix />
      </Layout>
    </>
  );
}

export default ithardwaresolution;
