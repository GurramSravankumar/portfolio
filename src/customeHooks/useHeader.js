import { useState, useEffect } from "react";

function useHeaderTransition(homeId = "home", triggerPercent = 0.85){

    const [showImageHeader, setShowImageHeader] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const home = document.getElementById(homeId);

            if(!home) return;

            const triggerPoint = home.offsetHeight * triggerPercent;

            if(window.scrollY >= triggerPoint){

                setShowImageHeader(true);

            }else{

                setShowImageHeader(false);

            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [homeId, triggerPercent]);

    return showImageHeader;

}

export default useHeaderTransition;
