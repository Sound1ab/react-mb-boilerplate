// Dependencies
import React from 'react';

// Stylesheets
import styles from './TabbedContent.css';

const Tabs = ({ data, index, handleClick }) => {
    Tabs.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        handleClick: React.PropTypes.func.isRequired,
    };
    return (
        <div className={`${styles['tabs-container']} hide-on-tabletmini hide-on-mobile`}>
            {data.map((element, arrayIndex) => {
                if(arrayIndex === index){
                    return (
                        <div key={index} className={`${styles['tab']} ${styles['active']}`}
                             onClick={handleClick.bind(null, arrayIndex)} >
                            <p unselectable="on">{data[arrayIndex].headline}</p>
                        </div>
                    );
                } else {
                    return (
                        <div key={arrayIndex} className={`${styles['tab']}`}
                             onClick={handleClick.bind(null, arrayIndex)} >
                            <p unselectable="on">{data[arrayIndex].headline}</p>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Tabs;