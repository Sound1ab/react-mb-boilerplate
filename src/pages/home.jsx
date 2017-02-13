import React from 'react';
import Header from '../components/header/header.jsx';

export default class Home extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <p>This is the home</p>
            </div>
        );
    }
}