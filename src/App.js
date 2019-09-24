import React from 'react'
import { Provider } from 'react-redux'
import {createStore} from "redux";
import reducer from "./reducers";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routeLink from './RouteLink';
import Home from './components/home/index';
import DailyGraph from './components/dailyGraph/index'
import store from './store/createStorage';


const App = (props) => {

    return(
        <Provider store={store}>
            <Router>
                <Route exact path={routeLink.home} component={Home} />
                <Route path={routeLink.dailyGraph} component={DailyGraph}/>
                <Route path={routeLink.weeklyGraph} component={Home}/>
                <Route path={routeLink.monthlyGraph} component={Home}/>
                <Route path={routeLink.generalData} component={Home}/>
            </Router>
        </Provider>
    )
};

export default App;