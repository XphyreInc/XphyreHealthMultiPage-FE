import React from 'react';
// import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle4 from '../components/Section/BannerSection/BannerSectionStyle4';
import HeroStyle5 from '../components/Hero/HeroStyle5';
import FeaturesSectionStyle4 from '../components/Section/FeaturesSection/FeaturesSectionStyle4';
import FeaturesSectionStyle2 from '../components/Section/FeaturesSection/FeaturesSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { ERdata, WhyUsDataER } from '../Constants/constants';



export default function EmergencyRooms() {
    pageTitle('ER');
    return (
        <>
            <HeroStyle5
                title="Emergency Rooms"
                subTitle="Streamlining Emergency Room Operations for Excellence"
                imgUrl="/images/home_5/hero_img.png"
                H="Proven Track Record in Emergency Room Management "
                p="With years of experience, we've helped numerous emergency rooms achieve remarkable financial and operational goals:"
                detail="Freestanding and hospital emergency rooms are critical resources for communities but can increase your staff's daily responsibilities, affecting patient care and revenue. Xphyre Health provides top-notch, custom emergency room billing and coding services.
                    With a decade of experience and skilled medical billers and coders, we ensure your emergency department runs smoothly and efficiently!"
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
                title="Emergency Rooms"
                subTitle=""
            /> */}
            <Section topMd={200} topLg={150} topXl={110}>
                <FeaturesSectionStyle4
                    sectionTitle="Comprehensive Services"
                    data={ERdata}
                />
            </Section>
            <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
                <FeaturesSectionStyle2
                    sectionTitle="Why Choose Xphyre Health for Emergency Rooms "
                    imgUrl="images/about/why_choose_us.jpeg"
                    data={WhyUsDataER}
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
