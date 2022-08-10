import React from 'react'
import CardComponent from './cardComponent'
import {BiHome} from 'react-icons/bi'

const ServicesSection = () => {
  return (
    <section className='bg-gray flex flex-col justify-center items-center p-20' >
      <h2 className='mb-10' >Services</h2>
      <div className='flex justify-center items-center gap-8' >
        <CardComponent cardTitle={'Category 1'} icon={<BiHome size={'1.5rem'} />} cardDescription={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardComponent cardTitle={'Category 2'} icon={<BiHome size={'1.5rem'} />} cardDescription={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
        <CardComponent cardTitle={'Category 3'} icon={<BiHome size={'1.5rem'} />} cardDescription={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui earum nemo debitis modi, obcaecati voluptatem praesentium ipsa magnam. Iure, odio! Lorem ipsum, dolor sit amet consectetur adipisicing elit.'} />
      </div>
    </section>
  )
}

export default ServicesSection