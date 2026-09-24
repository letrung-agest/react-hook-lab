import { useEffect, useMemo, useState } from "react";

const Basic = () => {
    const [x, setX] = useState(0);

    const handleClick = () => {
        setX((x) => x + 1);
    };

    // 1. No dependency
    useEffect(() => {
        console.log("Effect runs - No dependency");
    });

    // 2. Empty dependency
    useEffect(() => {
        console.log("Effect runs - Empty dependency");
    }, []);

    // 3. Dependency [x]
    useEffect(() => {
        console.log("Effect runs - dependency [x]");
    }, [x]);

    // 4. Render → Effect
    console.log("Render");

    return (
        <>
            <div>
                <h3>No dependency (view log check: Effect runs)</h3>
            </div>

            <hr />

            <div>
                <h3>[]</h3>
                <h4>{x}</h4>
                <button onClick={handleClick}>Click</button>
            </div>

            <hr />

            <div>
                <h3>[dependency]</h3>
                <h4>{x}</h4>
            </div>

            <hr />
        </>
    );
};

export default Basic;