"use client"
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { PrivacyPolicyData } from '../../../data'

// ----------------------------------------

const PrivacyPolicy = () => {

    const [data, setData] = useState(PrivacyPolicyData)

    return (
        <>
            <div className="flex items-center justify-center w-full py-20">
                <div className='max-w-[1200px] flex w-full flex-col justify-center items-center px-8'>
                    <Fade direction='up' triggerOnce={true} duration={1000}>
                        {
                            data.length > 0 && data.map((ele, index) => {
                                return (
                                    <div key={index} className='flex flex-col pb-10 gap-y-6'>
                                        <p className='text-3xl font-bold leading-10 text-white'> <span>{index + 1}. </span> {ele.title}</p>
                                        <p className='text-[#b2b3b3] text-justify'>{ele.content}</p>
                                    </div>
                                )
                            })}
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
