import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import './index.css';
import App from './App';
import store, { history } from './store';
// import registerServiceWorker from './registerServiceWorker';


const target = document.querySelector('#root')

render(
    <Provider store={ store }>
        <ConnectedRouter history={ history }>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
)

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
