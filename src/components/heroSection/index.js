"use client"
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { HeroSectionData } from '../../../data';

// ---------------------------------------------------

const HeroSection = () => {
    return (
        <div className='flex items-center justify-center w-full py-20 lg:pt-40'>
            <Fade duration={1000} direction='up' triggerOnce={true}>
                <div className='w-full max-w-[1200px] flex flex-col justify-center items-center gap-y-8 px-8'>
                    {HeroSectionData.length > 0 && HeroSectionData.map((ele, index) => (
                        <div className='flex flex-col w-full gap-y-8' key={index}>
                            <div>
                                <p className='text-white text-3xl lg:text-5xl font-bold leading-9 lg:leading-[60px] tracking-wider text-center font-poppins'>
                                    {ele?.title}
                                    <span className='text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                                        {ele?.colorText}
                                    </span>
                                </p>
                            </div>
                            <div>
                                <p className='text-justify lg:text-center text-[#b2b3b3] text-base lg:text-lg'>{ele?.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className='flex items-center w-full gap-x-2 justify-evenly lg:justify-center lg:gap-x-8'>
                        {/* <a
                            href='/PriyanshuResume.pdf'
                            download='/PriyanshuResume.pdf'
                            className='w-fit text-[#000] bg-[#b2b3b3] p-3 lg:px-6 lg:py-3 rounded-full hover:bg-[#ffffffc0]'
                        >
                            Download Resume
                        </a> */}
                        <Link className='w-fit' href={'/contact'}>
                            <Link href="/contact" className="w-fit">
                                <ShinyTextButton
                                    text="Contact"
                                    shineColor="#ffffff"
                                    fontSize="1rem"
                                    fontWeight="600"
                                    borderRadius="9999px" // Fully rounded like `rounded-full`
                                    padding="0.75rem 1.5rem" // Same as `p-3 lg:px-6 lg:py-3`
                                    backgroundColor="transparent"
                                    border="2px solid #b2b3b3"
                                    color="#b2b3b3"
                                    hoverColor="#ffffff"
                                    hoverBorder="2px solid #ffffff"
                                />
                            </Link>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default HeroSection;