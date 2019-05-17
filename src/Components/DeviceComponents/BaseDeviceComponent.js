import React from 'react';

class BaseDeviceComponent extends React.Component {
    componentDidMount() {
        console.log('mounted a BaseDeviceComponent')
    }

    logComponentType(deviceType) {
        console.log('I am a device, my type is: ', deviceType);
    }
}

export default BaseDeviceComponent;