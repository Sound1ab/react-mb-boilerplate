// Dependencies
import React from 'react';

// Stylesheets
import styles from './FullwidthImageScroller.css';

const Slider = ({ data, index, moveToSlide }) => {
    Slider.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        moveToSlide: React.PropTypes.func.isRequired,
        slideStyle: React.PropTypes.bool
    };
    return (
        <div>
            <div className={`${styles['slider-component']}`}>
                {data.map((element, arrayIndex) => {
                    if(arrayIndex === index){
                        return (
                            <div className={`${styles['square']} ${styles['slider']} ${styles['blue']}`}
                                 onClick={moveToSlide.bind(null, arrayIndex)}
                                 key={arrayIndex} >
                                <p></p>
                            </div>
                        );
                    } else {
                        return (
                            <div className={`${styles['square']} ${styles['slider']} ${styles['white']}`}
                                 onClick={moveToSlide.bind(null, arrayIndex)}
                                 key={arrayIndex}>
                                <p></p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Slider;