// Dependencies
import React from 'react';

const Image = ({ imgSrc }) => {
    Image.propTypes = {
        imgSrc: React.PropTypes.string.isRequired,
    };
    return(
            <img src={imgSrc} width="100%" />
    );
};

export default Image;