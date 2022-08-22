import Image from 'next/image'
import React from 'react'

const SolutionCard = () => {
    return (
        <div className='relative h-[400px] w-[350px] m-4 rounded-md overflow-hidden [&>div]:hover:translate-y-0 [&>div]:hover:bg-[rgba(0,0,0,0.8)] [&>div>div>h3]:hover:text-brand-light' >
            <Image
                layout='fill'
                alt='card-image'
                src={'https://ajaykumarvirsangbhaipatel.mutualfundpartner.com/manager/uploads/thumb_img/962317976.jpg'}
                className="rounded-md"
            />
            <div className='bg-gradient-to-t from-black via-black w-full h-full absolute flex flex-col justify-end p-8 rounded-md translate-y-36 transition-all duration-200' >
                <div>
                    <h3 className='text-white text-3xl mb-4' >Weekend Bytes - Keep Your Emotions ..</h3>
                    <p>Most investors cannot avoid worrying as they experience volatility or fluctuations in their equity portfolio. Over the last two years, aided..</p>
                </div>
                <p className='mt-4' >Article  I
                    09 - 02 - 2022</p>
            </div>
        </div>
    )
}

export default SolutionCard