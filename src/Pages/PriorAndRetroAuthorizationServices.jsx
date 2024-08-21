import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import Section from '../components/Section';
import Spacing from '../components/Spacing';
import { pageTitle } from '../helpers/PageTitle';
import { PARASdata1, WhoWeServeCommon2 } from '../Constants/constants';
import { PARASdata2 } from '../Constants/constants';



export default function PriorAndRetroAuthorizationServices() {
  pageTitle('PBS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Prior and Retro Authorization Services"
        subTitle=""
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <AboutSectionStyle2
          title="Streamline Your Practice"
          p1="Prior and retro authorization are critical medical billing and healthcare management processes that affect a clinic's productivity and reimbursements. Pre-authorization involves obtaining approval from insurance companies before delivering patient care, ensuring the insurer will cover the costs."
          p2="In contrast, retro authorization entails securing approval from insurance providers after providing immediate patient care. These authorizations are vital for mitigating claim denial risks and ensuring healthcare providers receive fair compensation."
          p3="At Xphyre Health, our trained experts help you save time and money by alleviating administrative headaches and extensive authorization processes. As a result, your healthcare clinic can focus on core responsibilities and providing exceptional patient care."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Boost Efficiency"
          data={PARASdata1}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
          title="Transform Your Practice with Effortless Billing Solutions from Xphyre Health"
          subTitle=""
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Transform Your Operations"
          data={PARASdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSection
          sectionTitle="Optimize Workplace Efficiency and Cash Flow with Xphyre Health: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeCommon2}
        />
      </Section>
    </>
  );
}
