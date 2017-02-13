// Dependencies
import React from 'react';
import Slider from 'react-slick';

// Components
import Image from './image';
import Copy from './copy';
import Data from './data';

// Stylesheets
import styles from './carousel.css';

const Carousel = ({ beforeChange }) => {
    Carousel.propTypes = {
        beforeChange: React.PropTypes.object
    };
    Carousel.settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={`${styles['carousel-container']}`}>
            <Slider {...Carousel.settings} afterChange={beforeChange}>
                {Data.map((element, index) => {
                    return (
                        <div key={index}>
                            <Image imgSrc={element.img}/>
                            <Copy {...Data[index]} />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Carousel;