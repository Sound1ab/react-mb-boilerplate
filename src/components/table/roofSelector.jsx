// Dependencies
import React from 'react';

// Componenents

// Stylesheets
import styles from './table.css';

// Data

const RoofSelector = ({ Data, handleClickRoofSize, roofSize, bodySize }) => {
    RoofSelector.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
        <div className={styles.roofSelectorContainer}>
            <div className={styles.roofSelectorHeading}>
                <h2>title</h2>
            </div>
            {Data.map((dataArray, index) => {
                if(index === bodySize){
                    return dataArray[Object.keys(dataArray)[0]].map((bodyObject, index) => {
                        if(index ===  roofSize){
                            return (
                                <div onClick={handleClickRoofSize.bind(null, index)} className={`${styles['roofSelector']} ${styles['active']}`}>
                                    <div className={styles.roofSelectorPadding}>
                                        <span>{Object.keys(bodyObject)[0]}</span>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div onClick={handleClickRoofSize.bind(null, index)} className={styles.roofSelector}>
                                    <div className={styles.roofSelectorPadding}>
                                        <span>{Object.keys(bodyObject)[0]}</span>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            })}
        </div>
    );
};

export default RoofSelector;