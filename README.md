# This repository contains E2E, and load tests
E2E tests are done by CodeceptJS [Documentation](https://codecept.io/basics/)

# Environment requirements
## Install nodejs to run UI tests
Install NodeJs [Download NodeJs](https://nodejs.org/en/download/)

## Install project dependencies by executing the command in the project directory:
```sh
npm install
```

# Running tests
## To run E2E tests execute in the project directory:
```sh
npm run codeceptjs:e2e
```
Wait for the tests to finish, the console will display brief test results

# Generating report for UI tests
## To generate Allure report execute in the project directory:
```sh
allure serve allure-results
```
The browser window will be opened with the Allure report page

##API tests

Api tests were created in Postman. 
The collection and enviroment files can be found in Postman Collection folder of this project