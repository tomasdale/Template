import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Menu />
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
