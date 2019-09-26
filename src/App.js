import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from "redux";
import reducer from "./reducers";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routeLink from './RouteLink';
import Home from './components/home/index';
import DailyGraph from './components/apple/index'
import createStorage from './store/createStorage';

let store = createStorage();


const App = (props) => {

    return(
        <Provider store={store}>
            <Router>
                <Route exact path={routeLink.home} component={Home} />
                <Route path={routeLink.apple} component={DailyGraph}/>
                <Route path={routeLink.google} component={Home}/>
                <Route path={routeLink.microsoft} component={Home}/>
                <Route path={routeLink.generalData} component={Home}/>
            </Router>
        </Provider>
    )
};

export default App;