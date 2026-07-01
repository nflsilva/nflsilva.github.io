import React from 'react';
import Divider from './Divider';


const Section = (props) =>  (
    <div className="offset-1 col-10">
        <div id={props.title} style={{ scrollMarginTop: '80px' }}><Divider/></div>
        <h1 style={{color: "white"}}><strong>{props.title}</strong></h1>
        <p className="text-muted mb-4 col-md-10">{props.description}</p>
        <div>{props.children}</div>
    </div>
);

export default Section;