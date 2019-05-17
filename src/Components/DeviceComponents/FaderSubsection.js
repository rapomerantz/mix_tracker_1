import React from 'react';

let FaderSubsection = function(props) {
    return (
        <div onClick={props.handleClick} className='fader-subsection-wrapper'>
            <span>{props.sectionNumber}</span>
        </div>
    );
};

export default FaderSubsection;