"use client";
import React from "react";

const FAQs = ({ data, index, isOpen, onToggle }) => {
    return (
        <div
            className="bg-white/30 backdrop-blur-lg p-6 rounded-lg w-full cursor-pointer transition-all ease-in-out duration-300 hover:shadow-xl border border-transparent hover:border-gray-400"
            onClick={onToggle}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{data.question}</h3>
                <span className="text-white text-xl">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && (
                <p className="mt-3 text-gray-300 text-sm transition-opacity duration-300 ease-in-out opacity-100">
                    {data.answer}
                </p>
            )}
        </div>
    );
};

export default FAQs;
