import React from 'react';
import BaseDevice from '../BaseDevice'
import ChannelStrip from '../DeviceComponents/ChannelStrip'

class Mixer extends BaseDevice {
    render() {
        let channelStrips = this.props.device.channels.map((channelStrip) => {
           return <ChannelStrip key={channelStrip.componentId} device={channelStrip}/>
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