// Dependencies
import React from 'react';

// Componenents

// Stylesheets
import styles from './ctas.css';

// Data

const CTA = ({ alignment, imgSrc, title, copy, url, urlCopy }) => {
    CTA.propTypes = {
        // data: React.PropTypes.array.isRequired
    };
    let alignmentClass;
    switch(alignment){
        case 0:
            alignmentClass = 'cta100';
            break;
        case 1:
            alignmentClass = 'cta50';
            break;
        case 2:
            alignmentClass = 'cta33';
            break;
        case 3:
            alignmentClass = 'cta25';
            break;
        case 4:
            alignmentClass = 'cta20';
            break;
        default:
            alignmentClass = 'hide'
    }
    let createCopyMarkupForH3 = () => { return {__html: `${title}`}; };
    let createCopyMarkupForP = () => { return {__html: `${copy}`}; };
    return (
        <div className={`${styles[alignmentClass]}`}>
            <div className={styles.ctaPadding}>
                <div>
                    <img src={imgSrc} width="100%" />
                </div>
                <div className={styles.copyPadding}>
                    <h3 dangerouslySetInnerHTML={createCopyMarkupForH3()}></h3>
                    <p dangerouslySetInnerHTML={createCopyMarkupForP()}></p>
                    {url ? <a href={url} target="_blank" className={styles.cta}>{urlCopy}</a> : <div></div>}
                </div>
            </div>
        </div>
    );
};

export default CTA;