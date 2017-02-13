// Dependencies
import React from 'react';

// Stylesheets
import styles from './NextStep.css';

const NextStep = () => {
    return(
        <div>
            <div className={`${styles['container']} grid-container grid-parent`}>
                <div className={`grid-parent grid-100`}>
                    <h2>Discover the story behind our latest commercial</h2>
                </div>
                <div className={`grid-parent grid-100`}>
                    <a href='#' target='_blank' className={`${styles['cta']} cta blue`}>Explore</a>
                </div>
            </div>
        </div>
    );
};

export default NextStep;