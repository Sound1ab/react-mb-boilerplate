// Dependencies
import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

// Components
import BodySelector  from './bodySelector';
import RoofSelector from './RoofSelector';
import Table from './table';

// Stylesheets
import styles from './table.css';

// Data
import Data from './data';

export default class TableContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            bodySize: 0,
            roofSize: 0,
            mobileSelection: 0
        }
    }
    static propTypes = {

    }
    handleClickBodySize = (index) => {
        this.setState({
            bodySize: Number(index)
        })
    }
    handleClickRoofSize = (index) => {
        this.setState({
            roofSize: Number(index)
        })
    }
    handleClickMobileSelection = (event) => {
        this.setState({
            mobileSelection: Number(event.target.value)
        })
    }
    render () {
        return (
        <div>
            <BodySelector
                Data={Data}
                handleClickBodySize={this.handleClickBodySize}
                bodySize={this.state.bodySize} />
            <RoofSelector
                Data={Data}
                handleClickRoofSize={this.handleClickRoofSize}
                roofSize={this.state.roofSize}
                bodySize={this.state.bodySize} />
                <Table Data={Data} {...this.state} />
        </div>
        );
    }
}