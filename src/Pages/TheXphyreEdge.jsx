import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import FeaturesSectionStyle5 from '../components/Section/FeaturesSection/FeaturesSectionStyle5';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import Spacing from '../components/Spacing';
import { TheXphyreEdgedata } from '../Constants/constants';



export default function TheXphyreEdge() {
    pageTitle('TXE');
    return (
        <>
            <BannerSectionStyle5
                bgUrl="/images/doctors/banner_bg.svg"
                imgUrl="/images/doctors/banner_img.png"
                title="The Xphyre Edge"
                subTitle=""
            />
            <Section
                topMd={185}
                topLg={140}
                topXl={100}
                bottomMd={200}
                bottomLg={150}
                bottomXl={100}
                className="cs_gray_bg_1"
            >
                <FeaturesSectionStyle5
                    sectionTitle="Experience the Xphyre Health Difference to Streamline Healthcare Billing "
                    data={TheXphyreEdgedata}
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
            <Section>
                <BannerSectionStyle2
                    bgUrl="/images/home_2/cta_bg.jpeg"
                    title="Transform Your Practice with Effortless Billing Solutions from Xphyre Health"
                    subTitle=""
                />
            </Section>
            <Spacing md="200" lg="10" xl="150" />
        </>
    );
}
