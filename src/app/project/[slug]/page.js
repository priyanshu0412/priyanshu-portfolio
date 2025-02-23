"use client";
import React from "react";
import NotFound from "@/app/not-found";
import { SpecificProjectPage } from "@/components";
import { ProjectData } from "../../../../data";

const ProjectPage = ({ params }) => {
    const { slug } = React.use(params); // Unwrap params

    // Find the project using the static data
    const project = ProjectData.find((proj) => proj.url === `/${slug}`);

    if (!project) {
        return <NotFound />;
    }

    return <SpecificProjectPage project={project} />;
};

export default ProjectPage;
