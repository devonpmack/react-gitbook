import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

let count = 50;
let hasFire = false;

const notificationNumber = (
    <span className={"notificationNumber"}>
        {
            count > 99 ? '99+' : count
        }
    </span>
);

const notificationBadge = (
    <div className = {
        `bell ${hasFire ? 'has-fire' : ''}`
    } >
    {
        count > 0 ? notificationNumber : null
    }
    </div>
);

ReactDOM.render(notificationBadge, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
