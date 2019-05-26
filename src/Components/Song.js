import React from 'react';
import '../App.css';
import Mixer from './Devices/Mixer';
import mockSongJson from '../song1';
import axios from 'axios'

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = mockSongJson()   
    }

    getUsers = () => {
        axios.get('/users')
        .then((response) => {
          console.log('response data', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    };

    render() {
        let deviceArray = this.state.devices.map((device) => {
            return <Mixer key={device.deviceId} device={device} />
        });

        return (
            <div>
                <h2>{this.state.songName}</h2>
                {deviceArray}
            </div>
        )
    }
}

export default Song;