import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PortfolioModel from '../models/PortfolioModel';

function ProjectList(props) {
    const {img, category} = props.project;
  return (
        <div className='col-sm-4 p-2 bg-white' style={{display: props.selected === category || props.selected === "All" ? '': 'none'}}>
               <div className={'card'}>
                <img src={img} alt=""></img>
            </div>
    </div>
  )
}

ProjectList.propTypes = {
    project: PropTypes.instanceOf(PortfolioModel).isRequired
}
export default ProjectList