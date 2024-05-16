import React from "react";
import { useMediaQuery } from "react-responsive";

function useDevice() {
    const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 640 });
    return isTablet ? "tablet" : isMobile ? "mobile" : "desktop";
}

export default useDevice;