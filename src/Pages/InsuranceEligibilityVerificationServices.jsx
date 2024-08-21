import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { IEVSData1, IEVSdata2, WhoWeServeIEVS } from '../Constants/constants';



export default function InsuranceEligibilityVerificationServices() {
  pageTitle('IEVS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Insurance Eligibility Verification Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Enhance Your Practice with Professional"
          p1="Insurance verification and eligibility are critical in your revenue cycle management, optimizing your cash flow and reducing denials. The process involves gathering and verifying a patient's details and insurance coverage before providing care."
          p2="During insurance verification, expert authorization specialists confirm the patient's coverage details, insurance plans, deductibles, and restrictions. Ensuring accurate eligibility is crucial for avoiding missing information and denials, ultimately protecting your clinic's revenue."
          p3="Outsourcing insurance eligibility services to our certified experts helps you minimize errors and inefficiencies associated with manual verification. With in-depth experience and state-of-the-art technology, Xphyre Health delivers accurate eligibility and verification information."
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSectionStyle2
          sectionTitle="Enhance Your Practice"
          data={IEVSData1}
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
      <Section>
        <DepartmentSectionStyle2
          sectionTitle="Optimize Cash Flow"
          data={IEVSdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <DepartmentSection
          sectionTitle="Discover Seamless Eligibility Verification with Xphyre Health: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeIEVS}
        />
      </Section>
    </>
  );
}
