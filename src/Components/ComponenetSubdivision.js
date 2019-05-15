import React from 'react';

let ComponentSubdivision = function(props) {
    return (
        <div onClick={props.handleClick} className='component-subsection-wrapper'>
            <span>{props.sectionNumber} !!</span>
        </div>
    );
};

export default ComponentSubdivision;