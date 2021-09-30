import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Game from './pages/Game';
import About from './pages/About';
import Examples from "./pages/Examples";
import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.App}>
        <Router>
            <Switch>
                <Route path="/" exact component={About}>
                    <About />
                </Route>
                <Route path="/play" component={Game}>
                    <Game />
                </Route>
                <Route path="/examples" component={Examples}>
                    <Examples />
                </Route>
            </Switch>
        </Router>
        </div>
    );
};

export default App;
