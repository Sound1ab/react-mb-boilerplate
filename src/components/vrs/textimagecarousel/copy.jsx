// Dependencies
import React from 'react';

// Stylesheets
import styles from './textimagecarousel.css';

const Copy = ({ copy, textHighlight }) => {
    Copy.propTypes = {
        title: React.PropTypes.string.isRequired,
        copy: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    };
    let textHighlightClass;
    if(textHighlight){
        textHighlightClass = 'blue';
    }
    return(
            <span className={`${styles[textHighlightClass]}`}>{copy}</span>
    );
};

export default Copy;