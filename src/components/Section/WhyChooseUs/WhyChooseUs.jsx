import React, { useState } from 'react';
import SectionHeading from '../../SectionHeading';
import Spacing from '../../Spacing';
import ContactButton from '../../Button/ContactButton';


export default function WhyChooseUS({ data, sectionTitle, sectionTitleDown }) {
    const [activeTab, setActiveTab] = useState(2);
    const handleTabClick = tabNumber => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <div className='container'>
                <SectionHeading
                    title={sectionTitle}
                    titleDown={sectionTitleDown}
                    center
                />
                <Spacing md="30" lg="30" />
                <div className='on_mobile'>
                    <div className="cs_tabs cs_style1 ">
                        <ul className="cs_tab_links">
                            {data.map((tab) => (
                                <li key={tab.id} className={activeTab === tab.id ? 'active' : ''}>
                                    <div className="cs_tab_link_in" onClick={() => handleTabClick(tab.id)}>
                                        <div className="why_us_heading">
                                            <div style={{ width: "20rem", height: "5rem", display: "flex", alignItems: "center", justifyContent: "center" }} className="cs_iconbox_icon cs_white_color cs_radius_15 cs_accent_bg">
                                                <h3 style={{ color: "white" }} className="cs_fs_24 cs_semibold mb-0">{tab.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="cs_tab_body">
                            {data.map((tab) => (
                                activeTab === tab.id && (
                                    <div key={tab.id} className="cs_testimonial cs_style_1">
                                        {/* <img src="/images/icons/quote.svg" alt="Icon" /> */}
                                        <p className='para_color'>{tab.testimonial}</p>
                                        <ContactButton buttonName="Call Us Today" />

                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
