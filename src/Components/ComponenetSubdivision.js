import React from 'react';

let ComponentSubdivision = function(props) {
    return (
        <div className='component-subsection-wrapper' 
            onClick={props.handleValueChange}
            value={props.sectionNumber}>
            <span>{props.sectionNumber}</span>
        </div>
    );
}

export default ComponentSubdivision;