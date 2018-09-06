import React, { Component } from 'react';
import RemineFilters from './components/Filters/RemineFilters/RemineFilters';
import RemineTable from './components/Table/RemineTable/RemineTable';
import API from './API';

class InterviewTestContainer extends Component {
    constructor(props) {
        super(props);
        this.initializeState();
        this.initializeHandlers();
    }

    initializeState() {
        this.state = {
            buildingTypes: [],
            locations: [],
            filters: {}
        };
    }

    componentDidMount() {
        this.initializeBuildingTypes();
        this.initializeLocations();
    }

    initializeHandlers() {
        this.handleFilterChange = this.handleFilterChange.bind(this);
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

    handleFilterChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        console.log(name, value);
        const filters = this.state.filters;

        if (value === "") {
            delete filters[name];
        } else {
            filters[name] = parseInt(value, 10);
        }
        this.setState({filters});
    }

    render() {
        const state = this.state;

        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    <RemineFilters buildingTypes={state.buildingTypes}
                        handleChange={this.handleFilterChange} />
                </div>
                <RemineTable properties={state.locations} />
            </div>
        );
    }
}

export default InterviewTestContainer;
