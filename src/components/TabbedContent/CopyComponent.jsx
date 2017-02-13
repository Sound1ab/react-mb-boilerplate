// Dependencies
import React from 'react';
import TweenMax from 'gsap';

// Stylesheets
import styles from './TabbedContent.css';

export default class CopyComponent extends React.Component {
    static propTypes = {
        data: React.PropTypes.object.isRequired,
        width: React.PropTypes.number.isRequired,
    }
    componentDidEnter(callback) {
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 0, position: 'relative'}, {y: 0, opacity: 1, onComplete: callback});
    }
    componentWillLeave(callback) {
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 1, top: 0, left: 0, position: 'absolute'}, {y: 0, opacity: 0, onComplete: callback});
    }
    render () {
        const { data, width } = this.props;
        function createCopyMarkup() { return {__html: `${data.copy}`}; }
        if(width > 680){
            return (
                <div className={`${styles['copy-container']}`} ref={node => this.node = node}>
                    <div className={`${styles['element-container']}`}>
                        <img src={data.img} />
                    </div>
                    <div className={`${styles['element-container']} ${styles['copy']}`}>
                        <p className={`${styles['heading']}`}>{data.title}</p>
                        <p dangerouslySetInnerHTML={createCopyMarkup()}></p>
                    </div>
                </div>
            );
        }
        else if(width <= 680){
            return (
                <div className={`${styles['copy-container']}`} ref={node => this.node = node}>
                    <div className={`${styles['element-container']}`}>
                        <img src={data.img} />
                    </div>
                    <div className={`${styles['element-container']} ${styles['copy']}`}>
                        <p className={`${styles['heading']}`}>{data.title}</p>
                        <p dangerouslySetInnerHTML={createCopyMarkup()}></p>
                    </div>
                </div>
            );
        }
    }
}