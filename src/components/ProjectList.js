import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PortfolioModel from '../models/PortfolioModel';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';


function ProjectList(props) {
    const {img, category} = props.project;


  return (
    
   <div
          style={{display: props.selected === category || props.selected === "All" ? '': 'none'}}>
               <div >
                <img src={img} alt=""></img>
            </div>
        </div>


      
  )
}

ProjectList.propTypes = {
    project: PropTypes.instanceOf(PortfolioModel).isRequired
}
export default ProjectList