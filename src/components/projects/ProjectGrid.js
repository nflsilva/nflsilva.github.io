import React from 'react';
import ProjectGridColumn from './ProjectGridColumn'
import ProjectCard from './ProjectCard'

const ProjectGrid = (props) =>  (
    <div>
        <div className="row mb-4">
        { props.projects.map((p, i) => (
            <ProjectGridColumn key={i}>
                <ProjectCard title={p.title} description={p.description} image={p.image} href={p.details} tags={p.tags} type={p.detailType} professional={p.professional}/>
            </ProjectGridColumn>
        ))}
        </div>
    </div>

);

export default ProjectGrid;