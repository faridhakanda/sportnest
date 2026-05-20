import React from 'react';

const Loading = () => {
    return (
        <div className='grid mx-auto my-auto justify-center items-center'>
        
            <span className="loading loading-spinner text-info"></span>
            {/* <span className="loading loading-ring loading-xl"></span>
            <h2 className='font-bold text-xl'>Loading...</h2> */}
        </div>
    );
};

export default Loading;