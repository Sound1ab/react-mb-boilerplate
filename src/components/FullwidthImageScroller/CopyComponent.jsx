// Dependencies
import React from 'react';
import TweenMax from 'gsap';

// Stylesheets
import styles from './FullwidthImageScroller.css';

export default class CopyComponent extends React.Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        width: React.PropTypes.number.isRequired,
        slideStyle: React.PropTypes.bool
    };

    componentWillMount() {
        this.slideStyle = this.props.slideStyle;
    }

    componentDidEnter(callback) {
        if (this.props.width > 789) {
            TweenMax.fromTo(this.node, 0.5, {y: 0, opacity: 0.1}, {
                y: 0,
                opacity: 1,
                onComplete: callback
            });
        } else if (this.props.width <= 789) {
            TweenMax.fromTo(this.node, 0.5, {y: 0, opacity: 0.1}, {
                y: 0,
                opacity: 1,
                onComplete: callback
            });
        }
    }

    componentWillLeave(callback) {
        TweenMax.fromTo(this.node, 0.5, {y: 0, opacity: 1, top: 0, left: 0, position: 'absolute'}, {
            y: 0,
            opacity: 0.1,
            onComplete: callback
        });
    }

    render() {
        const {data} = this.props;

        return (
            <div className={`${styles['active']}`} ref={node => this.node = node}>
                <hr className={`${styles['spacer']}`}/>
                <h2>{data.title}</h2>
                <p>{data.copy}</p>
                <a href={data.url} className={`${styles['pointer']}`}>
                    <button className="cta blue">Find out more</button>
                </a>
            </div>
        );
    }
}