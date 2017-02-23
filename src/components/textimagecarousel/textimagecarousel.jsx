// Dependencies
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel';

// Components
import Image from './image';
import Copy from './copy';

// Stylesheets
import styles from './textimagecarousel.css';

const Textimagecarousel = ({ data, index, color, reverse }) => {
    Textimagecarousel.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        color: React.PropTypes.number.isRequired,
        reverse: React.PropTypes.number.isRequired
    };
    Textimagecarousel.settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let reverseClass;
    if(reverse){
        reverseClass = 'reverse';
    }
    let colorClass;
    if (color){
        colorClass = 'black';
    }
    return(
        <div className={`${styles['container']} ${styles[reverseClass]} ${styles[colorClass]}`}>
            <div className={styles.imgContainer}>
                                <div className={styles.fixedSlick}>
                <Slider {...Textimagecarousel.settings} afterChange={Textimagecarousel.beforeChange} >
                    {data[index].img.map((element, index) => {
                        console.log('textimage', element);
                        return (
                            <div key={index}>
                                <Image imgSrc={element}/>
                            </div>
                        );
                    })}
                </Slider>
                                </div>
            </div>
            <div className={styles.copyContainer}>
                <Copy title={data[index].title} copy={data[index].copy} url={data[index].url}/>
            </div>
        </div>
    );
};

export default Textimagecarousel;