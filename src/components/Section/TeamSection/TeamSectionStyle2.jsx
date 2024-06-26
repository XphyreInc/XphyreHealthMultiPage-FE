import React, { useState } from 'react';
import Spacing from '../../Spacing';
import TeamStyle2 from '../../Team/TeamStyle2';
import Pagination from '../../Pagination';

export default function TeamSectionStyle2({ data }) {
  const [view, setView] = useState('grid');
  const [active, setActive] = useState('all');
  const [filteredData, setFilteredData] = useState(data);
  // Extracting unique categories from teamData
  const uniqueCategories = [...new Set(data.map(doctor => doctor.category))];
  const handleFilter = category => {
    if (category === 'all') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(doctor => doctor.category === category);
      setFilteredData(filtered);
    }
    setActive(category);
  };

  return (
    <div className="container">
      <Spacing md="65" />
      <div className={`cs_team_grid cs_${view}_view_wrap`}>
        {filteredData?.map((item, index) => (
          <TeamStyle2 {...item} key={index} />
        ))}
      </div>
      <Spacing md="90" />
      {/* <Pagination /> */}
    </div>
  );
}
