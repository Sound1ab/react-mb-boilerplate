// Dependencies
import React from 'react';

// Componenents

// Stylesheets
import styles from './table.css';

// Data

const BodySelector = ({ Data, handleClickBodySize, bodySize }) => {
    BodySelector.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
        <div className={styles.bodySelectorContainer}>
            {Data.map((dataArray, index) => {
                if(index ===  bodySize){
                    return (
                        <div onClick={handleClickBodySize.bind(null, index)} className={`${styles['bodySelector']} ${styles['active']}`}>
                            <div className={styles.bodySelectorPadding}>
                                <span>{Object.keys(dataArray)[0]}</span>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div onClick={handleClickBodySize.bind(null, index)} className={styles.bodySelector}>
                            <div className={styles.bodySelectorPadding}>
                                <span>{Object.keys(dataArray)[0]}</span>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default BodySelector;