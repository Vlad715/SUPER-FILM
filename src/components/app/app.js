import React, {Component} from 'react';
import {  BrowserRouter as Router, 
        Route, 
        Switch} from 'react-router-dom';

import Header from '../header';
import MainPage from '../main-page';
import FilmList from '../film-list';


export default class App extends Component { 

    render () {

        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact
                        render={() => (
                            <MainPage/>
                        )}/>
                    <Route path="/films/:date" 
                        render={({ match }) => {
                            const { date } = match.params;
                            return <FilmList date={date}/>
                        }}/>
                </Switch>
            </Router>   
        );
    }
}

