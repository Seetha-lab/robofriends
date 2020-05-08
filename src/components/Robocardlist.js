import React from 'react';
import Robocard from './Robocard';

const Robocardlist = ({robots}) => {
       return(
           <div>
            {
               robots.map((user,i) => { 
                return ( <Robocard 
                key={robots[i].id} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>
                )
               })
            }
            </div>  
        );
  }

export default Robocardlist;