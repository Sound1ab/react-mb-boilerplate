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
    }
    static propTypes = {

    }
    // componentWillMount(){
	 //    this.style = {
		//     borderRadius: spring('50%')
	 //    }
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
	willLeave = () => ({
    		opacity: 0
	})


	willEnter = () => {

	}
	getStyles = () => ({
		opacity: spring(1),
	});
    render () {
    	const { src } = this.props;
        return (
	        <div className={styles.imgContainer}>
		        <div className={styles.imgPadding}>
			        <TransitionMotion
				        willEnter={() => {
				        	console.log('fire');
				        	return {
				        		opacity: 0
					        }
				        }}
			            willLeave={() => {
				            console.log('fire');
			            	return {
			            		opacity: spring(1)
				            }
			            }}
				        styles={[{
				        	key: src,
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
							        <div>{console.log(config)}</div>
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