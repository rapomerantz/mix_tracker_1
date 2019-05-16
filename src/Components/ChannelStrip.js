import React from 'react';
import BaseDevice from './BaseDevice'
import '../App.css';
import Fader from './Fader'

class ChannelStrip extends BaseDevice {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            order: 1,
            type: '',
            name: '',
            channels: []
        }
    }

    render() {
        let channelStripComponents = this.props.device.components.map((component) => {
            return <Fader key={component.deviceId} />
        });
        return(
            <div>
                <h4>I am a ChannelStrip, my name is: {this.props.device.name}</h4>
                {channelStripComponents}
            </div>
        )
    }
}

export default ChannelStrip;