// Dependencies
import React from 'react';

// Stylesheets
import styles from '../stickynav.css';

// Data
import Data from '../data';

const Dropdown = ({ allAnchors, margin, pageYOffset, navHeight, handleClick }) =>{
    Dropdown.propTypes = {
        allAnchors: React.PropTypes.array.isRequired,
        margin: React.PropTypes.number.isRequired,
        pageYOffset: React.PropTypes.number.isRequired,
        navHeight: React.PropTypes.number.isRequired,
        handleClick: React.PropTypes.number.isRequired,
    };

    let updateCurrentAnchor = () => {
        if(Dropdown.list && allAnchors.length > 1){
            for (let i = 0; i < allAnchors.length; i++) {
                Dropdown.list.children[i].style.boxShadow = 'inset 0px 0px 0px 0px';
                if(i === 0 && pageYOffset - margin < allAnchors[i] - navHeight){
                    Dropdown.list.children[i].style.boxShadow = 'inset 0px 0px 0px 0px';
                    return;
                }
                if(i === allAnchors.length - 1 && pageYOffset - margin >= allAnchors[i] - navHeight){
                    Dropdown.list.children[i-1].style.boxShadow = 'inset 0px 0px 0px 0px';
                    Dropdown.list.children[i].style.boxShadow = 'inset 0px -2px 0px 0px #00adef';
                    return;
                }
                if(pageYOffset - margin >= allAnchors[i] - navHeight && pageYOffset - margin <= allAnchors[i+1] - navHeight){
                    if(i > 0){
                        Dropdown.list.children[i-1].style.boxShadow = 'inset 0px 0px 0px 0px';
                    }
                    Dropdown.list.children[i].style.boxShadow = 'inset 0px -2px 0px 0px #00adef';
                }
            }
        }
    };
    updateCurrentAnchor();
    return (
        <div className={`${styles['lost-container']}`}>
            <div className={`${styles['lost-heading']}`}>
                <div className={`${styles['padding']}`}>
                    <h3>Finance</h3>
                </div>
            </div>
            <div className={`${styles['lost-ul']}`}>
                <ul ref={(list) => Dropdown.list = list} className={`${styles['stickynav']}`}>
                    {Data.map((element, index) => {
                        return <li key={index} id={index} onClick={handleClick.bind(this)} >{element.headline}</li>;
                    })}
                </ul>
            </div>
            <hr className={`${styles['nav-border']}`} />
        </div>
    );
};

export default Dropdown;