# Project Title

Automation for web application 'SauceDemo'.

## Installation

Open the terminal and run the following command:
`npm install`

## Running Test

Open the terminal and run the following command:
To run all the test files:
`npm run wdio`

To run a specific test file:
`npm run wdio test --spec example.e2e.js` or `npx run wdio test --spec example.e2e.js`

Note: change the spec file name before executing the command

## Tests

All the test spec files are located inside the test/specs folder

## Reporter

After your tests have completed, generate the Allure report by running the following command in the terminal:
`npx allure generate allure-results --clean -o allure-report`

Once the report generation is completed, you can view the Allure report by opening it in a browser:
`npx allure open allure-report`