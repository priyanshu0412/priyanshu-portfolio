import Image from 'next/image'
import React from 'react'
import Icon from '../icon'
import Link from 'next/link'
import { defaultImg } from '@/assets'

// ------------------------------

const SpecificProjectPage = ({ project }) => {
    return (
        <>
            <div className='flex items-center justify-center w-full py-20'>
                <div className='max-w-[1300px] flex flex-col justify-center gap-y-20 w-full px-8 pt-20'>
                    <div className='flex lg:flex-row items-start justify-center flex-col gap-x-8 gap-y-8 lg:gap-y-0'>
                        <div className='flex flex-col gap-y-8 w-full lg:w-[50%] h-full'>
                            <h2 className='text-5xl font-bold text-white'>
                                {project.projectTitle}
                            </h2>
                            <p className='text-[#b2b3b3]'>
                                {project?.projectCategory}
                            </p>
                            {project?.projectLink && <Link href={project.projectLink} legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className="text-white underline">
                                    {project?.projectLink}
                                </a>
                            </Link>}
                            <div className='flex flex-col gap-y-8'>
                                <h2 className='text-xl font-semibold text-white'>
                                    Technology Stack
                                </h2>
                                <div className='flex flex-wrap w-full gap-8'>
                                    {project.techStack?.map((tech, index) => (
                                        <div key={index} className='flex items-center justify-center px-4 py-3 rounded-full gap-x-4 backdrop-blur-xl bg-white/20 w-fit'>
                                            <Icon
                                                icon={tech.icon}
                                                className={'text-white'}
                                                height={24}
                                                width={24}
                                            />
                                            <p className='text-white'>{tech.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[50%]'>
                            <Image
                                src={project?.projectImg || defaultImg}
                                height={500}
                                width={500}
                                alt='...'
                                className='!w-full !h-auto rounded-xl hover:scale-105 transition-all ease-linear duration-300' />
                        </div>
                    </div>
                    <div
                        className="leading-loose space-y-10 text-white"
                        dangerouslySetInnerHTML={{ __html: project?.projectDesc }}
                    />
                </div>
            </div>

        </>
    )
}

export default SpecificProjectPage
