// Dependencies
import React from 'react';

// StyleSheets
import styles from './TextImage.css';

const Copy = ({ data, index, copyPlacement }) => {
    Copy.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        copyPlacement: React.PropTypes.string.isRequired,
    };
    return (
        <div className={`${styles[copyPlacement]} ${styles['img']}`}>
            <img src={data[index].img} />
            <div className={`${styles['chevron']}`}></div>
        </div>
    );
};

export default Copy;