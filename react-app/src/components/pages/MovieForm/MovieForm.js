import React, { Component } from 'react';

import './MovieForm.css'

import Input    from '../../base/Input';
import Selector from '../../base/Selector';
import Button   from '../../base/Button';

class MovieForm extends Component {
    state = {}

    render() {
        return (
            <div className="MovieForm">
                <div className="text-center">
                    <h1 className="display-4">Add your favorite Movie</h1>
                    <hr />
                </div>
                <div className="d-flex justify-content-center">
                    <div>
                        <label>Name</label>
                        <Input placeholder='Name'/>

                        <label>Year</label>
                        <Input placeholder='Year'/>

                        <label>Format</label>
                        <Selector
                            options={[
                                { value: 'VHS', text: 'VHS' },
                                { value: 'DVD', text: 'DVD' },
                                { value: 'Blu-ray', text: 'Blu-ray' }
                            ]}
                        />
                        <label>Actors:</label>
                        <ul className="d-flex flex-wrap" name="actors" id="actors-list"></ul>
                        <div className="my-3 d-flex justify-content-between">
                            <div className='col-6'>
                                <Input placeholder='Actor'/>
                            </div>
                            <Button color='outline-success' text='Add actor'/>
                        </div>
                        <Button color='success' text='Add movie'/>
                    </div>

                    <div className="d-flex flex-column justify-content-center mx-5">OR</div>

                    <div className="d-flex flex-column justify-content-center">
                        <div className='form-group'>
                            <Input placeholder='Choose file' type='file' className='form-control-file'/>
                            <br />
                            <Button color='success' text='Add movies'/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieForm