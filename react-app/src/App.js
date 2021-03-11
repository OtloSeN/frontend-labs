import React, { Component } from 'react';
import { Route, Redirect }  from 'react-router-dom';

import * as ROUTES from './constants/routes'

import './App.css';

import Header       from './components/layouts/Header';
import Footer       from './components/layouts/Footer';
import Movies       from './components/pages/Movies'
import MovieForm    from './components/pages/MovieForm'
import MovieDetails from './components/pages/MovieDetails'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Route path={ROUTES.ROOT} exact component={Movies} />
                <Route path={ROUTES.MOVIE_CREATE_FORM} exact component={MovieForm} />
                <Route path={ROUTES.MOVIE_DETAILS} exact component={MovieDetails} />

                <Redirect
                    to={{
                        pathname : ROUTES.ROOT,
                        state    : { from: ROUTES.NO_MATCH }
                    }}
                />

                <Footer />
            </div>
        )
    }
}

export default App;
