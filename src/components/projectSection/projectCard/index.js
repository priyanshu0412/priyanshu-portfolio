import { defaultImg } from "@/assets";
import Icon from "@/components/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProjectCard = ({ data }) => {
    return (
        <Fade duration={1000} direction="up" triggerOnce={true}>
            <div className="w-full lg:w-[450px] xl:w-[580px] 2xl:w-[600px] flex flex-col gap-y-6">
                <div className="overflow-hidden transition-transform duration-300 rounded-lg hover:scale-105 lg:w-[400px] lg:h-[200px] xl:w-[600px] xl:h-[400px]">
                    <Image
                        src={data?.projectImg || defaultImg}
                        alt="..."
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="flex flex-col gap-y-4">
                    <p className="text-2xl font-poppins text-[#B2B3B3]">
                        {data?.projectTitle}
                    </p>
                    <p className="font-poppins text-[#B2B3B3]">
                        {data?.desc}
                    </p>
                </div>
                <div>
                    <Link href={`/project${data?.url}`}>
                        <button className="flex items-center justify-center text-[#B2B3B3] font-poppins gap-x-2 hover:underline">
                            View Project
                            <Icon icon={"ph:arrow-up-right-light"} height={20} width={20} />
                        </button>
                    </Link>
                </div>
            </div>
        </Fade>
    );
};

export default ProjectCard;
