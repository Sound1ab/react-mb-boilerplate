// Dependencies
import React from 'react';

// Components
import Copy from './Copy';
import Img from './Img';

// StyleSheets
import styles from './TextImage.css';

const TextImage = ({ copyPlacement, ...passThroughProps }) => {
    TextImage.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        copyPlacement: React.PropTypes.string.isRequired
    };
    return (
        <div className={`${styles['container']} grid-container grid-parent `}>
            <div className={`${styles[copyPlacement]} ${styles['imgPlacement']} grid-parent grid-50 tablet-grid-100 tabletmini-grid-100 mobile-grid-100`}>
                <Img {...passThroughProps} />
            </div>
            <div className={`${styles['component-container']} ${styles[copyPlacement]} grid-parent grid-50 tablet-grid-100 tabletmini-grid-100 mobile-grid-100`}>
                <Copy {...passThroughProps} />
            </div>
        </div>
    );
};

export default TextImage;