import React from 'react';

const Title = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-10'>
            <p className='text-orange-600 text-xl'>---- {subHeading} ----</p>
            <h2 className='text-3xl uppercase font-bold border-t-4 mt-2 border-gray-200 border-b-4'>{heading}</h2>
        </div>
    );
};

export default Title;