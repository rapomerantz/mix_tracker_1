import React from 'react';
import '../App.css';
import Mixer from './Devices/Mixer';
import mockSongJson from '../song1';

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = mockSongJson()   
    }

    render() {
        let deviceArray = this.state.devices.map((device) => {
            return <Mixer key={device.deviceId} device={device} />
        });

        return (
            <div>
                <h2>{this.state.songName}</h2>
                <h2>Here are my devices: </h2>
                {deviceArray}
            </div>
        )
    }
}

export default Song;