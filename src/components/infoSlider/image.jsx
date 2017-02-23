// Dependencies
import React from 'react';
import { Motion, spring } from 'react-motion';

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

export default class  extends React.Component {
    constructor(){
        super();
        this.state = {
			animate: false
        }
        this.style = {};
    }
    static propTypes = {

    }
    componentWillUnmount(){
        this.style = {
			x:
        }
    }
    // componentWillMount(){
	 //    this.style = {
		//     borderRadius: spring('50%')
	 //    }
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
	square = () => {
	    return {
			borderRadius: spring('0%')
	    }
	}
	circle = () => {
		return {
			borderRadius: spring('50%')
		}
	}
	animate = () => {
    	this.setState({
    		animate: !this.state.animate
	    })
	}
    render () {
    	const { src } = this.props;
    	let style = this.state.animate ? this.square() : this.circle();
    	console.log('fire');
        return (
	        <div className={styles.imgContainer}>
		        <div className={styles.imgPadding}>
			        <Motion defaultStyle={{x: 0}} style={{x: spring(1)}}>
				        {x =>
			                <img style={{opacity: `${x.x}`}}
			                     className={styles.circle}
			                     src={src}
			                     width="100%" />
				        }

			        </Motion>
		        </div>
		        <button onClick={this.animate}>animate</button>
	        </div>
        );
    }
}