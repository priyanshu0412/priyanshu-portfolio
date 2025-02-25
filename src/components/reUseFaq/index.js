"use client"
import React, { useState } from 'react';
import FAQs from './faqs';
import { faqData } from '../../../data';

const ReUseFaq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex items-center justify-center w-full" id="Faqs">
            <div className="max-w-[1000px] w-full py-10 flex flex-col gap-y-20 justify-center items-center px-8 2xl:px-0">
                <div>
                    <h2 className="text-3xl font-bold tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text">
                        If there is any FAQ, here it is.
                    </h2>
                </div>
                <div className="flex flex-col w-full gap-y-8">
                    {faqData.length > 0 &&
                        faqData.map((ele, index) => (
                            <FAQs
                                data={ele}
                                key={index}
                                index={index}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default ReUseFaq;
