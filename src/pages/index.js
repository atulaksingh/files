import AboutSeven from "@/components/AboutSection/AboutSeven";
import AboutSix from "@/components/AboutSection/AboutSix";
import CallToSectionThree from "@/components/CallToSection/CallToSectionThree";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import FunFactSix from "@/components/FunFacts/FunFactSix";
import FunFactsOne from "@/components/FunFacts/FunFactsOne";
import GetQuoteTwo from "@/components/GetQuote/GetQuoteTwo";
import HeaderSix from "@/components/Header/HeaderSix";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import LiveSection from "@/components/LiveSection/LiveSection";
import FooterSix from "@/components/MainFooter/FooterSix";
import MapSix from "@/components/MapSection/MapSix";
import BlogSix from "@/components/NewsSection/BlogSix";
import ProjectEight from "@/components/ProjectSection/ProjectEight";
import ProjectSix from "@/components/ProjectSection/ProjectSix";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ServiceSix from "@/components/ServicesSection/ServiceSix";
import SliderSix from "@/components/SliderSection/SliderSix";
import SponsorSix from "@/components/SponsorsSection/SponsorSix";
import SubscribeOne from "@/components/SubscribeSection/SubscribeOne";
import TestimonialsSix from "@/components/TestimonialsSection/TestimonialsSix";
import TrustedSection from "@/components/TrustedSection/TrustedSection";
import Dj from "@/components/VideoSection/Dj";
import Dj2 from "@/components/VideoSection/Dj2";
import VideoSix from "@/components/VideoSection/VideoSix";
import WeDOSection from "@/components/WeDOSection/WeDOSection";
import preloader from "@/images/update-01-10-2021/preloader-6.png";
import React from "react";

const Home6 = () => {
  return (
    <Layout pageTitle="Home 06" preloader={preloader}>
      {/* <Style
        font="Kumbh Sans, sans-serif"
        bFont="Kumbh Sans, sans-serif"
        black="#1a3546"
        text="#6b7881"
        base="#41b974"
        baseRgb="65, 185, 116"
        scrollToTopColor="#fff"
      /> */}
      <HeaderSix />
      <HeaderTwo />
      {/* <MobileMenu /> */}
      <SearchPopup />
      <SliderSix />

{/* <div className="" >

      <Dj />
</div> */}
      <DiscoverSection />
      <AboutSix />
      <FunFactsOne />
      <TrustedSection />
      <div className="" >

      <LiveSection />
      </div>
      <ProjectEight />
      {/* <ServiceSix /> */}
      {/* <SubscribeOne /> */}
      {/* <ProjectSix /> */}
      {/* <FunFactSix /> */}
      


      <SponsorSix />
<div  className="">
<TestimonialsSix />

      {/* <Dj2 /> */}
</div>


<WeDOSection />
      {/* <BlogSix /> */}
      {/* <CallToSectionThree /> */}
      {/* <Dj2 /> */}
      <div className="my-3">

      {/* <VideoSix /> */}
      </div>

      <GetQuoteTwo className="get-quote-two__one-page" />
      {/* <MapSix /> */}
      <FooterSix />
    </Layout>
  );
};

export default Home6;
