import React from 'react';

const Searchbox = ({searchfunction}) => {
          return (
            <div  className="pa2">
            <input 
            aria-label="Search Robots"
            className= "tc pa2 ba b--green bg-light-blue"
            type="search" 
            placeholder="search robot"
            onChange={searchfunction}
            />
            </div>


        );
    }

export default Searchbox;