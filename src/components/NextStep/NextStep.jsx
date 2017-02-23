// Dependencies
import React from 'react';

// Stylesheets
import styles from './NextStep.css';

const NextStep = () => {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Discover the story behind our latest commercial</h2>
                </div>
                <div className={styles.ctaContainer}>
                    <a href='#' target='_blank' className={styles.cta}>Explore</a>
                </div>
            </div>
        </div>
    );
};

export default NextStep;