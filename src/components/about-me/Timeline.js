import React from 'react';
import TimelineEvent from './TimelineItem';

const Timeline = (props) => {
    return (
        <div className="row">
            { props.timeline.map((p, i) => (
                <TimelineEvent key={i} year={p.year} description={p.event}/>
            ))}
        </div>
    );
};

export default Timeline;