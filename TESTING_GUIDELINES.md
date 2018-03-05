# Purpose


The purpose of this file is to document the correct process for doing TDD (Test-Driven Development)

## Unit Tests
Unit tests can be useful for testing logic and the existance (or absence) of React components.

Testing a user experience or the flow between page views is done using end-to-end (e2e) tests and will be explained in the next section.

### Standard Guidelines for Unit Testing
* Every React Component file will have a correlating test file with the same name and `.test.js` as the extension. For example: 
```
  MyComponent.js
  MyComponent.test.js
```
* If a directory is filling up with lots of files and you want to clean it up by moving the test files, you have the option of creating a `__tests__` folder in that directory (if one hasn't already been created) and move the test files to that folder.  Make sure all references in those files are updated appropriately.
* At the very least, every React component should have tests for the following:
    * The component renders without errors
    * The component throws a PropTypes error if no props are passed in (only if the component requires props)
* For Redux, every action function (found in the reducer files) should be tested for proper logic
* For Redux-Observable (all of the APIs), every request should be tested for proper logic 

## End-to-end Tests
End-to-end (e2e) tests should cover all major functions that a user would want to perform.  All new features should first start by creating an e2e test that describes that feature, and while the feature is being built, units tests should be created to set the expectations for the logic of each component and any methods/classes that are being used.
