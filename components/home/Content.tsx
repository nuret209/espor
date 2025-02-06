import React from 'react'

const Content = (
    {content, title} : { content : string, title: string}
) => {
  return (
    <div className='py-5'>
        <h1 className='text-[30px] font-light mb-3'>{title}</h1>
        <h5 className='text-[#707070]'>{content}</h5>
    </div>
  )
}

export default Content