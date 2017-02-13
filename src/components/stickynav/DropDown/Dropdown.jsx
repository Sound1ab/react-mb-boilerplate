// Dependencies
import React from 'react';

// Stylesheets
import styles from './DropDown.css';

// Data
import Data from '../data';

export default class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            selected: 0
        };
    }
    static propTypes = {
        index: React.PropTypes.number.isRequired,
        handleClick: React.PropTypes.func.isRequired,
        handleListClick: React.PropTypes.func.isRequired,
        handleHeadlineClick: React.PropTypes.func.isRequired,
        selected: React.PropTypes.bool.isRequired,
    }

    handleHeadlineClick = () => {
        this.setState({
            selected: !this.state.selected
        });
    }

    handleListClick = (index) => {
        this.setState({
            selected: 0,
            index
        });
        this.props.handleClick(index);
    }

    render () {
        const { index, selected } = this.state;
        let active = '';
        if(selected){
            active = 'active';
        } else {
            active = '';
        }
        return (
            <div>
                <div className={`${styles['container']}`}>
                    <div className={`${styles['dropdown-container']} ${styles[active]}`}>
                        {Data.map((element, arrayIndex) => {
                            if(arrayIndex === index){
                                return (
                                    <div key={element.headline} className={`${styles['header']}`} onClick={this.handleHeadlineClick} >
                                        <span>{element.headline}</span>
                                    </div>
                                );
                            }
                        })}
                        {Data.map((element, arrayIndex) => {
                            return (
                                <div key={arrayIndex} className={`${styles['list']}`} onClick={this.handleListClick.bind(null, arrayIndex)} >
                                    <span>{element.headline}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}