import React from 'react';
// import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { HSdata,WhyUsDataHS } from '../Constants/constants';



export default function HealthcareSystems() {
    pageTitle('HS');
    return (
        <>
         <HeroStyle5
                title="Healthcare Systems"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Proven Results, Unmatched Expertise"
                p="Xphyre Health partners with nationwide healthcare systems to elevate operational efficiency and cash flow:"
                detail="With priorities growing and margins shrinking, healthcare systems need a reliable partner that cares for their business the way they care for patients. Xphyre Health enters the frame to streamline your operations and boost your financial health!
                With a decade of experience and cutting-edge technology, we provide healthcare systems with hassle-free billing and coding services. The result? Zero errors, better patient care, and speedier payments!"
                funfactList={[
                    { number: '20%', title: 'Accuracy Rate' },
                    { number: '95%', title: 'Reduction in AR Days' },
                    { number: '50%', title: 'Satisfied Clients' },
                    { number: '10%', title: 'Claim Approval' },
                ]}
            />
            {/* <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="Healthcare Systems"
                subTitle=""
            /> */}
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Our Comprehensive Services"
                    data={HSdata}
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
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Your Healthcare System?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataHS}
                />
            </Section>
            {/* <Spacing md="200" lg="10" xl="150" /> */}
        </>
    );
}
