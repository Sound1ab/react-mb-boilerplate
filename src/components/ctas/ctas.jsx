// Dependencies
import React from 'react';

// Componenents
import CTA from './cta';

// Stylesheets
import styles from './ctas.css';

// Data
import Data from './data';

const CTAs = ({ color }) => {
    CTAs.propTypes = {
        color: React.PropTypes.number.isRequired
    };
    let colorClass;
    if(color){
        colorClass = 'black';
    }
    return (
        <div className={`${styles['container']} ${styles[colorClass]}`}>
            {Data.map(element => {
                return (
                        <CTA
                            alignment={Data.length-1}
                            imgSrc={element.img}
                            title={element.title}
                            copy={element.copy}
                            url={element.url}
                            urlCopy={element.urlCopy}
                            color={color} />
                )
            })}
        </div>
    );
};

export default CTAs;