import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent';

class Knob extends BaseDeviceComponent {
    render() {
        return(
            <div className="knob-wrapper">
                <span>I am Knob</span>
            </div>
        )
    }
}

export default Knob;