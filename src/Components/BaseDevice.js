import React from 'react';
import '../App.css';

class BaseDevice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            order: 1,
            type: '',
            name: ''
        }
    }
}

export default BaseDevice;