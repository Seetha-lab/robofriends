import React from 'react';
import AspectRatio from 'react-aspect-ratio';

const Robocard = (props) => {
        return (
            
                   <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                         <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
                                <img src={`https://robohash.org/${props.id}?bgset=any`} alt={props.id} />
                        </AspectRatio>
                    <div>
                    <h2>{props.name}</h2>
                    <p>{props.email}</p>    
                    </div>
                    </div>
       
          );
    }

export default Robocard;