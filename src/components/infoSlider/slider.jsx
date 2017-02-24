// Dependencies
import React from 'react';
import { spring, Motion} from 'react-motion';

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

const Slider = ({  }) => {
    Slider.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
	Slider.baseStyle = {
        position: 'relative',
    	width: 10,
	    backgroundColor: 'blue',
    }
    return (
        <div>
	        <Motion
		        defaultStyle={{
		        	height: 0
		        }}
		        style={{
		        	height: spring(50)
		        }}
	        >
		        {interpolatingStyle => (
	                <div style={{...interpolatingStyle, ...Slider.baseStyle}}></div>
		        )}
	        </Motion>
        </div>
    );
};

export default Slider;