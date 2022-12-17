import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppV2 } from './AppV2';
import { AppV3 } from './componentV3/AppV3';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppV3/>
);
