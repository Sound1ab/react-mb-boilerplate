// Dependencies
import React from 'react';

// Componenents

// Stylesheets
import styles from './infoSlider.css';

// Data

const Copy = ({ title, copy, url, index, incrementIndex, decrementIndex }) => {
    Copy.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
	function createCopyMarkup() { return {__html: `${copy}`}; }
    return (
	    <div className={styles.copyContainer}>
		    <div className={styles.copyPadding}>
			    <hr className={styles.spacer} />
			    <h1>{title}</h1>
			    <p dangerouslySetInnerHTML={createCopyMarkup()}></p>
		    </div>
		    <div className={styles.decorators}>
			    <div onClick={decrementIndex}>
				    Decrement
			    </div>
			    <div>
				    {index}
			    </div>
			    <div onClick={incrementIndex}>
				    Increment
			    </div>
		    </div>
	    </div>
    );
};

export default Copy;