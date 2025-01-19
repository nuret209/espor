import React from 'react'

import TopComponent from './TopComponent';

const MainArea = () => {
    return (
        <div className='flex flex-col px-4 lg:pl-0 lg:pr-6 text-gray-400  '>
            <TopComponent />
            <hr />
        </div>
    )
}

export default MainArea