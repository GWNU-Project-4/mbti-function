
import './App.css';
import React from 'react';
import {SignRouter} from './router/signRouter';
import {Bar} from './bar';


function App() {

    return (
    <div>
        <Bar />
   	    <SignRouter />
    </div>
    );
}

export default App;