// Dependencies
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// Components
import CopyComponent from './CopyComponent';

// Stylesheets
import styles from './FullwidthImageScroller.css';

const Copy = ({ data, index, width }) => {
    Copy.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired
    };
    return (
        <div className={`${styles['center']} ${styles['copy']}`}>
            <div className={`${styles['copyContainer']}`}>
                <ReactTransitionGroup>
                    {data.map((element, arrayIndex) => {
                        if (arrayIndex === index) {
                            return (
                                <CopyComponent data={data[arrayIndex]}
                                               key={arrayIndex}
                                               width={width}
                                />
                            );
                        }
                    })}
                </ReactTransitionGroup>
            </div>
        </div>
    );
};

export default Copy;