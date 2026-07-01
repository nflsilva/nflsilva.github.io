import React from 'react';
import { pageSections } from '../../constants/data';

const NavigationBar = () =>  (
  <header className="sticky-top">
    <nav className="navbar navbar-expand bd-navbar bg-body-tertiary navbar-sticky">
      <div className="container flex-column flex-md-row">

        <a className="navbar-brand" href="#">nflsilva.github.io</a>

        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            {pageSections.map((s, i) => {
              if (s.id === 'intro') return null;
              if (s.id === 'about') {
                const title = 'About me';
                return (
                  <li className="nav-item" key={i}>
                    <a className="nav-link" href={`#${title}`}>{title}</a>
                  </li>
                );
              }

              if (s.id === 'projects') {
                const data = s.data;
                if (!data || !data.title) return null;
                return (
                  <li className="nav-item" key={i}>
                    <a className="nav-link" href={`#${data.title}`}>{data.title}</a>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>

      </div>
      
    </nav>
  </header>
);

export default NavigationBar;