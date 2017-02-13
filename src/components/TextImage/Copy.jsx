// Dependencies
import React from 'react';

// StyleSheets
import styles from './TextImage.css';

const Copy = ({ data, index }) => {
    Copy.propTypes = {
        data: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        copyPlacement: React.PropTypes.string.isRequired
    };

    let createCopyMarkup = () => {
        return {__html: `${data[index].copy}`};
    };

    let CTA = null;
    if(data[index].url){
        CTA = <a href={data[index].url} className={`cta blue`} target='_blank'>Find out more</a>;
    }
    return (
        <div className={`${styles['']} `}>
            <div className={`${styles['copyContainer']}`}>
                <h2>{data[index].headline}</h2>
                <p dangerouslySetInnerHTML={createCopyMarkup()}></p>
                {CTA}
            </div>
        </div>
    );
};

export default Copy;