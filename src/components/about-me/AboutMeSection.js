import React from 'react';
import Section from '../layout/Section';
import Timeline from '../about-me/Timeline';
import Interests from '../about-me/Interests';

function AboutMeSection(props) {
  return (
        <div className="full-screen-section">
            <Section title="About me" description={props.about.description}>
                <Timeline timeline={props.about.timeline} />
                <Interests interests={props.about.interests} />
                { props.about.cv && (
                    <div className="row col-md-10">
                        <p className="text-muted">For more detailed information, check out <a href={props.about.cv}>my CV</a>.</p>
                    </div>
                )}
            </Section>
        </div>
  );
}

export default AboutMeSection;