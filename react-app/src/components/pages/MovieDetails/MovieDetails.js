import React, { Component } from 'react';

import './MovieDetails.css'

import Button   from '../../base/Button';

class MovieDetails extends Component {
    state = {}

    render() {
        return (
            <div className='MovieDetails'>
                <div className="MovieDetails-card">
                    <div class="text-center">
                        <h1 className="display-4">Avengers: Endgame</h1>
                        <p className="lead">2019 / DVD</p>
                        <p>Actors:</p>
                        <ul id="MovieDetails-actors-list" className="d-flex flex-wrap justify-content-center">
                            {
                                [ 'Dima', 'Rychyk', 'Bogdan', 'Ignatchuk' ].map((actor, i) => {
                                    return (<li key={i} className="MovieDetails-actor">{actor}</li>);
                                })
                            }
                        </ul>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <Button color='primary' text='Update' />
                            <Button color='danger' text='Delete' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails