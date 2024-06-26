import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import Section from '../components/Section';
import AboutSectionStyle3 from '../components/Section/AboutSection/AboutSectionStyle3';
import DepartmentSectionStyle4 from '../components/Section/DepartmentSection/DepartmentSectionStyle4';
import TestimonialSectionStyle2 from '../components/Section/TestimonialSection/TestimonialSectionStyle2';
import WorkingProcess from '../components/Section/WorkingProcess';
import BannerSectionStyle2 from '../components/Section/BannerSection/BannerSectionStyle2';
import BlogSectionStyle3 from '../components/Section/BlogSection/BlogSectionStyle3';
import FaqSectionStyle2 from '../components/Section/FaqSection/FaqSectionStyle2';
import AppointmentSectionStyle2 from '../components/Section/AppointmentSection/AppointmentSectionStyle2';
import BrandsSectionStyle2 from '../components/Section/BrandsSection/BrandsSectionStyle2';
import { pageTitle } from '../helpers/PageTitle';

export default function Home() {
  pageTitle('Home V2');
  return (
    <>
      <HeroSection
        title="Empower Your Practice with Medical Billing Services"
        subTitle="Discover Custom Solutions to Redefine Your Practice's Financial Health"
        videoBtnText="See how we work"
        videoUrl="https://www.youtube.com/embed/VcaAVWtP48A"
        funfactList={[
          { number: '80%', title: 'Accuracy Rate' },
          { number: '95%', title: 'Collection Rate' },
          { number: '89%', title: 'Satisfied Clients ' },
          { number: '90%', title: 'Claim Approval' },
        ]}
      />
  {/* About Section  */}
    <Section id="about" bottomMd={190} bottomLg={145} bottomXl={105}>
        <AboutSectionStyle3
          titleUp="ABOUT US"
          title="We’ll take care of your payments"
          subTitle="With a focus on client empowerment, timely payments, and transparent updates, we ensure your financial well-being. Our expert team provides personalized support, efficient collections, and direct access to billing managers. We take care of your complete statement xcycle, from generating patient statements to answering any questions your patients have regarding them."
        />
      </Section>
      <Section
        className="cs_bg_filed"
        style={{ backgroundImage: `url(/images/home_2/testimonial_bg.svg)` }}
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSectionStyle2
          sectionTitle="What Our Patients Say <br /> About Us"
          sectionTitleUp="TESTIMONIALS"
        />
      </Section>
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <WorkingProcess
          sectionTitle="How it Works"
          sectionTitleUp=""
          sectionTitleDown=""
          sectionSubTitle=""
        />
      </Section>
      <Section>
        <BannerSectionStyle2
          bgUrl="/images/home_2/cta_bg.jpeg"
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our <br />
          experienced medical professionals today!"
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSectionStyle3
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          sectionTitleDown=""
          sectionSubTitle=""
        />
      </Section>
      {/* Start FAQ Section */}
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <FaqSectionStyle2
          sectionTitle="Usually Asked"
          sectionTitleUp="What People"
        />
      </Section>
      {/* End FAQ Section */}
      <Section>
        <AppointmentSectionStyle2
          bgUrl="/images/home_2/appointment_bg.svg"
          imgUrl="/images/home_2/appointment_img.png"
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
        />
      </Section>
    </>
  );
}
