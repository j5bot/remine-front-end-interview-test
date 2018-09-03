import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';

class InterviewTestContainer extends Component {
    render() {
        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    Your filters go here.
                </div>
                <RemineTable properties={[]} />
            </div>
        );
    }
}

export default InterviewTestContainer;
