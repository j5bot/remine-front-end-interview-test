import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RemineFilters.css';

class RemineFilters extends Component {
    render() {
        const makeBuildingType = (buildingType) => {
            return (<option key={buildingType.id} value={buildingType.id}>{buildingType.name}</option>);
        };

        return (
            <div className="filtersContainer">
                <div className="filter">
                    <label>Beds</label>
                    <div>
                        <label>At Least: <input type="number" name="bedsLow" onChange={this.props.handleChange}
                            placeholder="0" /></label>
                        <label>No More Than: <input type="number" name="bedsHigh" onChange={this.props.handleChange}
                            placeholder="(no limit)"/></label>
                    </div>
                </div>
                <div className="filter">
                    <label>Baths</label>
                    <div>
                        <label>At Least: <input type="number" name="bathsLow" onChange={this.props.handleChange}
                            placeholder="0" /></label>
                        <label>No More Than: <input type="number" name="bathsHigh" onChange={this.props.handleChange}
                            placeholder="(no limit)"/></label>
                    </div>
                </div>
                <div className="filter">
                    <label>Building Type</label>
                    <div className="styled-select">
                        <select name="buildingType" onChange={this.props.handleChange}>
                            <option key="0" value="0">Select...</option>
                            {this.props.buildingTypes.map(makeBuildingType)}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

RemineFilters.defaultProps = {
    buildingTypes: []
}

RemineFilters.propTypes = {
    handleChange: PropTypes.func,
    buildingTypes: PropTypes.array
}

export default RemineFilters;
