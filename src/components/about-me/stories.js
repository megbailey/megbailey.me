import React from "react";
import AboutMe from "./AboutMe"

const props = {
    title: "About Me",
    content: "This is some content about me"
}

export const AboutMeDemo = () => {
    return <AboutMe {...props} />
};


