// Dependencies
import React from 'react';
import TweenMax from 'gsap';

// Stylesheets
import styles from './FullwidthImageScroller.css';

export default class FadingBackgroundImage extends React.Component {
    static propTypes = {
        imgSrc: React.PropTypes.string.isRequired,
        slideStyle: React.PropTypes.bool
    }

    componentWillMount() {
        this.slideStyle = this.props.slideStyle;
    }

    componentDidEnter(callback) {
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 0, position: 'relative'}, {
            y: 0,
            opacity: 1,
            onComplete: callback
        });
    }

    componentWillLeave(callback) {
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 1, top: 0, left: 0, position: 'absolute'}, {
            y: 0,
            opacity: 0,
            onComplete: callback
        });
    }

    render() {
        const {imgSrc} = this.props;
        return (
            <img className={`${styles['slider-image']}`} src={imgSrc} ref={node => this.node = node}/>
        );
    }
}