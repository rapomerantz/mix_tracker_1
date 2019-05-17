function song1() {
    return {
        songName: 'Song 1',
        songId: 1,
        devices: [
            {
                deviceId: 10,
                order: 1,
                type:'Mixer',
                name: 'First Mixer',
                channels: [
                    {
                        deviceId: 10,
                        componentId: 100,
                        order: 1,
                        type: 'ChannelStrip',
                        name: 'Kick Drum',
                        components: [
                            {
                                deviceId: 10,
                                order: 1,
                                componentId: 102,
                                type: 'Knob',
                                name: '',
                                value: 5
                            },
                            {
                                deviceId: 10,
                                order: 2,
                                componentId: 102,
                                type: 'Knob',
                                name: '',
                                value: 5
                            },
                            {
                                deviceId: 10,
                                order: 3,
                                componentId: 101,
                                type: 'Fader',
                                name: '',
                                value: 5
                            },
                        ]
                    }
                ],
            }
        ]
    }
}

export default song1;