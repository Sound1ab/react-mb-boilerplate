// Dependencies
import React from 'react';

// Componenents
import Image from './image';

// Stylesheets
import styles from './imageHeader.css';

// Data

const ImageHeader = ({ data, handleIndexClick, header, handleHeaderClick }) => {
    ImageHeader.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <hr className={styles.spacer} />
                    <h1>Vehicle Return Standard</h1>
                </div>
                <ul className={`${styles[`${Object.keys(data)[header]}-buttons`]}`}>
                    {data[Object.keys(data)[header]].map((element, arrayIndex) => {
                        return (
                            <li onClick={handleIndexClick.bind(null, arrayIndex)}>
                                {Object.keys(element)[0]}
                            </li>
                        );
                    })}
                </ul>
                {header ? <Image imgSrc={require('../../../assets/images/vrs/Car-interior.png')}/> : <Image imgSrc={require('../../../assets/images/vrs/Car-exterior-1.png')}/>}
            </div>
            <div className={styles.headerSelectorContainer}>
                {Object.keys(data).map((element, arrayIndex) => {
                    let active;
                    if(arrayIndex === header) {
                        active = 'active'
                    } else {
                        active = ''
                    }
                    return (
                        <div className={`${styles['headerSelector']} ${styles[active]}`} onClick={handleHeaderClick.bind(null, arrayIndex)}>
                            <div className={styles.padding}>
                                <span>{element}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ImageHeader;