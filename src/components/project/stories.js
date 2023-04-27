import React from "react";
import Project from "./Project"
import ProjectCard from "./ProjectCard"

const props = { 
    title: "This is a project title",
    description: "This is a project description"
}

export const ProjectDemo = () => {
    return <Project {...props} />
};

export const ProjectCardDemo = () => {
    return <ProjectCard {...props} />
};
