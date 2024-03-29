import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InterviewTestContainer from './InterviewTestContainer.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Remine Frontend Developer Test</h2>
                </div>
                <InterviewTestContainer />
            </div>
        );
    }
}

export default App;
