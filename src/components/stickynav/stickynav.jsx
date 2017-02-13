// Dependencies
import React from 'react';
import TweenMax from 'gsap';

// Components
import Dropdown from './DropDown/Dropdown';
import DesktopNav from './desktop/desktopnav';

// Stylesheets
import styles from './stickynav.css';

export default class Stickynav extends React.Component {
    static propTypes = {
        computeAnchors: React.PropTypes.func.isRequired,
    }
    constructor(props){
        super(props);
        this.state = {
            mobileWidthDetected: 0,
            pageYOffset: 0,
            margin: 0,
            allAnchors: [],
            navHeight: 60,
        };
    }
    //sticky nav stick control
    stickynavPositionUpdate = (pageYOffset, margin) => {
        var that = this;
        if(pageYOffset < this.stickyPosition + this.state.navHeight + margin){
            if(this.timer !== null) {
                clearTimeout(this.timer);
            }
            this.emptyNode.style.display = 'none';
            this.node.style.position = 'relative';
            this.node.style.top = 0;

        }
        else if(pageYOffset >= this.stickyPosition + this.state.navHeight + margin){
            this.emptyNode.style.display = 'block';
            this.node.style.position = 'absolute';
            this.node.style.width = '100%';
            this.node.style.maxWidth = 1000;
            this.node.style.zIndex = 999999999;
            this.node.style.top = pageYOffset - 9999;
            if(this.timer !== null) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(function() {
                that.node.style.top = pageYOffset - margin;
                that.node.style.position = 'absolute';
                TweenMax.fromTo(that.node, 0.5,
                    {y: 0, opacity: 0.1},
                    {y: 0, opacity: 1}
                );
            }, 300);
        }
    }

    receiveMessage = (event) => {
        this.setState({
            pageYOffset: event.data,
            margin: 117
        });
        this.stickynavPositionUpdate(event.data, 117);
    }

    handleScroll = () => {
        this.setState({
            pageYOffset: window.pageYOffset,
            margin: 0
        });
        this.stickynavPositionUpdate(window.pageYOffset, 0);
    }

    //sticky nav scrolling
    scrollTo = (element, duration) => {
        var e = document.documentElement;
        if (e.scrollTop === 0) {
            var t = e.scrollTop;
            ++e.scrollTop;
            e = t + 1 === e.scrollTop-- ? e : document.body;
        }
        this.scrollToC(e, e.scrollTop, element, duration);
    }

    scrollToC = (element, from, to, duration) => {
        if (duration <= 0) return;

        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;

        this.scrollToX(element, from, to, 0, 1 / duration, 20, this.easeInOutCuaic);
    }

    scrollToX = (element, xFrom, xTo, t01, speed, step, motion) => {
        let that = this;
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
        t01 += speed * step;

        setTimeout(function () {
            that.scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }

    easeInOutCuaic = (t) => {
        t /= 0.5;
        if (t < 1)return t * t * t / 2;
        t -= 2;
        return (t * t * t + 2) / 2;
    }

    // width control
    updateDimensions = () => {
        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            newWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        if(this.widthTimer !== null) {
            clearTimeout(this.widthTimer);
        }
        if(this.timer !== null) {
            clearTimeout(this.timer);
        }
        this.emptyNode.style.display = 'block';
        this.node.style.position = 'relative';
        this.stickyPosition = this.emptyNode.offsetTop;
        this.handleScroll();

        if(newWidth < 600){
            this.setState({
                mobileWidthDetected: 1
            });
        } else {
            this.setState({
                mobileWidthDetected: 0
            });
        }


    }

    handleClick = (index) => {
        let currentAnchor;
        this.setState({
            allAnchors: this.props.computeAnchors()
        });
        if(!isNaN(parseFloat(index)) && isFinite(index)){
            currentAnchor = this.props.computeAnchors()[index];
        } else {
            currentAnchor = this.props.computeAnchors()[index.target.id];
        }
        if(this.urlTest){
            let anchorData = {
                type: 'anchor',
                anchorPoint: currentAnchor - this.state.navHeight + 117
            };
            parent.window.postMessage(anchorData, '*');
        } else {
            if(currentAnchor){
                this.scrollTo(currentAnchor - this.state.navHeight, 1200);
            }
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({
                allAnchors: this.props.computeAnchors()
            });
        }, 1000);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    componentDidMount(){
        window.addEventListener('resize', this.updateDimensions);
        this.timer = null;
        this.widthTimer = null;
        let url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
        this.urlTest = url.includes('www.mercedes-benz.co.uk');
        if (this.urlTest){
            window.addEventListener('message', this.receiveMessage);
        } else {
            window.addEventListener('scroll', this.handleScroll);
        }
        setTimeout(() => {
            this.emptyNode.style.display = 'block';
            this.node.style.position = 'relative';
            this.stickyPosition = this.emptyNode.offsetTop;
            this.updateDimensions();
            if(this.urlTest){
                this.receiveMessage();
            } else {
                this.handleScroll();
            }
        }, 100);
    }

    render(){
        return(
            <div>
                <div className={`${styles['empty-node']}`} ref={(node) => this.emptyNode = node}></div>
                <div ref={(node) => this.node = node}>
                    {this.state.mobileWidthDetected ? <Dropdown handleClick={this.handleClick}/> : <DesktopNav handleClick={this.handleClick} {...this.state}/>}
                </div>
            </div>
        );
    }
}

