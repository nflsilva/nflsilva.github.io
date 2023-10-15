import React from 'react';
import ProjectTechIcon from './ProjectTechIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconFromDetailType } from '../../constants/data';

function ProjectCard(props) {
  let detail = iconFromDetailType(props.type);
  return (
    <div className="card shadow-lg">
      <span className="position-absolute top-0 start-100 translate-middle p-2">🟥</span>
      <img className="card-img-top img-fluid" src={ props.image } />
      <div className="card-body">

        <div className="card-title">{ props.title }</div>

        <div className="card-text"><small className="text-muted">{ props.description }</small></div>

        <div className="mt-2">
          <div className="card-title">Technologies</div>
          <div className="row">
            {props.tags.map((t, i) => {
              return <ProjectTechIcon name={t} key={i}/>
            })}
          </div>
        </div>

        <div className="mt-4 mb-2">
          <div className="card-title">More details at</div>
          <div className="row">
            <div className="col-4 col-sm-5 col-md-4 col-lg-4 col-xl-4 mb-2">
              <a href={props.href} className="offset-2 col-8">
                <FontAwesomeIcon icon={detail.icon} className="fa-3x" style={{ color: 'white' }} />
              </a>
              <div className="col-12 text-center mt-1">
                  <p className="text-muted" style={{fontSize: "0.75rem", marginBottom: "0px"}}>{detail.name}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
  
  export default ProjectCard;