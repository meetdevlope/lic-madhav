import React from 'react'

const logos = [
    {
        image: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/samsung-logo.png'
    },
    {
        image: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png'
    },
    {
        image: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png'
    },
    {
        image: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/facebook-logo.png'
    },
    {
        image: 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/coca-cola-logo.png'
    },
]

const FeaturedSection = () => {
    return (
        <section className=' flex justify-center items-center flex-col p-12 tab:p-20' >
            <h2>Featured in</h2>
            <div className='flex justify-center items-center flex-wrap' >
                {logos.map((logo, index) => {
                    return (
                        <img src={logo.image} key={index} className='w-20' />
                    )
                })}
            </div>
        </section>
    )
}

export default FeaturedSection