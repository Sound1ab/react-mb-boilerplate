// Dependencies
import React from 'react';
import { Motion, spring, TransitionMotion } from 'react-motion';

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

export default class  extends React.Component {
    constructor(){
        super();
        this.state = {
	        height: null
	    }
    }
    static propTypes = {

    }
    render () {
    	const { src, uniqueKey } = this.props;
	    const baseStyle = {
		    borderRadius: '50%'
	    }
        return (
            <img
                style={{
                    ...baseStyle
                }}
                src={src}
                />
        );
    }
}