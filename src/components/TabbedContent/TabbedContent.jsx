// Dependencies
import React from 'react';

// Components
import Tabs from './Tabs';
import Copy from './Copy';
import Dropdown from './DropDown/Dropdown';

// Stylesheets
import styles from './TabbedContent.css';

// Data
import TabbedContentData from './data';

export default class TabbedContent extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            data: TabbedContentData,
            index: 0,
            width: null,
            selected: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleListClick = this.handleListClick.bind(this);
        this.handleHeadlineClick = this.handleHeadlineClick.bind(this);
    }
    updateDimensions = () => {

        let w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            newWidth = w.innerWidth || documentElement.clientWidth || body.clientWidth;

        this.setState({
            width: newWidth
        });
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    handleClick = (index) => {
        const newIndex = index;
        this.setState({
            index: newIndex
        });
    }
    handleListClick = (index) => {
        const newIndex = index;
        console.log(index);
        this.setState({
            index: newIndex,
            selected: false
        });
    }
    handleHeadlineClick = () => {
        let newSelected = !this.state.selected;
        this.setState({
            selected: newSelected
        });
    }
    render () {
        let component;
        if(this.state.width > 789){
            component = <Tabs {...this.state} handleClick={this.handleClick} />;
        }
        else if(this.state.width <= 789){
            component = <Dropdown {...this.state}
                                  handleListClick={this.handleListClick}
                                  handleHeadlineClick={this.handleHeadlineClick}/>;
        }
        return (
            <div className={`${styles['container']}`}>
                {component}
                <div>
                    <Copy {...this.state} />
                </div>
            </div>
        );
    }
}