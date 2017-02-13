// Dependencies
import React from 'react';

// Components
import Carousel from './components/carousel/carousel';
import Stickynav from './components/stickynav/stickynav';
import BasicText from './components/BasicText/BasicText';
import TextImageCarousel from './components/textimagecarousel/textimagecarousel';
import Scroller from './components/FullwidthImageScroller/FullwidthImageScroller';
import TabbedContent from './components/TabbedContent/TabbedContent';
import VideoHeader from './components/VideoHeader/VideoHeader';
import TextImage from './components/TextImage/TextImage';
import NextStep from './components/NextStep/NextStep';

// Data
import BasicTextData from './components/BasicText/data1';
import TextImageCarouselData from './components/textimagecarousel/data';
import TextImageData from './components/TextImage/data';

export default class App extends React.Component {
    constructor(){
        super();
        this.nodes = new Map();
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

    render(){
        return(
            <div className={`grid-container grid-parent`}>
                <Stickynav computeAnchors={this.computeAnchors.bind(this)} />
                <div ref={anchorPoint => this.nodes.set(0, anchorPoint)} />
                <VideoHeader />
                <div ref={anchorPoint => this.nodes.set(1, anchorPoint)} />
                <Carousel />
                <div ref={anchorPoint => this.nodes.set(2, anchorPoint)} />
                <Scroller />
                <div ref={anchorPoint => this.nodes.set(3, anchorPoint)} />
                <TabbedContent />
                <div ref={anchorPoint => this.nodes.set(4, anchorPoint)} />
                <TextImage data={TextImageData} index={0} copyPlacement={'left'}/>
                <div ref={anchorPoint => this.nodes.set(5, anchorPoint)} />
                <BasicText data={BasicTextData} index={0} color={'black'} />
                <div ref={anchorPoint => this.nodes.set(6, anchorPoint)} />
                <TextImageCarousel data={TextImageCarouselData} index={0} color={0} reverse={0} />
                <div ref={anchorPoint => this.nodes.set(7, anchorPoint)} />
                <NextStep />
            </div>
        );
    }
}

