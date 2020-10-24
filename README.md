# TestCase_WebDeveloper
Evaluate Front end Skills in Angular 

## Github Users Project
The goal of this test is to simulate a real project that you can start from scratch. You can develop in the way you judge that will be easy to maintain and implement MANY new features and pages in the future.


This test has four levels + an optional level that won't be developed, but we should consider it to be executed in the next "sprint". 

You can use any tool you want, but you should use Angular as a base framework.

## Level 1:

Implement the UI based on wireframes(In the end of this document) using Angular Material or any other frontend toolkit.

The layout should be responsive.

We won't evaluate your design skills, we will evaluate your HTML/CSS/JS code and if you are capable of providing a basic page ready for the end user and scalable.

Ensure your website is scalable, meaning, the website needs to remain lightweight even when hundreds of new pages are implemented.

## Level 2:

Given the API https://api.github.com/search/users?q=eric 
This api takes a query parameter name "q" and passes a query string to the server that returns a list of users. 

Create an input text box and button so when you type anything on the text box and hit on the button to retrieve data from the given api. Upon retrieval display total_count and first 10 users in the search result. 

## Level 3: 

Create a separate page where you will see a single user profile

Display the name and the picture of the user.

Make this profile accessible by clicking on a person in the search list or by typing a deep link in the browser.

The user details page should be also accessible independently of the search results(search page).

## Level 4: 

Use any charting framework that you can find and then create a simple bar chart to display the number of followers of the first 10 users.

## Level 5 (Optional): 

In the future of this project, we want to be able to access the users page offline.

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

### NPM

```
npm install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
