// Dependencies
import React from 'react';
import { spring, Motion} from 'react-motion';
let d3 = require('d3-interpolate');

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

const InfoSlider = ({ data, index, prevIndex, action, handleClick }) => {
    InfoSlider.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    const height = 350/data.length;
    const width = 3;
    const radius = 20;
	InfoSlider.circleBase = {
		position: 'relative',
		width: radius,
		height: radius,
		borderRadius: '50%',
		margin: '0 auto',
	};
	InfoSlider.circlePrev = {
		...InfoSlider.circleBase,
		backgroundColor: '#00adef'
	}
	InfoSlider.circleNext = {
		...InfoSlider.circleBase,
		backgroundColor: 'white'
	}
	InfoSlider.extender = {
		position: 'absolute',
		width: width,
		top: 0,
		margin: '0 auto',
		left: 0,
		right: 0,
		backgroundColor: '#00adef'
	}
	InfoSlider.extenderStatic = {
		position: 'absolute',
		width: width,
		top: 0,
		margin: '0 auto',
		left: 0,
		right: 0,
		height: ((data.length - 1) * height) + 1,
		backgroundColor: 'white'
	}
	InfoSlider.circleComponent = ({index, style}) => {
		return (
			<div style={{position: 'relative', height: height}}>
				<div onClick={handleClick.bind(null, index)} style={style}></div>
			</div>
		)
	}
	InfoSlider.interpolateColor = d3.interpolateHclLong('#FFFFFF', '#00adef');
    return (
        <div className={styles.sliderContainer}>
	        <div className={styles.sliderCenter}>
		        <div style={InfoSlider.extenderStatic}></div>
		        {action === 'INC' && index === 0 ? <Motion
			        defaultStyle={{backgroundColor: 1}}
			        style={{backgroundColor: spring( 0, {stiffness: 60, dampness: 30})}}
		        >
			        {interpolatingStyle => {
				        return (
					        <div style={{
						        ...InfoSlider.extenderStatic,
						        backgroundColor: InfoSlider.interpolateColor(interpolatingStyle.backgroundColor)
					        }}>
					        </div>
				        )
			        }}
		        </Motion> : null}
		        {action === 'DEC' && index === data.length - 1 ? <Motion
			        defaultStyle={{backgroundColor: 0}}
			        style={{backgroundColor: spring( 1, {stiffness: 60, dampness: 30})}}
		        >
			        {interpolatingStyle => {
				        return (
					        <div style={{
						        ...InfoSlider.extenderStatic,
						        backgroundColor: InfoSlider.interpolateColor(interpolatingStyle.backgroundColor)
					        }}>
					        </div>
				        )
			        }}
		        </Motion> : null}
		        {(index !== 0 || index === 0 && action === 'DEC') && (index !== data.length - 1 || index === data.length - 1 && action === 'INC') ? <Motion
			        defaultStyle={{
				        height: action === 'INC' ? height * (prevIndex) : (height * (prevIndex)) + 1
			        }}
			        style={{
				        height: spring(action === 'INC' ? (height * index) + 1 : height * index)
			        }}
		        >
			        {interpolatingStyle => {
				        return (
					        <div style={{
						        height: interpolatingStyle.height,
						        ...InfoSlider.extender
					        }}>
					        </div>
				        )
			        }}
		        </Motion> : null}

		        {data.map((element, arrayIndex) => {
		            if (index === 0 && arrayIndex === 0 && action === null) {
				        return (
					        <InfoSlider.circleComponent index={arrayIndex} style={InfoSlider.circlePrev} />
				        )
			        } else if (arrayIndex < index && action === 'INC' || arrayIndex <= index && action === 'DEC') {
		                return (
					        <InfoSlider.circleComponent index={arrayIndex} style={InfoSlider.circlePrev} />
				        )

			        } else if (arrayIndex === index && action === 'INC' || arrayIndex === index + 1 && action === 'DEC') {
		                return (
			                <Motion
						        defaultStyle={{backgroundColor: action === 'INC' ? 0 : 1}}
						        style={{backgroundColor: spring(action === 'INC' ? 1 : 0, {stiffness: 60, dampness: 30})}}
					        >
						        {interpolatingStyle => {
						            return (
							            <InfoSlider.circleComponent index={arrayIndex} style={{
								        backgroundColor: InfoSlider.interpolateColor(interpolatingStyle.backgroundColor),
							        ...InfoSlider.circleBase}} />
						            )
						        }}
					        </Motion>
				        )
			        } else {
				        return (
					        <InfoSlider.circleComponent index={arrayIndex} style={InfoSlider.circleNext} />
				        )
			        }
		        })}
	        </div>
        </div>
    );
};

export default InfoSlider;