import React from 'react';

const Scroll = (props) => {

    return (
        <div style={{overflowY: 'scroll', border: '2px solid #3fe2e2', height: '600px' }}>
            {props.children}
        </div>

    )

}


export default Scroll;