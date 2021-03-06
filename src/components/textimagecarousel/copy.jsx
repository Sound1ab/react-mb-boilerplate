// Dependencies
import React from 'react';

// Stylesheets
import styles from './textimagecarousel.css';

const Copy = ({ title, copy, url }) => {
    Copy.propTypes = {
        title: React.PropTypes.string.isRequired,
        copy: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
    };
    return(
        <div className={`${styles['copyPadding']}`}>
            <hr className={`${styles['spacer']}`}/>
            <h1>{title}</h1>
            <p>{copy}</p>
            <a href={url} className={`${styles['']}`}>
                <button className="cta blue">Find out more</button>
            </a>
        </div>
    );
};

export default Copy;