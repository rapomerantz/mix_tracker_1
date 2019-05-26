import React from 'react';
import CanvasKnob from 'react-canvas-knob';
import BaseDeviceComponent from './BaseDeviceComponent';

class Knob extends BaseDeviceComponent {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.component.value
        }
    }

    knobDefaultValues = {
        angleArc: 270,
        angleOffset: 225,
        min: 0,
        max: 10,
        step: 1,
        height: 100,
        width: 80,
        thickness: 0.2,
        lineCap: 'round',
        displayInput: false
    }

    handleKnobChange = (newValue) => {
        this.handleValueChange(newValue, this.props.component.componentId)
    }
    
  render() {
    return (
        <CanvasKnob
        value={this.state.value}
        componentId={this.state.componentId}
        angleArc={this.knobDefaultValues.angleArc}
        angleOffset={this.knobDefaultValues.angleOffset}
        min={this.knobDefaultValues.min}
        max={this.knobDefaultValues.max}
        step={this.knobDefaultValues.step}
        height={this.knobDefaultValues.height}
        width={this.knobDefaultValues.width}
        thickness={this.knobDefaultValues.thickness}
        lineCap={this.knobDefaultValues.lineCap}
        displayInput={this.knobDefaultValues.displayInput}
        onChange={this.handleKnobChange}
        />
    );
  }
}

export default Knob;