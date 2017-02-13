// Dependencies
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// Components
import CopyComponent from './CopyComponent.jsx';

// Stylesheets
import styles from './TabbedContent.css';

const Copy = ({data, index, width}) => {
    Copy.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired
    };
    return (
        <div className={`${styles['copy-container-parent']}`}>
            <div>
                <ReactTransitionGroup>
                    {data.map((element, arrayIndex) => {
                        if (arrayIndex === index) {
                            return (
                                <CopyComponent data={data[arrayIndex]}
                                               width={width}
                                               key={arrayIndex} />
                            );
                        }
                    })}
                </ReactTransitionGroup>
            </div>
        </div>
    );
};

export default Copy;