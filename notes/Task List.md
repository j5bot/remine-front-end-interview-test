# Task List #

1. git-flow

	1. [x] Create `git-flow` branches in repository
	2. [x] Create `setup` feature branch
	3. [x] Commit new / modified files to `setup` branch
	4. [x] Create pull request to merge `setup` branch into `develop`
	5. [x] Publish `setup` feature branch
	6. [x] Finish `setup` feature
	7. [x] Create `setup` release (merges `develop` into `master`)
	8. [x] Publish `setup` release
	9. [x] Create `task-list` feature branch
	10. [x] Publish `task-list` feature branch
	11. [x] Create `3-coding/2/get-building-types` 
	13. [x] Merge `3-coding/2/get-building-types` into `develop`
	14. [x] Create `3-coding/3/get-locations`
	15. [x] Merge `3-coding/3/get-locations` into `develop`
	16. [x] Create `3-coding/4/create-remine-filters-component`
	17. [x] Merge `3-coding/4/create-remine-filters-component` into `develop`
	18. [x] Create `3-coding/5/add-filters-to-container`
	19. [x] Merge `3-coding/5/add-filters-to-container` into `develop`
	20. [x] Create `3-coding/7/filter-locations`
	21. [x] Merge `3-coding/7/filter-locations` into `develop`
	22. [x] Create `3-coding/8/cache-filtered-locations`
	23. [x] Merge `3-coding/8/cached-filtered-locations` into `develop`
	24. [x] Create `3-coding/9/add-building-types-to-filters`
	25. [x] Merge `3-coding/9/add-building-types-to-filters` into `develop`
	26. [x] Create `4-cleanup/1-2/remove-markup-and-css`
	27. [x] Merge `4-cleanup/1-2/remove-markup-and-css` into `develop`

2. review

	1. [x] Review `API.js`
	2. [x] Review `InterviewTestContainer.js`
	3. [x] Review `index.js`
	4. [x] Review `App.js`
	5. [x] Review `RemineTable.js`

3. coding

	1. [x] Consider adding a `redux` store as state container to `InterviewTestContainer`
	2. [x] Get building types using `API`
	3. [x] Get properties/locations using `API`
	4. [x] Create `RemineFilters` component
	5. [x] Add `RemineFilters` component to `InterviewTestContainer` component
	6. [x] Tie `RemineFilters` input to `InterviewTestContainer` component state
	7. [x] Filter data provided to `RemineTable` based on filters selected in `RemineFilters` component
	8. [x] Cache filtered data in `InterviewTestContainer`
	9. [x] Provide building types data to the `RemineFilters` component
	
4. cleanup

	1. [x] Remove instructional markup from the `App` component
	2. [x] Remove `App-intro` class from the `App.css` CSS

5. styling

	1. [x] Style filter elements using flexbox model
	2. [x] Style `filtersContainer` as needed

6. bonus

	1. [x] Add 'at least' controls to filters


# Task Notes #

## Review API.js ##

`API.js` uses the `axios` library and returns a new `API` object of class `API`, which has these methods:

* `constructor`
* `getLocations`
* `getLocation`
* `getBuildingTypes`

## Review InterviewTestContainer.js ##

`InterviewTestContainer.js` exports a React container component, `InterviewTestContainer`, which uses the `RemineTable` component to render a list of 'locations'.  The container component contains a `div` with class `filterContainer` which looks like it should have controls added to it to provide the filters which the project requirements call for.

1. [x] Get building types from parent component
2. [x] Create `RemineFilters` component with filters for:
  * [x] Number of beds
  * [x] Number of baths
  * [x] Building type

## Review index.js ##

`index.js` is a standard React app 'bootstrapping' script, including CSS for the app from `index.css` and `registerServiceWorker`.

## Review App.js ##

`App.js` contains a standard React app component, `App`, including SVG for the application logo from `logo.svg`, CSS for the component from `App.css`.  Markup with instructions for requirements is included in the JSX for the component.

1. [x] Remove the instructional markup from the JSX
2. [x] Remove the `App-intro` class from the `App.css` CSS

## Review RemineTable.js ##

`RemineTable.js` exports a React component, `RemineTable`, which renders a list of 'locations', which are provided to the component through a `prop` called `properties` (assume this is named for real estate properties, not object properties).  The `properties` object is an array of objects, each of which has these members:

* `id` property (`Number` type)
* `address` property (`String` type)
* `buildingType` property (`Object` type)
  * `buildingType` objects contain the members:
    * `name` property (`String` type)
* `beds` property (`Number` type)
* `baths` property (`Number` type)

## Consider adding a `redux` store as state container to `InterviewTestContainer` ##

Consideration was given to using a `redux` store and it was decided that the requirements of the project did not warrant that complexity at this time.

## Get building types using `API` ##

Created a method `initializeBuildingTypes` in `InterviewTestContainer` which makes a call to `API.getBuildingTypes` and stores the resulting promise.

When the promise is resolved, the state of `InterviewTestContainer` is updated to store the data returned by the `API` as `buildingTypes` property.

`initializeBuildingTypes` is called from the `componentDidMount` lifecycle event method of the container.


## Get properties/locations using `API` ##

Created a method `initializeLocations` in `InterviewTestContainer` which makes a call to `API.getLocations` and stores the resulting promise.

When the promise is resolved, the state of `InterviewTestContainer` is updated to store the data returned by the `API` as `locations` property.

`initializeLocations` is called from the `componentDidMount` lifecycle event method of the container.

## Create `RemineFilters` component ##

`RemineFilters` component was created in the directory `components/Filters/RemineFilters` as `RemineFilters.js` and `RemineFilters.css`.

The component has props for bringing in the `buildingTypes` data from the parent component, as well as input controls which allow for entering values to filter upon.

## Add `RemineFilters` component to `InterviewTestContainer` component ##

The `RemineFilters` component is imported into `InterviewTestContainer` and the properties set to provide `buildingTypes` data to `RemineFilters`.

## Tie `RemineFilters` input to `InterviewTestContainer` component state ##

The `handleFilterChange` method is created on `InterviewTestContainer` to update the `filters` property of the container's state when it is called as a result of a change event.

The `RemineFilters` component is given a `handleChange` function prop that is added as the `onChange` handler for all of the filter input controls.

`InterviewTestContainer` passes `handleFilterChange` as the value for `handleChange` to `RemineFilters`.


## Filter data provided to `RemineTable` based on filters selected in `RemineFilters` component ##

`handleFilterChange` updates the properties of the `filters` state object and also triggers the `filterLocations` method to filter the list of locations.

`filterLocations` takes the original `locations` state property and filters that array based on the values in `filters`.  The filtered array is then stored in the state as `filteredLocations`.

`RemineTable` is now provided with `filteredLocations` as the value for the `properties` prop.

## Cache filtered data in `InterviewTestContainer` ##

Code in `InterviewTestContainer` is updated to add `filteredLocationsCache` state property.  Initial locations are stored in the cache with the 'unfiltered' key (`JSON.stringify({})`).

`filterLocations` code is updated to look at `filteredLocationsCache` to find a cached filtered array of locations if available and to set `filteredLocations` to that value.  If there is no cached filtered array of locations available, the `locations` array will be filtered according to the `filters` provided from the `RemineFilter` component.  The filtered location array will then be stored with a key representing the filter used, for example `{"beds": 1}`.

## Provide building types data to the `RemineFilters` component ##

`RemineFilters` component updated to use a `select` component instead of an `input` component.  The array of building types provided by the parent component is mapped to generate JSX for the `select` component's `option` children.  An option with the value "0" is presented as "Select ..." first in the list of available options.

## Remove instructional markup from the `App` component ##

Extraneous markup was removed from the `App` component.

## Remove `App-intro` class from the `App.css` CSS ##

The `App-intro` class was removed from the `App.css` file.

## Style filter elements using flexbox model ##

Both the `filtersContainer' and child elements were styled with flexbox to improve their presentation.

## Add 'at least' controls to filters ##

Checkbox 'at least' controls were added to the filters for beds and baths.  `filterLocations` method in `InterviewTestContainer` was updated to take these additional filters into account.
