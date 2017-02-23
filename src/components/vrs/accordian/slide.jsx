// Dependencies
import React from 'react';

// Componenents

// Stylesheets
import styles from './accordian.css';

// Data

const Slide = ({ data, arrayIndex, children, handleIndexClick, active }) => {
    Slide.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
        <div>
            <div onClick={handleIndexClick.bind(null, arrayIndex)}>
                <span>{Object.keys(data[arrayIndex])[0]}</span>
            </div>
            <div className={`${styles['accordian-content']} ${styles[active]}`}>
                {children}
            </div>
        </div>
    );
};

export default Slide;