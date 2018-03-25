# Templates and Tools

This directory is a collection of files and tools to assist the developer.
It is not meant to contain any files required by the program to function.
It is appropriate for "Lessons Learned" to be added to this file when needed.

## Component Templates
These are some basic copy/paste templates for creating consistent
components.  To understand the difference between "Presentational" and
"Container" components, read this 
[article by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0),
the creator of Redux 

## Other (hopefully) helpful tools

### The View
- [React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) -
Rewrite of React built on React's own "Fiber" core technology
  - [Handy React Cheatsheet](https://devhints.io/react)
- [React-Router 4](https://reacttraining.com/react-router)

### Strong Types with Flow

[Flow](https://flow.org/) - Static Type Checker

### APIs with Axios and Redux-Observable

[Axios](https://github.com/axios/axios) - Promise based HTTP client
for the browser and node.js

[Redux-Observable](https://redux-observable.js.org/) - RxJS middleware
for action side effects in Redux using "Epics"

### Testing

This section highlights the tools used in this app for Unit Testing as
well as end-to-end testing.

#### Unit Testing
[Jest](https://facebook.github.io/jest/) - Delightful JavaScript Testing
- [Snapshot Testing](https://facebook.github.io/jest/docs/en/tutorial-react.html#snapshot-testing)
- [DOM Testing](https://facebook.github.io/jest/docs/en/tutorial-react.html#dom-testing)
- [Writing tests for Redux](https://redux.js.org/docs/recipes/WritingTests.html#writing-tests)

#### End-to-end(e2e) Testing
[WebDriverIO](http://webdriver.io/) - WebDriver bindings for Node.js

Follow this [link](../e2e/README.md) for more project-specific information for doing e2e testing.

### Development Process

#### TDD (Test-driven Development)
A lot of great books and articles about TDD can be found on the web. The 
process used in this project is meant to follow the pattern taught in
[Growing Object-Oriented Software, Guided by Tests - by Steve Freeman and Nat Pryce](http://www.growing-object-oriented-software.com/) 

#### Managing Branches
Git Flow
- [Installation](https://github.com/petervanderdoes/gitflow-avh/wiki/Installation)
- [Cheat Sheet](https://danielkummer.github.io/git-flow-cheatsheet/)

We use the "Git Flow" process for creating, publishing, and merging branches.

Git Flow provides NO added functionality to Git.  Instead it provides
convenience commands for performing tasks that require multiple git
commands.  See the cheat sheet listed below for added clarification.

Whether you choose to install Git Flow or handle your commits "manually",
the process is still the same.

#### Component Styleguide
[React Styleguidist](https://react-styleguidist.js.org/)

### Accessibility
#### Axe cli

[axe-cli](https://github.com/dequelabs/axe-cli)

While not exactly a dependency of this project, axe-cli is a helpful tool 
for "grading" the app by how "accessible" it is.  It also provides some 
helpful hints on how to make the app more "accessible"
