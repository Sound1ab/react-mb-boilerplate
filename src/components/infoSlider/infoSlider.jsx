// Dependencies
import React from 'react';
import ReactHight from 'react-height';

// Componenents
import Image from './image';
import Copy from './copy';
import Slider from './slider';
import Transition from './transition';
import TextImageCarousel from './carousel/carousel'

// Stylesheets
import styles from './infoslider.css';

// Data
import Data from './data';

export default class InfoSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        	prevIndex: 0,
			index: 0,
	        action: null
        }
    }
    static propTypes = {

    }
    incrementIndex = () => {
	    const { index } = this.state;
        this.setState({
        	prevIndex: this.state.index,
            index: index === Data.length - 1 ? 0 : index + 1,
	        action: 'INC'
        })
    }
	decrementIndex = () => {
        const { index } = this.state;
		this.setState({
			prevIndex: this.state.index,
			index: index === 0 ? Data.length - 1 : index - 1,
			action: 'DEC'
		})
	}
	handleClick = (index) => {
		this.setState({
			prevIndex: this.state.index,
			index,
			action: index > this.state.index ? 'INC' : 'DEC'
		})
	}
	supplyCopyComponents = () => {
		return Data.reduce((returnValue, element, index) => {
			returnValue = [...returnValue,

				<Copy
				title={element.title}
				copy={element.copy}
				index={index}
				incrementIndex={this.incrementIndex}
				decrementIndex={this.decrementIndex} />];
			return returnValue;
		}, []);
	}
	supplyImageComponents = () => {
		return Data.reduce((returnValue, element, index) => {
			returnValue = [...returnValue, <Image
				ref={node => this.node = node}
				src={element.img}
				uniqueKey={index}/>];
			return returnValue;
		}, []);
	}
    render () {
    	const { currentDevice } = this.props;
        return (
	        <div>
		        { currentDevice === 'desktop' ?
		            <div className={styles.container}>
			            <div className={styles.imgContainer}>
				            <Transition index={this.state.index} padding={'0 0 0 40px'} cssClass={'fadeImage'}>
					            {this.supplyImageComponents()[this.state.index]}
				            </Transition>
			            </div>
			            <Slider
				            {...this.state}
				            data={Data}
				            handleClick={this.handleClick} />
			            <div className={styles.copyContainer}>
				            <Transition index={this.state.index} padding={'0 50px 0 0'} cssClass={'fadeCopy'}>
					            {this.supplyCopyComponents()[this.state.index]}
				            </Transition>
			            </div>
		            </div> : null
		        }
		        { currentDevice === 'mobile' || currentDevice === 'tablet' ?
			        <TextImageCarousel /> : null
		        }
	        </div>
        );
    }
}