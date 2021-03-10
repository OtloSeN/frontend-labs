import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                    <Route path="/" exact render={() => <h1>Home Page</h1>} />
                    <Route path="/create-movie"  render={() => <h1>Create movie form</h1>} />
                <Footer />
            </div>
        )
    }
}

export default App;
