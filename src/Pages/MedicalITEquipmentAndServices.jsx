import React from 'react';
import BannerSectionStyle5 from '../components/Section/BannerSection/BannerSectionStyle5';
import Spacing from '../components/Spacing';
import DepartmentSectionStyle2 from '../components/Section/DepartmentSection/DepartmentSectionStyle2';
import AboutSectionStyle2 from '../components/Section/AboutSection/AboutSectionStyle2';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import DepartmentSection from '../components/Section/DepartmentSection';
import Section from '../components/Section';
import { pageTitle } from '../helpers/PageTitle';
import { MIEASdata1, MIEASdata2, WhoWeServeMIEAS } from '../Constants/constants';



export default function MedicalITEquipmentAndServices() {
  pageTitle('MIEAS');
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/doctors/banner_bg.svg"
        imgUrl="/images/doctors/banner_img.png"
        title="Medical IT Equipment and Services"
        subTitle="Unlock Healthcare Excellence with Expert Credentialing and Contracting "
      />
      <Spacing md="150" lg="7" xl="100" />
      <Section>
        <AboutSectionStyle2
          title="Unlock the Power of Technology to Supercharge Your Growth"
          p1="Investing in high-quality, reliable medical IT equipment and services can significantly enhance your practice's efficiency and productivity. With robust IT solutions, healthcare practices can unlock the ideal software, technical assistance, and equipment to maximize efficiency and productivity. "
          p2="Our experts at Xphyre Health offer comprehensive IT services, including installation, maintenance, and support to meet your facility's unique needs. Moreover, our trained and certified team's extensive experience and intimate industry knowledge ensure you receive top-quality products."
          p3="Thus, our proficient IT technicians empower you to maximize efficiency while minimizing costs!"
          imgUrl="/images/departments/department_img_1.png"
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSectionStyle2
          sectionTitle="Get Expert Medical IT Equipment and Services "
          data={MIEASdata1}
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
          sectionTitle="Revolutionize Your Business "
          data={MIEASdata2}
        />
      </Section>
      <Spacing md="150" lg="7" xl="100" />
      <Section >
        <DepartmentSection
          sectionTitle="Discover Cutting-Edge IT Solutions to Streamline Workflow: Who We Serve?"
          bgUrl="images/home_1/department_bg.svg"
          data={WhoWeServeMIEAS}
        />
      </Section>
    </>
  );
}
