import { useEffect } from "react";

const Cleanup = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("tick");
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("cleanup");
        };
    }, []);

    return (
        <div>
            Cleanup Exercise
        </div>
    );
}
export default Cleanup;