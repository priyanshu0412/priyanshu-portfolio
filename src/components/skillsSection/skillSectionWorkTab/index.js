import React from 'react'

// -----------------------------------

const SkillSectionWorkTab = ({ tabName, selectedName }) => {
    return (
        <>
            <div className='px-5 py-2 overflow-x-auto overflow-y-hidden w-fit'>
                <button className="relative 2xl:text-lg">
                    <p className={`font-semibold ${tabName === selectedName ? "text-white" : "text-white"} pb-2`}>
                        {tabName}
                    </p>
                    <span
                        className={` ${tabName === selectedName ? "bg-[#59857a]" : ""} absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 
                    ${tabName === selectedName ? "w-full" : "w-0"}`}
                    ></span>
                </button>
            </div>
        </>
    )
}

export default SkillSectionWorkTab
