import React from 'react';
// import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { PPdata, WhyUsDataPP } from '../Constants/constants';



export default function PrivatePractices() {
    pageTitle('PP');
    return (
        <>
            <HeroStyle5
                title="Private Practices"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Transforming Private Practice Billing and Management"
                p="Trust Xphyre Health to elevate your private practice's efficiency and cash flow! "
                detail="Private practices often struggle to juggle core business tasks with revenue management, increasing the risk of errors and lost revenue. At Xphyre Health, our expert medical billers and coders optimize your operational efficiency, patient flow, and financial health.
                With our trained technicians to handle administrative operations, your staff can focus on providing top-quality patient care, increasing satisfaction and revenue!"
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
                title="Private Practices"
                subTitle=""
            /> */}
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services for Private Practices "
                    data={PPdata}
                />
            </Section>
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Your Private Practice?"
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataPP}
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
