"use client"
import React, { useState } from "react";

const FAQs = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-gray-800 p-5 rounded-lg w-full cursor-pointer transition-all"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{data.question}</h3>
                <span className="text-white text-xl">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && <p className="mt-3 text-gray-300">{data.answer}</p>}
        </div>
    );
};

export default FAQs;
