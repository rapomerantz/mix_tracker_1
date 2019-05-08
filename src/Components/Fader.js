import React from 'react';
import '../App.css';
import BaseDevice from './BaseDevice'

class Fader extends BaseDevice {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            order: 1,
            type: 'fader',
            name: 'Kick Drum',
            value: 5
        }
    }

    render () {

        let faderSubsection = (
            <div className='fader-subsection-wrapper'>
            </div>
        );


        return (
            <div className='fader_wrapper'>
                <div className='fader_border'>
                    <p>Id: {this.state.id}</p>
                    <p>order: {this.state.order}</p>
                    <p>device type: {this.state.type}</p>
                    <p>name: {this.state.name}</p>
                    <p>value: {this.state.value}</p>
                </div>
            </div>
        );
    }
}

export default Fader;