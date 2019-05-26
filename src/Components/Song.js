import React from 'react';
import '../App.css';
import Mixer from './Devices/Mixer';
import mockSongJson from '../song1';
import axios from 'axios'

class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSongs: [],
            selectedSong: {
                devices: []
            }
        }
    }

    componentDidMount() {
        this.getSongs(1);
    }

    getSongs = (userId) => {
        axios.get(`/songs/${userId}`)
        .then((response) => {
            this.setState({
                allSongs: response.data,
                selectedSong: response.data[0]
            })
            this.getDevices(this.state.selectedSong.song_id)
        })
    }

    getDevices = (songId) => {
        axios.get(`/devices/${songId}`)
        .then((response) => {
            if (response.data) {
                let currentSongState = this.state.selectedSong;
                currentSongState.devices = response.data;    
                this.setState({
                    selectedSong: currentSongState
                })
                this.renderDevices(this.state.selectedSong.devices);
            }
        })
    }

    renderDevices = (devices) => {
        this.deviceArray = devices.map((device) => {
            console.log(device)
            return <Mixer key={device.device_id} device={device} />
        })
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <h2>Song: {this.state.selectedSong.song_name}</h2>
                {this.deviceArray}
            </div>
        )
    }
}

export default Song;