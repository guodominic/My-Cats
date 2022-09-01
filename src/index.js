import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'))
setInterval(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
}, 1000);

// registerServiceWorker();
