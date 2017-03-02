// Dependencies
import React from 'react';
let MobileDetect = require('mobile-detect')

// Components
import CTAs from './components/ctas/ctas';
import Carousel from './components/carousel/carousel';
import Stickynav from './components/stickynav/stickynav';
import BasicText from './components/BasicText/BasicText';
import TextImageCarousel from './components/textimagecarousel/textimagecarousel';
import Scroller from './components/FullwidthImageScroller/FullwidthImageScroller';
import TabbedContent from './components/TabbedContent/TabbedContent';
import VideoHeader from './components/VideoHeader/VideoHeader';
import TextImage from './components/TextImage/TextImage';
import NextStep from './components/NextStep/NextStep';
import Table from './components/table/tableContainer';
import VRS from './components/vrs/container';
import InfoSlider from './components/infoSlider/infoSlider'

// Data
import BasicTextData from './components/BasicText/data1';
import TextImageCarouselData from './components/textimagecarousel/data';
import TextImageData from './components/TextImage/data';

// Stylesheets
import styles from './app.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.nodes = new Map();
        this.state = {
            device: 0
        }
    }

    componentDidMount() {
	    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		    this.setState({
			    width: null
		    })
	    }
    }

    computeAnchors = () => {
        let anchorArray = [];
        Array.from(this.nodes.values())
            .filter(node => node != null)
            .forEach((node) => {
                anchorArray = [...anchorArray, node.offsetTop];
            });
        return anchorArray;
    }

	updateDimensions = () => {

		let w = window,
			d = document,
			documentElement = d.documentElement,
			body = d.getElementsByTagName('body')[0],
			width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
		if (width > 0 && width <= 600) {
		    this.setState({
		        device: 'mobile'
            })
        }
		if (width > 600 && width < 1000) {
            console.log(width);
			this.setState({
				device: 'tablet'
			})
		}
		if (width >= 1000) {
			this.setState({
				device: 'desktop'
			})
		}
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

    render() {

        return (
            <div className={styles.container}>
                <InfoSlider currentDevice={this.state.device} />
                {/*<VRS color={0} reverse={0}/>*/}
                {/*<Table />*/}
                {/*<Stickynav computeAnchors={this.computeAnchors.bind(this)}/>*/}
                {/*<CTAs color={1} />*/}
                {/*<div ref={anchorPoint => this.nodes.set(0, anchorPoint)}/>*/}
                {/*<VideoHeader />*/}
                {/*<div ref={anchorPoint => this.nodes.set(1, anchorPoint)}/>*/}
                {/*<Carousel />*/}
                {/*<div ref={anchorPoint => this.nodes.set(2, anchorPoint)}/>*/}
                <Scroller />
                {/*<div ref={anchorPoint => this.nodes.set(3, anchorPoint)}/>*/}
                {/*<TabbedContent />*/}
                {/*<div ref={anchorPoint => this.nodes.set(4, anchorPoint)}/>*/}
                {/*<TextImage data={TextImageData} index={0} color={0} reverse={0}/>*/}
                {/*<div ref={anchorPoint => this.nodes.set(5, anchorPoint)}/>*/}
                {/*<BasicText data={BasicTextData} index={0} color={'black'}/>*/}
                {/*<div ref={anchorPoint => this.nodes.set(6, anchorPoint)}/>*/}
                {/*<TextImageCarousel data={TextImageCarouselData} index={0} color={0} reverse={0}/>*/}
                {/*<div ref={anchorPoint => this.nodes.set(7, anchorPoint)}/>*/}
                {/*<NextStep />*/}
            </div>
        );
    }
}

