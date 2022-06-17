import React, { useState, setState } from 'react';
// import PropTypes from 'prop-types';
import PortfolioModel from '../models/PortfolioModel';
import FilterModel from '../models/FilterModel'; 
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

function Portfolio() {
    const [ projects, setProjects ] = useState([
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg","Business Cards"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg","Business Cards"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png","Flayers"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg","Business Cards"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg","Business Cards"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg","Websites"),
        new PortfolioModel("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png", "Flayers")
    ]);

    const [ filters, setFilters ] = useState([
        new FilterModel("All"),
        new FilterModel("Websites"),
        new FilterModel("Flayers"),
        new FilterModel("Business Cards")
    ]);

    const [selected, setSelected ] = useState("All");

  
return (
    <div className='container-fluid'>
        <div className='btn-group'>
            <div className='list-group list-group-horizontal'>
                {filters.map(o => <Toolbar key={o.fname} filter={o} selected={selected} handlerOnSelectFilter={e => setSelected(e.target.value)}/>)}
            </div>
        </div>
        <div className='raw'>
                {projects.map(o => <ProjectList key={o.img} project={o} selected={selected} />)}
        </div>
    </div>
  )
}

// Portfolio.propTypes = {
// }

export default Portfolio
