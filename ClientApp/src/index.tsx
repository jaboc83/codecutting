// 3rd Party
import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './assets/css/compiled.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Other Components
import App from './components/App';

library.add(faEnvelope);

ReactDOM.render(<App />, document.getElementById('root'));
