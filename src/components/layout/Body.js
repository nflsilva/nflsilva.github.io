import React from 'react';

import Intro from '../intro/Intro'
import ProjectBodySection from '../projects/ProjectSection';
import AboutMeSection from '../about-me/AboutMeSection';
import { pageSections } from '../../constants/data';

function Body() {
  return (
    <div className="body" style={{backgroundColor: "#282c34"}}>
        <div className="container">
          {pageSections.map((s, i) => {
            if (s.id === 'intro') return <Intro key={i} />;
            if (s.id === 'about') return <AboutMeSection key={i} about={s.data} />;
            if (s.id === 'projects') {
              const sectionData = s.data;
              if (!sectionData) return null;
              return (
                <ProjectBodySection
                  key={i}
                  title={sectionData.title}
                  projects={sectionData.projects}
                  description={sectionData.description}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
  );
}

export default Body;