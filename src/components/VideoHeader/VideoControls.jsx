// Dependencies
import React from 'react';

// Stylesheets
import styles from './VideoHeader.css';

const VideoControls = ({ sound, fullscreen }) => {
    VideoControls.propTypes = {
        updateSound: React.PropTypes.func.isRequired,
        sound: React.PropTypes.bool.isRequired,
        fullscreen: React.PropTypes.number.isRequired
    };
     let onClick = (el, sound) => {
         const { updateSound } = this.props;
         sound ? el.props.setVolume(1) : el.props.setVolume(0);
         sound ? el.props.unmute() : el.props.mute();
         updateSound();
     };
    let unmute = <div className={`${styles['videoControlBox']} ${styles['unmute']} ${styles['volume']} hide-on-mobile hide-on-tabletmini`}
                      onClick={onClick.bind(null, this, sound)}></div>;
    let mute = <div className={`${styles['videoControlBox']} ${styles['mute']} ${styles['volume']} hide-on-mobile hide-on-tabletmini`}
                    onClick={onClick.bind(null, this, sound)}></div>;
    return (
        <div>
            {sound ? mute : unmute}
            <div className={`${styles['videoControlBox']} ${styles['mute']} ${styles['fullscreen']} hide-on-mobile hide-on-tabletmini`}
                 onClick={fullscreen}>
            </div>
        </div>
    );
};

export default VideoControls;