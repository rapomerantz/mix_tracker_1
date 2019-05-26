import React from 'react';

let FaderSubsection = function(props) {
    let faderSectionClass = 'fader-subsection-wrapper';
    if (props.faderValue === props.sectionNumber) {
        faderSectionClass = 'fader-subsection-wrapper fader-subsection-selected'
    }

    return (
        <div onClick={props.handleValueChange} className={faderSectionClass}>
            <span>{props.sectionNumber}</span>
        </div>
    );
};

export default FaderSubsection;