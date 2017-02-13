// Dependencies
import React from 'react';

// Stylesheets
import styles from './DropDown.css';

const Dropdown = ({ data, index, handleListClick, handleHeadlineClick, selected }) => {
    Dropdown.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        handleListClick: React.PropTypes.func.isRequired,
        handleHeadlineClick: React.PropTypes.func.isRequired,
        selected: React.PropTypes.bool.isRequired,
    };
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
                    {data.map((element, arrayIndex) => {
                        if(arrayIndex === index){
                            return (
                                <div className={`${styles['header']}`} onClick={handleHeadlineClick} >
                                    <span>{element.headline}</span>
                                </div>
                            );
                        }
                    })}
                    {data.map((element, arrayIndex) => {
                        return (
                            <div className={`${styles['list']}`} onClick={handleListClick.bind(null, arrayIndex)} >
                                <span>{element.headline}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;