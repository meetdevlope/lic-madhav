import Image from 'next/image'
import React from 'react'
import ButtonComponent from '../components/buttonComponent'
import ContactUsSection from '../components/contactUsSection'
import SolutionCard from '../components/solutionCard'
import Solutions from '../components/solutions'

const Insurance = () => {
    return (
        <>
            <section className="py-10">
                <div className="container flex justify-center flex-wrap gap-20 py-4 max-w-7xl mx-auto">
                    <div className="flex-1 flex flex-col justify-center tab:items-start items-center">
                        <h2>About Us</h2>
                        <h4 className="mt-8 mb-4 text-lg">
                            Ajaykumar Virsangbhai Patel
                        </h4>
                        <p>AMFI Registered Mutual Fund Distributor empaneled with HDFC Mutual Fund.</p>
                        <div className="flex gap-8">
                        </div>
                    </div>
                    <div className="relative basis-[400px] aspect-h-image h-auto rounded-3xl overflow-hidden">
                        <Image
                            priority
                            src="/images/ajaykumar_virsangbhai_patel.png"
                            layout={"fill"}
                            objectFit={"cover"}
                            objectPosition={"center"}
                            alt="subject-image"
                        />
                    </div>
                </div>
            </section>

            <Solutions />

            <div className='flex flex-wrap gap-4' >
                <SolutionCard />
                <SolutionCard />
                <SolutionCard />
                <SolutionCard />
            </div>
            <ContactUsSection />
        </>
    )
}

export default Insurance;
