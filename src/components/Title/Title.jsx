import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-10'>
            <p className='text-orange-600 text-xl'>---- {subHeading} ----</p>
            <h2 className='text-4xl uppercase font-bold'>{heading}</h2>
        </div>
    );
};

export default Title;