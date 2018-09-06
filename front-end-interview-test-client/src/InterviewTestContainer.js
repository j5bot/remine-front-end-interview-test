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
        let value = event.target.value;

        const filters = this.state.filters;

        if (!Boolean(value)) {
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

                switch(true) {
                    case (filters.bedsLow || filters.bedsHigh) &&
                        (
                            location.beds < (filters.bedsLow || 0) ||
                            location.beds > (filters.bedsHigh || Math.infinity)
                        ):
                    case (filters.bathsLow || filters.bathsHigh) &&
                        (
                            location.baths < (filters.bathsLow || 0) ||
                            location.baths > (filters.bathsHigh || Math.infinity)
                        ):
                    case filters.buildingType && filters.buildingType !== location.buildingType.id:
                        return false;
                    default:
                        return true;
                }
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
