import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Icon from '../icon'
import Image from 'next/image'
import { AboutMeSectionData } from '../../../data'
import { defaultImg } from '@/assets'

// ---------------------------------------

const AboutMeSection = () => {

    const aboutData = AboutMeSectionData[0]

    return (
        <div className='flex items-center justify-center w-full py-20' id='About'>
            <div className='flex flex-col lg:flex-row items-center justify-center max-w-[1400px] gap-y-8 lg:gap-x-8 w-full px-8 xl:px-10'>
                {/* Left Section */}
                <div className='flex flex-col w-full gap-y-8'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <div>
                            <p className='text-3xl font-bold tracking-wide text-transparent lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                                About Me
                            </p>
                        </div>
                        <div
                            className="text-[#b2b3b3] text-justify space-y-4"
                            dangerouslySetInnerHTML={{ __html: aboutData.desc }}
                        />

                        <div className='flex flex-wrap w-full gap-6'>
                            {aboutData.socialLink?.map((ele, index) => (
                                <Link key={index} href={ele.link} target='_blank' rel='noopener noreferrer'>
                                    <Icon icon={ele.icon} height={30} width={30} className={"text-white"} />
                                </Link>
                            ))}
                        </div>
                    </Fade>
                </div>

                {/* Right Section - Image */}
                <div className='h-[400px] w-full lg:w-[50%] flex justify-center items-center'>
                    <Fade duration={1000} direction='up' triggerOnce={true}>
                        <Image
                            src={aboutData?.img || defaultImg}
                            width={600}
                            className='object-cover !w-full !h-full rounded-xl'
                            height={400}
                            alt='About Me'
                        />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection
