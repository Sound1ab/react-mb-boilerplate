// Dependencies
import React from 'react';
import { TransitionMotion, spring } from 'react-motion';

import styles from './infoSlider.css';

const willEnter = () => ({
	opacity: 0,
});

const willLeave = () => ({
	opacity: spring(0),
});

const getStyles = () => ({
	opacity: spring(1),
});

const didLeave = () => {
	console.log('fire');
}

const Transition = ({ children: child, index, padding, cssClass = '' }) => {
    Transition.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    return (
	    <TransitionMotion
		    styles={ [{
			    key: index,
			    style: getStyles(),
			    data: { child }
		    }] }
		    willEnter={ willEnter }
		    willLeave={ willLeave }
		    didLeave={ didLeave }
	    >
		    { (interpolated) => {
		    	return (
				    <div>
					    { interpolated.map(({ key, style, data }) => {
						    return (
								    <div
									    key={ `${key}-transition` }
									    className={`${styles[cssClass]}`}
									    style={ {
										    opacity: style.opacity,
										    position: 'absolute',
										    top: '50%',
										    transform: 'translateY(-50%)',
										    padding: padding,
										    left: 0,
										    right: 0,
									    } }
								    >
									    { data.child }
								    </div>
							    )
					         })
					    }
				    </div>
			    )
		    }
		    }
	    </TransitionMotion>
    );
};

export default Transition;