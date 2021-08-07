import { Link } from "gatsby";
import React, { useState } from "react";

import './style.scss';

const Tabs = ({title, tabs}) => {

  const [tabIndex, setTabIndex] = useState(0)

  const tabTitles = tabs.map(p => p.title);
  const tabComponents = tabs.map(p => (
    <div className="tab-component-wrapper">
      <p>{p.title}</p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tempora quis sequi corrupti qui eligendi quibusdam omnis fugit optio iusto, tenetur nisi, exercitationem iure! Mollitia sequi natus molestias velit animi quidem in!
    </div>
  ))
  
  const tabConponentsStyle = {
    transform: `translateX( calc(-100% * ${tabIndex}) )`
  }

  return (
    <div className="tabs">

      { title &&
        <div className="tabs-header">
          <h3>{title}</h3>
        </div>
      }

      <div className="tab-titles">
        { tabTitles.map( (title, i) => {
          const active = i === tabIndex;
          return (
            <button 
              key={i} 
              onClick={() => setTabIndex(i)} 
              className={active ? 'active' : ''}
            >{title}</button>
          )
        })}
      </div>

      <div className="tab-components" style={tabConponentsStyle}>
        { tabComponents.map( component => component)}
      </div>

    </div>
    )
};

export default Tabs;