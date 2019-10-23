import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import sdk from 'kts-platform-sdk';

sdk.isLinks = false;

ReactDOM.render(<App />, document.getElementById('root'));
