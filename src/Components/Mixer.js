import React from 'react';
import BaseDevice from './BaseDevice'
import '../App.css';
import ChannelStrip from './ChannelStrip'

class Mixer extends BaseDevice {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.device.deviceId,
            order: 1,
            type: '',
            name: '',
            channels: []
        }
    }

    render() {
        let channelStrips = this.props.device.channels.map((channelStrip) => {
           return <ChannelStrip key={channelStrip.id} device={channelStrip}/>
        });

        return(
            <div>
                <h3>I am a mixer, my name is: {this.props.device.name}</h3>
                {channelStrips}
            </div>
        )
    }
}

export default Mixer;