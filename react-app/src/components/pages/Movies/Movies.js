import React, { Component } from 'react';

import './Movies.css'

import Card from '../../base/Card';

class Movies extends Component {
    state = {
        movies: [
            {
                title: 'Avatar',
                releaseYear: '2009',
                format: 'Blu-ray',
                logoUrl: '/movie.jpg'
            },
            {
                title: 'Avengers',
                releaseYear: '2012',
                format: 'DVD',
                logoUrl: '/movie.jpg'
            },
            {
                title: 'Avengers: Endgame',
                releaseYear: '2019',
                format: 'Blu-ray',
                logoUrl: '/movie.jpg'
            },
            {
                title: 'Superman',
                releaseYear: '2016',
                format: 'Blu-ray',
                logoUrl: '/movie.jpg'
            }
        ]
    }

    render() {
        return (
            <div className="MovieListPage">
                {this.state.movies.map((movie, i) => {
                    return (
                        <Card
                            key={i}
                            title={movie.title}
                            text={`${movie.releaseYear} / ${movie.format}`}
                            logo={movie.logoUrl}
                            linkUrl='/details'
                            linkText='Details'
                        />
                    );
                })}
            </div>
        );
    }
}

export default Movies