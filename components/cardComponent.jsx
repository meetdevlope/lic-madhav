import React from 'react'

const CardComponent = ({icon, cardTitle, cardDescription}) => {
  return (
      <div className='bg-white w-72 p-8 flex flex-col items-center rounded-2xl' >
        {icon}
          <h3 className='m-4 text-pink' >{cardTitle}</h3>
          <p className='text-black text-center' >{cardDescription}</p>
      </div>
  )
}

export default CardComponent