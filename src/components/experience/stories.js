import React from "react";
import Experience from "./Experience"

const props = {
    name: "Name of thte Experience/ Position Title",
    startDate: "1999-12-31",
    subText: "This is some subtext that usually is a hint/preview of the blog post. \
            Sub text is displayed when posts are truncated",
    fullText: "This is the full text of the blog post. It can render trusted html",
    icon: ""
}

export const ExperienceDemo = () => {
    return <Experience {...props} />
};
