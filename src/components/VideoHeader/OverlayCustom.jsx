// Dependencies
import React from 'react';

// Stylesheets
import styles from './VideoHeader.css';

const OverlayCustom = ({ paused, play }) => {
    OverlayCustom.propTypes = {
        paused: React.PropTypes.func,
        play: React.PropTypes.func,
    };
    let hidden = '';
    if(!paused){
        hidden = 'hidden';
    }
    return(
        <div className={`${styles['overlay']} ${styles[hidden]}`} onClick={play}></div>
    );
};

export default OverlayCustom;