import AboutUspCard from "@/components/AboutSection/AboutUspCard";
import AgencySection from "@/components/AgencySection/AgencySection";
import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import FunFactSix from "@/components/FunFacts/FunFactSix";
import FunFacts from "@/components/FunFacts/FunFacts";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterSix from "@/components/MainFooter/FooterSix";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServicesSectionThree from "@/components/ServicesSection/ServicesSectionThree";
import SponsorsSectionTwo from "@/components/SponsorsSection/SponsorsSectionTwo";
import TeamSectionTwo from "@/components/TeamSection/TeamSectionTwo";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import React from "react";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderTwo/>
      <MobileMenu />
      <SearchPopup />
      <divageBanner title="About Us" />
      <PageBanner title="About Us" />
      {/* <DiscoverSection ShowTitle={false} /> */}
      <FeaturedSection className="featured-section__about-two" />
      {/* <TestimonialsSection /> */}
      {/* <FunFacts /> */}
      {/* <divarallaxSection /> */}
      <AgencySection />
      {/* <TeamSectionTwo /> */}
      {/* <SponsorsSectionTwo /> */}

      <AboutUspCard />
      {/* <ServicesSectionThree className="padd-top" /> */}
      <FunFactSix />
      <FooterSix />
    </Layout>
  );
};

export default About;
