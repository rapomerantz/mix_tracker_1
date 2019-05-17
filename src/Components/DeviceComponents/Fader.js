import React from 'react';
import '../../App.css';
import axios from 'axios';
import BaseDeviceComponent from './BaseDeviceComponent';
import FaderSubsection from './FaderSubsection';

class Fader extends BaseDeviceComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            subsections: [],
        }
    }

    componentDidMount = () => {
        this.renderSubsections(9);
        this.logComponentType(this.props.component.type)
        // this.getUsers();
    };

    getUsers = () => {
        axios.get('/users')
        .then((response) => {
          console.log('response data', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    };

    renderSubsections(numberOfSections) {
        let newSubsections = [];
        for (let i = numberOfSections; i >= 1; i--) {
            newSubsections.push(i);
        }
        this.setState({
            subsections: newSubsections
        });
    }

    handleClick(sectionNumber) {
        this.setState({
            value: sectionNumber
        });
        console.log(this.state)
    };

    render () {
        let faderSections = this.state.subsections.map((sectionNumber) => {
            return <FaderSubsection 
            key={sectionNumber} 
            sectionNumber={sectionNumber}
            handleClick={() => this.handleClick(sectionNumber)}
            />
        });


        return (
            <div className='fader-wrapper'>
                <div className='fader-border'>
                    {faderSections}
                </div>
            </div>
        );
    }
}

export default Fader;