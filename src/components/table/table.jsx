// Dependencies
import React from 'react';
import TweenMax from 'gsap';

// Componenents

// Stylesheets
import styles from './table.css';

// Data

export default class Table extends React.Component {
    static propTypes = {
        Data: React.PropTypes.array.isRequired,
        bodySize: React.PropTypes.number.isRequired,
        roofSize: React.PropTypes.number.isRequired,
        extractData: React.PropTypes.func.isRequired,
    };
    componentDidEnter(callback) {
        console.log('fire');
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 0, position: 'relative'}, {y: 0, opacity: 1, onComplete: callback});
    }
    componentWillLeave(callback) {
        console.log('fire');
        TweenMax.fromTo(this.node, 0.8, {y: 0, opacity: 1, top: 0, left: 0, position: 'absolute'}, {y: 0, opacity: 0, onComplete: callback});
    }
    componentWillEnter(){
        console.log('componentWillEnter');
    }
    extractData = (roofObject, index) => {
        let htmlArray = [];
        if(index === 0){
            for (let i = 0; i < Object.keys(roofObject).length; i++) {
                if(i === 0 || i === this.props.mobileSelection || this.props.mobileSelection === 0){
                    htmlArray = [...htmlArray, <th>{roofObject[Object.keys(roofObject)[i]]}</th>]
                }
            }
            return (<thead><tr>{htmlArray}</tr></thead>);
        } else {
            for (let i = 0; i < Object.keys(roofObject).length; i++) {
                if(i === 0 || i === this.props.mobileSelection || this.props.mobileSelection === 0) {
                    htmlArray = [...htmlArray, <td>{roofObject[Object.keys(roofObject)[i]]}</td>]
                }
            }
            return (<tr>{htmlArray}</tr>);
        }
    }
    render () {
        const { Data, bodySize, roofSize } = this.props;
        return (
            <div className={styles.container} ref={node => this.node = node}>
                <table className={styles.table}>
                    {Data.map((dataArray, index) => {
                        if (index === bodySize) {
                            return dataArray[Object.keys(dataArray)[0]].map((bodyObject, index) => {
                                if (index === roofSize) {
                                    let tbodyArray = [];
                                    return bodyObject[Object.keys(bodyObject)[0]].map((roofObject, index) => {
                                        if (index === 0) {
                                            return this.extractData(roofObject, index);
                                        } else {
                                            tbodyArray = [...tbodyArray, this.extractData(roofObject, index)];
                                        }
                                        if (index === bodyObject[Object.keys(bodyObject)[0]].length - 1) {
                                            tbodyArray = [...tbodyArray, this.extractData(roofObject, index)];
                                            return <tbody>{tbodyArray}</tbody>;
                                        }
                                    })
                                }
                            })
                        }
                    })}
                </table>
            </div>
        );
    }
};