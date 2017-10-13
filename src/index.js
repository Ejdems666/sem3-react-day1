import React from 'react';
import ReactDOM from 'react-dom';
import upper, {text1,text2, text3} from "./dataStore";
import App from './App';
import CarsStore from './carsStore';

ReactDOM.render(
    <div>
        <App/>
        <p>{upper(text1)}</p>
        <p>{upper(text2)}</p>
        <p>{upper(text3)}</p>
    </div>,document.getElementById("root")
);
