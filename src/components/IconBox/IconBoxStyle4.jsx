import React from 'react';
import { heroBanner } from '../../assets/allAssets';


export default function IconBoxStyle4({ title, description}) {
  return (
    <div className="cs_iconbox cs_style_4">
      <h2 className="cs_iconbox_title cs_fs_32">{title}</h2>
      <p className="cs_iconbox_subtitle m-0">{description}</p>
    </div>
  );
}
