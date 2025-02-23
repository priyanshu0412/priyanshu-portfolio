import Icon from '@/components/icon'
import { useMediaQuery } from '@mui/system'
import React from 'react'
// ------------------------------------

const SkillsWorkSection = ({ data }) => {

    const xd = useMediaQuery('(min-width:768px) and (max-width:1023px)')
    const xg = useMediaQuery('(min-width:1024px) and (max-width:1279px)')
    const xl = useMediaQuery('(min-width:1280px) and (max-width:1535px)')
    const xl2 = useMediaQuery('(min-width:1536px)')

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full p-4 gap-y-3 '>
                <div className='flex items-center flex-col gap-2 justify-center hover:scale-[1.05] transform duration-300' >
                    <Icon
                        icon={data?.iconName || ""}
                        height={(xd ? 44 : xg ? 44 : xl ? 44 : xl2 ? 54 : 34)}
                        width={(xd ? 44 : xg ? 44 : xl ? 44 : xl2 ? 54 : 34)}
                        className="cursor-pointer md:text-5xl "></Icon>
                    <p className='text-xs text-center cursor-pointer text-nowrap md:text-sm 2xl:text-base'>
                        {data?.skillName || ""}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SkillsWorkSection
