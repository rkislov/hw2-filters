import React from 'react'
import PropTypes  from 'prop-types';
import FilterModel from '../models/FilterModel';

function Toolbar(props) {
    const { fname } = props.filter;
    return (
    <button
    className={'btn btn-outline-dark' + (fname === props.selected ? 'active' : '')} value={fname}
    onMouseEnter={props.handlerOnSelectFilter}
    >{fname}</button>
  )
}


Toolbar.propTypes = {
    filter: PropTypes.instanceOf(FilterModel).isRequired
}
export default Toolbar
