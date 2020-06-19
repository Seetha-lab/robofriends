import React from 'react';

const Robocard = (props) => {
        return (
            
                   <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                    <img src={`https://robohash.org/${props.id}?size=525x525&bgset=any`} alt={props.id} />
                    <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>
                    </div>
                    </div>
       
          );
    }

export default Robocard;