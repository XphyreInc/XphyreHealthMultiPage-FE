import React from 'react';

// import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ContactButton from '../Button/ContactButton';

export default function HeroStyle5({
  title,
  subTitle,
  detail,
  bgUrl,
  p,
  H,
  imgUrl,
  videoBtnText,
  videoUrl,
  funfactList,
  btnText,
  btnUrl,
}) {
  return (
    <section className="cs_hero cs_style_2 cs_type_1">
      <div className="container">
        <div className="cs_hero_text">
          <h3 className="cs_hero_title cs_white_color cs_fs_60">
            {parse(title)}
          </h3>
          <div className="cs_hero_text_in" style={{ display: "flex", flexDirection: "column" }}>
            <p className="cs_hero_subtitle cs_white_color">{detail}</p>
            <div style={{position:"absolute", top:"19rem"}}>
              <ContactButton buttonName="Call Us Today" />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_hero_img">
        <img src={imgUrl} alt="Hero" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cs_hero_funfact text-center">
              <div style={{ display: "flex", flexDirection: 'column', alignContent: "center", justifyContent: "center" }}>
                <h4 className='cs_white_color'>{H}</h4>
                <p className='cs_white_color'>{p}</p>
              </div>
              {funfactList?.map((item, index) => (
                <>
                  <div style={{ position: "relative", top: "0.5rem" }} className="cs_hero_funfact_col" key={index}>
                    <h3 className="cs_white_color cs_fs_72">{item.number}</h3>
                    <p className="cs_white_color mb-0">{item.title}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
