// Dependencies
import React from 'react';

// Componenents
import Image from './image';
import Copy from './copy';
import Slider from './slider';

// Stylesheets
import styles from './infoslider.css';

// Data
import Data from './data';

export default class InfoSlider extends React.Component {
    constructor(){
        super();
        this.state = {
			index: 0,
	        action: null
        }
    }
    static propTypes = {

    }
    incrementIndex = () => {
	    const { index } = this.state;
	    let newIndexState = index === Data.length - 1 ? 0 : index + 1;
        this.setState({
            index: newIndexState,
	        action: 'INC'
        })
    }
	decrementIndex = () => {
        const { index } = this.state;
        let newIndexState = index === 0 ? Data.length - 1 : index - 1;
		this.setState({
			index: newIndexState,
			action: 'DEC'
		})
	}
    render () {
    	const { index } = this.state;
        return (
            <div>
	            {Data.map((element, arrayIndex) => {
	            	if(index === arrayIndex){
	            		return (
				            <div className={styles.container}>
		                        <Image src={element.img}
		                               uniqueKey={this.state.index}/>
					            {}
					            <Copy
                                    title={element.title}
                                    copy={element.copy}
                                    index={index}
                                    incrementIndex={this.incrementIndex}
                                    decrementIndex={this.decrementIndex} />
					            {}
					            <Slider {...this.state} length={Data.length}/>
				            </div>
			            )
		            }
	            })}
            </div>
        );
    }
}