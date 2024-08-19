import React from 'react';
// import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { Hdata,WhyUsDataH } from '../Constants/constants';



export default function Hospitals() {
    pageTitle('H');
    return (
        <>
        <HeroStyle5
                title="Hospitals"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                detail="Want to optimize your healthcare practice's operational efficiency and cash flow? Partnering with an expert and reliable hospital billing and coding company can help eliminate costly errors and maximize profits. 
                            Our experts at Xphyre Heath have the knowledge and experience to optimize your revenue cycle, minimize expenses, and enhance overall productivity."
                imgUrl="/images/home_5/hero_img.png"
                btnUrl="/about"
                H="Skyrocket Your Success with Our Expert Services"
                p="With a certified team of dedicated medical billers and coders, we help hospitals nationwide enjoy accurate and timely services:"
                funfactList={[
                    { number: '20%', title: 'Accuracy Rate' },
                    { number: '95%', title: 'Collection Rate' },
                    { number: '50%', title: 'Satisfied Clients' },
                    { number: '10%', title: 'Claim Approval' },
                ]}
            />
            {/* <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Hospitals"
                subTitle=""
            /> */}
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Top-Notch Services for Hospital Clinics"
                    data={Hdata}
                />
            </Section>
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Experience the Xphyre Health Difference"
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataH}
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
            <Section className="cs_footer_margin_0">
                <BannerSectionStyle4
                    bgUrl="images/doctors/banner_bg_2.jpeg"
                    title="Why Us?"
                    subTitle="Cultivate deep, long-lasting relationships with insurance companies and patients with Xphyre Health's expert staff"
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
        </>
    );
}
