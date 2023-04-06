import React from "react";
import AboutMe from "./AboutMe"

const props = {
    title: "About Me",
    text: "This is some content about me"
}

export const AboutMeDemo = () => {
    return <AboutMe {...props} />
};


