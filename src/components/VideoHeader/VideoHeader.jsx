// Dependencies
import React from 'react';
import { default as Video } from 'react-html5video';

// Components
import VideoControls from './VideoControls';
import OverlayCustom from './OverlayCustom';

// Stylesheets
import styles from './VideoHeader.css';


export default class VideoHeader extends React.Component {
    constructor (props) {
        super (props);
        this.state = ({
            sound: true,
            width: null
        });
        this.updateSound = this.updateSound.bind(this);
    }
    updateSound = () => {
        const newSound = !this.state.sound;
        this.setState({
            sound: newSound
        });
    }
    updateDimensions = () => {

        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            newWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        this.setState({
            width: newWidth
        });
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    render () {
        const { sound } = this.state;
        if(this.state.width > 680){
            return (
                <div className={`${styles['container']} noSelect`}>
                    <Video controls autoPlay loop muted
                           poster="http://sourceposter.jpg"
                           width="1000px"
                           onCanPlayThrough={() => {
                               // Do stuff
                           }}>
                        <source src={require('../../assets/video/Citan.mp4')} type="video/mp4" />
                        <VideoControls sound={sound} updateSound={this.updateSound}  />
                    </Video>
                </div>
            );
        }
        else if(this.state.width <= 680){
            return (
                <div className={`${styles['container']} noSelect`}>
                    <Video controls loop muted
                           poster="http://sourceposter.jpg"
                           width="1000px"
                           onCanPlayThrough={() => {
                               // Do stuff
                           }}>
                        <source src={require('../../assets/video/Citan.mp4')} type="video/mp4" />
                        <OverlayCustom />
                    </Video>
                </div>
            );
        }
    }
}