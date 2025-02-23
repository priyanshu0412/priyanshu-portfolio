import React from 'react'
import Icon from '../icon'
import Link from 'next/link'
import { footerData } from '../../../data'

// ----------------------------------------

const Footer = () => {
    return (
        <>
            <div className='bottom-0 flex items-center justify-center w-full py-20'>
                <div className='max-w-[1300px] flex-col px-8 flex justify-center items-center border-red w-full'>
                    <div className='flex flex-col w-full lg:flex-row justify-evenly'>
                        <div className='flex flex-col w-full gap-y-4 lg:w-fit'>
                            <div>
                                <p className="text-3xl font-bold tracking-wider text-transparent cursor-pointer bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text font-poppins">
                                    Priyanshu
                                </p>
                            </div>
                            <div>
                                <p className='font-poppins text-[#b2b3b3]'>
                                    Turning ideas into responsive and dynamic web solutions.
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-around w-full pt-16 lg:pt-0 lg:justify-evenly'>
                            {/* Pages Section */}
                            <div className='flex flex-col w-fit gap-y-8 [&>p]:font-poppins'>
                                <p className='font-extrabold text-white'>
                                    Pages
                                </p>
                                {footerData[0]?.pages?.map((page, index) => (
                                    <Link key={index} href={page?.url}>
                                        <p className='text-[#b2b3b3]'>
                                            {page?.name}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                            {/* Socials Section */}
                            <div className='flex flex-col w-fit gap-y-8'>
                                <div>
                                    <p className='font-extrabold text-white font-poppins'>
                                        Follow Me on
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center gap-y-8'>
                                    {footerData[0]?.socials?.map((social, index) => (
                                        <div key={index} className='flex items-center cursor-pointer gap-x-4'>
                                            <Link href="#" className="flex items-center gap-x-4">
                                                <Icon
                                                    icon={social?.icon}
                                                    height={20}
                                                    width={20}
                                                    className='text-white' />
                                                <p className='text-[#b2b3b3]'>
                                                    {social?.platform}
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-20'>
                        <p className='text-[#b2b3b3] font-poppins'>
                            &copy; 2024 Priyanshu All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
