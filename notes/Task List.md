# Task List #

--

1. [ ] Create `git-flow` branches in repository
2. [ ] Create `setup` feature branch
3. [ ] Commit new / modified files to `setup` branch
4. [ ] Create pull request to merge `setup` branch into `master`
5. [ ] Publish `setup` feature branch

--

1. [x] Review `API.js`
2. [x] Review `InterviewTestContainer.js`
3. [x] Review `index.js`
4. [x] Review `App.js`
5. [x] Review `RemineTable.js`

--

1. [ ] Consider adding a `redux` store as state container to `InterviewTestContainer`
2. [ ] Get building types using `API`
3. [ ] Create `RemineFilters` component
4. [ ] Add `RemineFilters` component to `InterviewTestContainer` component, providing building types data to the component
5. [ ] Filter data provided to `RemineTable` based on filters selected in `RemineFilters` component

--

1. [ ] Remove instructional markup from the `App` component
2. [ ] Remove `App-intro` class from the `App.css` CSS

--

# Task Notes #

## Review API.js ##

`API.js` uses the `axios` library and returns a new `API` object of class `API`, which has these methods:

* `constructor`
* `getLocations`
* `getLocation`
* `getBuildingTypes`

## Review InterviewTestContainer.js ##

`InterviewTestContainer.js` exports a React container component, `InterviewTestContainer`, which uses the `RemineTable` component to render a list of 'locations'.  The container component contains a `div` with class `filterContainer` which looks like it should have controls added to it to provide the filters which the project requirements call for.

1. [ ] Get building types from parent component
2. [ ] Create `RemineFilters` component with filters for:
  * [ ] Number of beds
  * [ ] Number of baths
  * [ ] Building type

## Review index.js ##

`index.js` is a standard React app 'bootstrapping' script, including CSS for the app from `index.css` and `registerServiceWorker`.

## Review App.js ##

`App.js` contains a standard React app component, `App`, including SVG for the application logo from `logo.svg`, CSS for the component from `App.css`.  Markup with instructions for requirements is included in the JSX for the component.

1. [ ] Remove the instructional markup from the JSX
2. [ ] Remove the `App-intro` class from the `App.css` CSS

## Review RemineTable.js ##

`RemineTable.js` exports a React component, `RemineTable`, which renders a list of 'locations', which are provided to the component through a `prop` called `properties` (assume this is named for real estate properties, not object properties).  The `properties` object is an array of objects, each of which has these members:

* `id` property (`Number` type)
* `address` property (`String` type)
* `buildingType` property (`Object` type)
  * `buildingType` objects contain the members:
    * `name` property (`String` type)
* `beds` property (`Number` type)
* `baths` property (`Number` type)
