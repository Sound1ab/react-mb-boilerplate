// Dependencies
import React from 'react';

// Components
import ImageHeader from './imageHeader/imageHeader';
import BasicText from './basicText/BasicText';
import TextImageCarousel from './textimagecarousel/textimagecarousel';
import Accordian from './accordian/accordian';

// Stylesheets
import styles from './vrs.css';

// Data
import Data from './data';

export default class Container extends React.Component {
    constructor(){
        super();
        this.state = {
            order: 0,
            index: 0,
            acceptableTextSelection: 0,
            unacceptableTextSelection: 0,
            header: 0,
            previousIndex: 0
        }
    }
    static propTypes = {
        reverse: React.PropTypes.number.isRequired,
        color: React.PropTypes.number.isRequired
    }
    afterChange = (order, imageNumber) => {
        if(order === 1){
            this.setState({
                acceptableTextSelection: imageNumber
            })
        } else if(order === 2) {
            this.setState({
                unacceptableTextSelection: imageNumber
            })
        }
    }
    handleIndexClick = (index) => {
        if(this.state.previousIndex === this.state.index){
            console.log('fire');
            this.setState({
                previousIndex: -1
            })
        } else {
            this.setState({
                previousIndex: this.state.index
            })
        }
        this.setState({
            index
        })
    }
    handleHeaderClick = (index) => {
        if(index === 0){
            this.setState({
                header: 0
            })
        } else {
            this.setState({
                header: 1
            })
        }
    }
    render () {
        const { index, acceptableTextSelection, unacceptableTextSelection, header, previousIndex } = this.state;
        let data;
        data = Data[Object.keys(Data)[header]];
        let mobile;
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            mobile = 1;
        }
        return (
            <div>
                <ImageHeader
                    data={Data}
                    header={header}
                    handleIndexClick={this.handleIndexClick}
                    handleHeaderClick={this.handleHeaderClick}/>
                { mobile && <Accordian
                    {...this.state}
                    data={data}
                    handleIndexClick={this.handleIndexClick}
                    afterChange={this.afterChange}/> }
                { !mobile && <span>
                    <BasicText
                        title={data[index][Object.keys(data[index])[0]][0].title}
                        copy={data[index][Object.keys(data[index])[0]][0].copy}
                        color={'white'}/>
                    <TextImageCarousel
                        data={data}
                        header={header}
                        index={index}
                        textSelection={acceptableTextSelection}
                        order={1}
                        color={0}
                        reverse={1}
                        afterChange={this.afterChange}/>
                    <TextImageCarousel
                        data={data}
                        index={index}
                        textSelection={unacceptableTextSelection}
                        order={2}
                        color={0}
                        reverse={0}
                        afterChange={this.afterChange}/>
                </span> }
            </div>
        );
    }
}