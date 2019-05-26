import React from 'react';

class BaseDeviceComponent extends React.Component {
    componentDidMount() {
        console.log('mounted a BaseDeviceComponent')
    }

    logComponentType(deviceType) {
        console.log('I am a device, my type is: ', deviceType);
    }

    handleValueChange = (newValue, componentId) => {
        console.log(componentId)
        this.setState({value: newValue});
        console.log(newValue)
      };

}

export default BaseDeviceComponent;