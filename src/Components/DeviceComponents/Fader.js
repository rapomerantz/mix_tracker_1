import React from 'react';
import '../../App.css';
import BaseDeviceComponent from './BaseDeviceComponent';
import FaderSubsection from './FaderSubsection';

class Fader extends BaseDeviceComponent {
    constructor(props) {
        super(props);
        this.state = {
            subsections: [],
            value: this.props.component.value
        }
    }

    componentDidMount = () => {
        this.renderSubsections(9);
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

    render () {
        let faderSections = this.state.subsections.map((sectionNumber) => {
            return <FaderSubsection 
            key={sectionNumber} 
            sectionNumber={sectionNumber}
            faderValue={this.state.value}
            handleValueChange={() => this.handleValueChange(sectionNumber, this.props.component.componentId)}
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