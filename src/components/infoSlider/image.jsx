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
        	mount: false
	    }
	    this.mount = 1;
    }
    static propTypes = {

    }
    // componentWillMount(){
    // 	console.log('mounting');
    // 	this.mount = 1;
    // }
    componentWillUnmount(){
    	console.log('unmounting');
	    this.mount = !this.mount
    }
    render () {
    	console.log(this.mount);
    	const { src, uniqueKey } = this.props;
        return (
	        <div className={styles.imgContainer}>
		        <div className={styles.imgPadding}>
			        <TransitionMotion
				        willEnter={() => {
					        console.log('firewillenter');
				        	return {
						        opacity: 0
					        }
				        }}
			            willLeave={() => {
			            	console.log('firewillleave');
			            	return {
			            		opacity: spring(0, {stiffness: 10, dampness: 1})
				            }
			            }}
				        defaultStyles={[{
					        key: this.uniqueKey,
					        style: {
						        opacity: 0
					        },
				        }]}
				        styles={[ !this.mount ? [] : {
				        	key: this.state.mount,
					        style: {opacity: spring(1)}
				        }]}
			        >
				        {interpolatedStyles =>
					        <div>
				        		{interpolatedStyles.map(config =>
						        <div>
			                        <img
								        key={config.key}
					                    style={{
						                    ...config.style
					                    }}
					                    src={src}
					                    width="100%" />
							        <div>{config.style.opacity}</div>
						        </div>
						        )}
					        </div>
				        }
			        </TransitionMotion>

				        {/*{(styles) => (*/}
					        {/*<div>*/}
						        {/*{ styles.map(({ key, style, data}) => (*/}
							        {/*<img style={{...style}}*/}
							             {/*key={key}*/}
							             {/*src={src}*/}
							             {/*width="100%" />*/}
						        {/*))}*/}
						        {/*{ styles.map(({ key, style, data}) => (*/}
							        {/*<div>{console.log(style)}</div>*/}
						        {/*))}*/}

					        {/*</div>*/}
				        {/*)}*/}
		        </div>
		        <button onClick={this.animate}>animate</button>
	        </div>
        );
    }
}