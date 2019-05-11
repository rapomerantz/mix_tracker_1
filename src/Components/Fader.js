import React from 'react';
import '../App.css';
import axios from 'axios';
import BaseDevice from './BaseDevice';
import ComponentSubdivision from './ComponenetSubdivision';

class Fader extends BaseDevice {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            order: 1,
            type: 'fader',
            name: 'Kick Drum',
            value: 5,
            subsections: []
        }
    }

    componentDidMount = () => {
        this.renderSubsections(9)
        this.getUsers();
    }

    getUsers = () => {
        axios.get('/users')
        .then((response) => {
          console.log('response data', response.data);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    renderSubsections(numberOfSections) {
        let newSubsections = [];
        for (let i = 1; i <= numberOfSections; i++) {
            newSubsections.push(i);
        }
        this.setState({
            subsections: newSubsections
        });
    }

    handleValueChange = (event) => {
        console.log(event);
    }

    render () {
        let faderSections = this.state.subsections.map((sectionNumber) => {
            return <ComponentSubdivision key={sectionNumber} 
                                        sectionNumber={sectionNumber}
                                        onClick={() => this.handleValueChange(sectionNumber)}/>
        })


        return (
            <div className='fader_wrapper'>
                <div>
                    <div>
                        <pre>
                            {JSON.stringify(this.state, null, 2)}
                        </pre>                 
                    </div>
                    <div className='fader_border'>
                        {faderSections}
                    </div>
                </div>
            </div>
        );
    }
}

export default Fader;