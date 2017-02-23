// Dependencies
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel';

// Components
import Image from './image';
import Copy from './copy';

// Stylesheets
import styles from './textimagecarousel.css';

const Textimagecarousel = ({ data, order, header, index, color, reverse, afterChange, textSelection }) => {
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
                    <Slider {...Textimagecarousel.settings} afterChange={afterChange.bind(null, order)} >
                        {data.map((element, arrayIndex) => {
                            let a = [];
                            if(arrayIndex === index){
                                element[Object.keys(element)[0]].forEach((element, arrayIndex) => {
                                    if(arrayIndex === order){
                                         a = element[Object.keys(element)[0]].map((element, arrayIndex) => {
                                            return (
                                                <div key={arrayIndex}>
                                                    <Image imgSrc={element.img}/>
                                                </div>
                                            );
                                        })
                                    }
                                })
                            }
                            return a;
                        })}
                    </Slider>
                </div>
            </div>
            <div className={styles.copyContainer}>
                <div className={styles.copyPadding}>
                    <table>
                        {data.map((element, arrayIndex) => {
                            let a = [];
                            if(arrayIndex === index){
                                element[Object.keys(element)[0]].forEach((element, arrayIndex) => {
                                    if(arrayIndex === order){
                                        a = element[Object.keys(element)[0]].map((element, arrayIndex) => {
                                            if(arrayIndex === textSelection){
                                                return (
                                                        <tr key={arrayIndex}>
                                                            <Copy copy={element.copy} textHighlight={1}/>
                                                        </tr>
                                                );
                                            } else {
                                                return (
                                                    <tr key={arrayIndex}>
                                                        <Copy copy={element.copy} textHighlight={0}/>
                                                    </tr>
                                                );
                                            }
                                        })
                                    }
                                })
                            }
                            return a;
                        })}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Textimagecarousel;