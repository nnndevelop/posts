import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

const con = document.querySelector('#root');
const root = createRoot(con);


root.render(
    <Router>
      <App/>
    </Router>
);
 