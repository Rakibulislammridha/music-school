import React from 'react';
import { RingLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div 
        className='
          h-[80vh]
          flex
          flex-col
          justify-center
          items-center
        '>
            <RingLoader size={130} color="#ff9300" />
        </div>
    );
};

export default Loader;