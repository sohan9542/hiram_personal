import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import MainBanner from "../components/DigitalAgency/MainBanner";
import WhatWeOffer from '../components/DigitalAgency/WhatWeOffer';
import AboutUsContent from '../components/DigitalAgency/AboutUsContent';
import OurServices from '../components/DigitalAgency/OurServices';
import DigitalAgencyFunFacts from '../components/DigitalAgency/DigitalAgencyFunFacts';
import Projects from '../components/DigitalAgency/Projects';
import PricingStyleThree from '../components/PricingPlans/PricingStyleThree';
import FeedbackStyleThree from '../components/Common/FeedbackStyleThree';
import BlogPostStyleTwo from '../components/Common/BlogPostStyleTwo';
import CTAStyleTwo from '../components/Common/CTAStyleTwo';
import Footer from "../components/_App/Footer";

const DigitalAgency = () => (
    <Layout>
        <SEO title="Digital Agency Home" /> 
        <Navbar />
        <MainBanner />
        <WhatWeOffer />
        <AboutUsContent />
        <OurServices />
        <DigitalAgencyFunFacts />
        <Projects />
        {/* <PricingStyleThree /> */}
        <FeedbackStyleThree />
        <BlogPostStyleTwo />
        <CTAStyleTwo />
        <Footer />
    </Layout>
)

export default DigitalAgency;
