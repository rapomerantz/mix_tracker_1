import React from 'react';
import BaseDeviceComponent from './BaseDeviceComponent'
import Fader from './Fader'
import Knob from './Knob'

class ChannelStrip extends BaseDeviceComponent {
    render() {
        let channelStripComponents = this.props.device.components.map((component) => {
            if (component.type === 'Fader') {
                return <Fader key={component.componentId} component={component} />
            } else {
                return <Knob key={component.componentId} component={component} />
            }
        });
        return(
            <div className="channel-strip-wrapper">
                <div>
                    {channelStripComponents}                    
                </div>
                <h4>{this.props.device.name}</h4>
            </div>
        )
    }
}

export default ChannelStrip;