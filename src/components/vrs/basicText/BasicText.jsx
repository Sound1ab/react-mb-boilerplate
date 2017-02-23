// Dependencies
import React from 'react';

// Stylesheets
import styles from './BasicText.css';

const BasicText = ({ title, copy, color }) => {
     BasicText.propTypes = {
         title: React.PropTypes.string.isRequired,
         copy: React.PropTypes.string.isRequired,
        color: React.PropTypes.string.isRequired
    };
    let createCopyMarkupForH1 = () => { return {__html: `${title}`}; };
    let createCopyMarkupForP = () => { return {__html: `${copy}`}; };
    return (
        <div className={`${styles['container']} ${styles[color]}`}>
            <hr className={styles.spacer} />
            <h1 dangerouslySetInnerHTML={createCopyMarkupForH1()}></h1>
            <p dangerouslySetInnerHTML={createCopyMarkupForP()}></p>
        </div>
    );
};

export default BasicText;
