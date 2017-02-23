// Dependencies
import React from 'react';

// Components
import Copy from './Copy';
import Img from './Img';

// StyleSheets
import styles from './TextImage.css';

const TextImage = ({ reverse, color, ...passThroughProps }) => {
    TextImage.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        reverse: React.PropTypes.number.isRequired,
        color: React.PropTypes.number.isRequired
    };
    let reverseClass;
    if(reverse){
        reverseClass = 'reverse';
    }
    let colorClass;
    if(color){
        colorClass = 'black';
    }
    return (
        <div className={`${styles['container']} ${styles[reverseClass]} ${styles[colorClass]}`}>
            <div className={styles.imgContainer}>
                <Img {...passThroughProps} />
            </div>
            <div className={styles.copyContainer}>
                <Copy {...passThroughProps} />
            </div>
        </div>
    );
};

export default TextImage;