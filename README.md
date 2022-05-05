# Getting Started
My Grid App is a single page application built with CRA, Redux Toolkit and Typescript. The App visualizes a grid based on AgGrid library with users. There is a mock server included to provide an API for fetch requests. 

## Functionality 
There is a Search bar where you can search for user/s by name, email and gender.
Search bar functionality is debounced so the search happens after user stops typing.

Pagination is provided by AgGrid. 
On the first loading all the result from the data base are requested.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode and the mock server in one terminal.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


