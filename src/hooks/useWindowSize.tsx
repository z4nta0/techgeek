
import { useEffect } from 'react'; // this is the React useEffect hook that enables side effects in functional components (when certain code should be run and/or re-run based on changes to specific dependencies)
import { useState }  from 'react'; // this is the React useState hook that enables state management in functional components



const useWindowSize = () => {

    // these state variables are what will trigger re-renders when their values change; they can also be added to the component's useEffect() dependency array to re-run certain code on window resize events
    const [ windowSize, setWindowSize ] = useState({

        winHeiNum : window.innerHeight,
        winWidNum : window.innerWidth,

    });



    useEffect(() => {

        const hanResFun = () => {

            setWindowSize({

                winHeiNum : window.innerHeight,
                winWidNum : window.innerWidth,

            });

        };



        window.addEventListener( 'resize', hanResFun );



        // Clean up the event listener on component unmount
        return () => {

            window.removeEventListener( 'resize', hanResFun );

        };

    }, []);



    return windowSize;

};

export default useWindowSize;


