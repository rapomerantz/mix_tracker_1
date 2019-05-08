import React from 'react';

let ComponentSubdivision = function(props) {
    return (
        <div className='component-subsection-wrapper'>
            <span>{props.sectionNumber}</span>
        </div>
    );
}

export default ComponentSubdivision;