import React from 'react';
import '../App.css';
import axios from 'axios';
import BaseDevice from './BaseDevice';
import ComponentSubdivision from './ComponenetSubdivision';

class Fader extends BaseDevice {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            id: 1,
            order: 1,
            type: 'fader',
            name: 'Kick Drum',
            value: 5,
            subsections: [],
        }
    }

    componentDidMount = () => {
        this.renderSubsections(9);
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
        for (let i = 1; i <= numberOfSections; i++) {
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
            return <ComponentSubdivision key={sectionNumber} sectionNumber={sectionNumber}
                                         handleClick={() => this.handleClick(sectionNumber)}/>
        });


        return (
            <div className='fader_wrapper'>
                <div>
                    <div>
                        <pre>
                            {JSON.stringify(this.state, null, 2)}
                        </pre>                 
                    </div>
                    {this.testSection}
                    <div className='fader_border'>
                        {faderSections}
                    </div>
                </div>
            </div>
        );
    }
}

export default Fader;