import React, { Component } from 'react';
import RemineTable from './components/Table/RemineTable/RemineTable';
import API from './API';

class InterviewTestContainer extends Component {
    constructor(props) {
        super(props);
        this.initializeState();
    }

    initializeState() {
        this.state = {
            buildingTypes: [],
            locations: []
        };
    }

    componentDidMount() {
        this.initializeBuildingTypes();
        this.initializeLocations();
    }

    initializeBuildingTypes() {
        const buildingTypesPromise = API.getBuildingTypes();

        buildingTypesPromise.then(
            (resolved) => {
                this.setState({buildingTypes: resolved.data});
            }
        );
    }

    initializeLocations() {
        const locationsPromise = API.getLocations();

        locationsPromise.then(
            (resolved) => {
                this.setState({
                    locations: resolved.data
                });
            }
        );
    }

    render() {
        const state = this.state;

        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    Your filters go here.
                </div>
                <RemineTable properties={state.locations} />
            </div>
        );
    }
}

export default InterviewTestContainer;
