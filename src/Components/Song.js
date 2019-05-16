import React from 'react';
import '../App.css';
import Mixer from './Mixer'

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Song 1',
            songId: 1,
            devices: [
                {
                    deviceId: 10,
                    type:'Mixer',
                    name: 'First Mixer',
                    channels: [
                        {
                            deviceId: 11,
                            type: 'ChannelStrip',
                            name: 'Kick Drum',
                            components: [
                                {
                                    deviceId: 12,
                                    type: 'Fader',
                                    name: '',
                                    value: 5
                                }
                            ]
                        }
                    ],
                }
            ]
        }
    }

    render() {
        let deviceArray = this.state.devices.map((device) => {
            return <Mixer key={device.deviceId} device={device} />
        });

        return (
            <div>
                <h2>I am a song</h2>
                <h2>Here are my devices: </h2>
                {deviceArray}
            </div>
        )
    }
}

export default Song;