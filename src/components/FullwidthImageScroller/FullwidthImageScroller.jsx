// Dependencies
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// Components
import Copy from './Copy';
import FadingBackgroundImage from './FadingBackgroundImage';
import Slider from './Slider';

// Stylesheets
import styles from './FullwidthImageScroller.css';

// Data
import Data from './data';

export default class FullwidthImageScroller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
            index: 0,
            width: null
        };
        this.incrementSlide = this.incrementSlide.bind(this);
        this.decrementSlide = this.decrementSlide.bind(this);
        this.moveToSlide = this.moveToSlide.bind(this);
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
    };

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    incrementSlide = () => {
        if (this.state.index === this.state.data.length - 1) {
            this.setState({
                index: 0
            });
        } else {
            let newState = this.state.index + 1;
            this.setState({
                index: newState
            });
        }

    }

    decrementSlide = () => {
        if (this.state.index === 0) {
            this.setState({
                index: this.state.data.length - 1
            });
        } else {
            let newState = this.state.index - 1;
            this.setState({
                index: newState
            });
        }
    }

    moveToSlide = (sliderIndex) => {
        this.setState({
            index: sliderIndex
        });
    }
    render() {
        const {data, index, width} = this.state;
        let height = null;
        if (width > 769) {
            height = null;
        } else {
            height = width / 2;
        }
        return (
            <div className={`${styles['container']} grid-container grid-parent`}>
                <div className={`${styles['img-container']}`} style={{height: height}}>
                    <ReactTransitionGroup>
                        {data.map((element, arrayIndex) => {
                            if (arrayIndex === index) {
                                return (
                                    <FadingBackgroundImage key={index} imgSrc={data[index].img}/>
                                );
                            }
                        })}
                    </ReactTransitionGroup>
                </div>
                <div
                    className={`${styles['components']} grid-parent grid-40 push-60 tablet-grid-100 tabletmini-grid-100 mobile-grid-100`}>
                    <Copy {...this.state} />
                </div>
                <div>
                    <div className={`${styles['slider-scroll']} hide-on-mobile hide-on-tabletmini hide-on-tablet`}>
                        <div className={`${styles['dec']}`} onClick={this.decrementSlide.bind(null)}></div>
                        <div className={`${styles['inc']}`} onClick={this.incrementSlide.bind(null)}></div>
                    </div>
                </div>
                <div className={`${styles['slider-component-container']} `}>
                    <Slider data={data}
                            index={index}
                            moveToSlide={this.moveToSlide}/>
                </div>
            </div>
        );
    }
}