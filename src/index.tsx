

// Import React and React DOM
import * as React from 'react';
import { render } from 'react-dom';
// Import the Hot Module Reloading App Container – more on why we use 'require' below
const { AppContainer } = require('react-hot-loader');


// export default () => <div>Hello world</div>;


// Import our App container (which we will create in the next step)
import App from 'containers/App';

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App').default;

    // And render it into the root element again
    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  })
}
