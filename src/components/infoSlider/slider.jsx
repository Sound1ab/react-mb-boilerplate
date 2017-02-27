// Dependencies
import React from 'react';
import { spring, Motion} from 'react-motion';

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

const Slider = ({ index, action, length }) => {
    Slider.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    Slider.container = {
    	position: 'relative',
	    width: 100
    }
	Slider.baseStyle = {
        position: 'relative',
    	width: 10,
	    backgroundColor: 'blue',
		margin: '0 auto',
    }
    Slider.dumbStyle = {
	    ...Slider.baseStyle,
	    height: 50
    };
	Slider.circleBase = {
		position: 'relative',
		width: 30,
		height: 30,
		borderRadius: '50%',
		backgroundColor: 'blue',
		margin: '0 auto',
		top: -1
	};
	Slider.circleDumb = {
		...Slider.circleBase,
		opacity: 1
	}
	Slider.extender = {
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0 auto',
		height: 80,
		width: 10,
		backgroundColor: 'blue'
	}
    let componentArray = [];
	let springObject = {};
	let animation = 1;
	console.log('index', index);
	console.log('length', length-1);
	if (action === 'INC' && index === 0) {
		console.log('restart from top');
		animation = 0;
	} else if (action === 'DEC' && index === length-1) {
		console.log('restart from bottom');
		animation = 0;
	}
	for (let i = action === 'INC' ? 1 : 0 ; i < index; i++) {
		let extenderClass;
		if (i === index) {
			return;
		}
		if (action === 'DEC' && i === index - 1) {
			extenderClass = 'extender';
		}
		componentArray = [...componentArray,
			<div>
				<div className={`${styles[extenderClass]}`} style={Slider.extender}></div>
				<div style={Slider.dumbStyle}></div>
				<div style={Slider.circleDumb}></div>
			</div>
		]

	}
	if (action === 'INC') {
		springObject.heightStart = 0;
		springObject.heightEnd = 50;
		springObject.opacityStart = 0;
		springObject.opacityEnd = 1;
	} else if (action === 'DEC')  {
		springObject.heightStart = 50;
		springObject.heightEnd = 0;
		springObject.opacityStart = 1;
		springObject.opacityEnd = 0;
	}
    return (
        <div style={Slider.container}>
	        {componentArray}
	        { animation ? <Motion
		        defaultStyle={{
		        	height: springObject.heightStart,
			        opacity: springObject.opacityStart
		        }}
		        style={{
		        	height: spring(springObject.heightEnd),
			        opacity: spring(springObject.opacityEnd)
		        }}
	        >
		        {interpolatingStyle => (
		            <div>
		                <div style={{
		                    height: interpolatingStyle.height,
			                ...Slider.baseStyle}}></div>
				        <div style={{
				        	opacity: interpolatingStyle.opacity,
					        ...Slider.circleBase}}></div>
		            </div>
		        )}
	        </Motion> : null}
        </div>
    );
};

export default Slider;