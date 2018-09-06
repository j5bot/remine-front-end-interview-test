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
            filters: {},
            filteredLocationsCache: {},
            filteredLocations: []
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
                const defaultFilter = JSON.stringify({});
                const filteredLocationsCache = {
                    ...this.state.filteredLocationsCache,
                    [defaultFilter]: resolved.data
                };
                this.setState({
                    locations: resolved.data,
                    filteredLocations: resolved.data,
                    filteredLocationsCache
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
        this.filterLocations(filters);
    }

    filterLocations(filters) {
        const currentFilter = JSON.stringify(filters);
        const cachedFilteredLocations =
            this.state.filteredLocationsCache[currentFilter];
        const isCached = Boolean(cachedFilteredLocations);

        if (isCached) {
            this.setState({
                filteredLocations: cachedFilteredLocations
            });
            return;
        }

        const filteredLocations = this.state.locations.filter(
            (location) => {
                if (filters.beds && filters.beds !== location.beds) {
                    return false;
                }
                if (filters.baths && filters.baths !== location.baths) {
                    return false;
                }
                if (filters.buildingType &&
                    filters.buildingType !== location.buildingType.id) {
                    return false;
                }
                return true;
            }
        );

        const filteredLocationsCache = {
            ...this.state.filteredLocationsCache,
            [currentFilter]: filteredLocations
        };

        this.setState({
            filteredLocations,
            filteredLocationsCache
        });
    }

    render() {
        const state = this.state;

        return (
            <div className="interviewTestContainer">
                <div className="filterContainer">
                    <RemineFilters buildingTypes={state.buildingTypes}
                        handleChange={this.handleFilterChange} />
                </div>
                <RemineTable properties={state.filteredLocations} />
            </div>
        );
    }
}

export default InterviewTestContainer;
