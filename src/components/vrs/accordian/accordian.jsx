// Dependencies
import React from 'react';

// Componenents
import Slide from './slide';
import TextImageCarousel from '../textimagecarousel/textimagecarousel';
import BasicText from '../basicText/BasicText';

// Stylesheets
import styles from './accordian.css';

// Data

const Accordian = ({ data, header, index, previousIndex, afterChange, acceptableTextSelection, unacceptableTextSelection, handleIndexClick }) => {
    Accordian.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    let active;
    return (
        <div>
            {data.map((element, arrayIndex) => {
                if(arrayIndex === index){
                    if(previousIndex === index){
                        active = '';
                    } else {
                        active = 'active';
                    }
                } else {
                    active = ''
                }
                return (
                    <Slide
                        data={data}
                        index={index}
                        arrayIndex={arrayIndex}
                        handleIndexClick={handleIndexClick}
                        active={active} >
                        <BasicText
                            title={data[index][Object.keys(data[index])[0]][0].title}
                            copy={data[index][Object.keys(data[index])[0]][0].copy}
                            color={'white'}/>
                        <TextImageCarousel
                            data={data}
                            header={header}
                            index={arrayIndex}
                            afterChange={afterChange}
                            textSelection={acceptableTextSelection}
                            order={1}
                            color={0}
                            reverse={1}/>
                        <TextImageCarousel
                            data={data}
                            header={header}
                            index={arrayIndex}
                            afterChange={afterChange}
                            textSelection={unacceptableTextSelection}
                            order={2}
                            color={0}
                            reverse={0}/>
                    </Slide>
                )
            })}
        </div>
    );
};

export default Accordian;