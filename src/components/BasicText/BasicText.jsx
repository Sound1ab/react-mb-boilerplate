// Dependencies
import React from 'react';

// Stylesheets
import styles from './BasicText.css';

const BasicText = ({ data, index, color }) => {
     BasicText.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        color: React.PropTypes.string.isRequired
    };

    let createCopyMarkupForH1 = () => { return {__html: `${data[index].headline}`}; };
    let createCopyMarkupForP = () => { return {__html: `${data[index].copy}`}; };
    return (
        <div className={`${styles['container']} ${styles[color]}`}>
            <hr className={styles.spacer} />
            <h1 dangerouslySetInnerHTML={createCopyMarkupForH1()}></h1>
            <p dangerouslySetInnerHTML={createCopyMarkupForP()}></p>
        </div>
    );
};

export default BasicText;
