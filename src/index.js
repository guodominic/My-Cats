import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'tachyons';

const myCats = document.getElementById('root');
ReactDOM.render(<App />, myCats)
setInterval(() => {
    ReactDOM.render(<App />, myCats);
}, 60000);

// registerServiceWorker();
