import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RemineFilters.css';

class RemineFilters extends Component {
    render() {
        const makeBuildingType = (buildingType) => {
            return (<option value={buildingType.id}>{buildingType.name}</option>);
        };

        return (
            <div className="filtersContainer">
                <div className="filter">
                    <label>Beds</label>
                    <input type="number" name="beds" onChange={this.props.handleChange}/>
                </div>
                <div className="filter">
                    <label>Baths</label>
                    <input type="number" name="baths" onChange={this.props.handleChange}/>
                </div>
                <div className="filter">
                    <label>Building Type</label>
                    <select name="buildingType" onChange={this.props.handleChange}>
                        <option value="0">Select...</option>
                        {this.props.buildingTypes.map(makeBuildingType)}
                    </select>
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
