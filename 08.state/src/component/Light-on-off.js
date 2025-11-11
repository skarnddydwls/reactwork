import { useState } from "react";

const Light_on_off = () => {
    const [light, setLight] = useState(true);
    
    return (
        <>
            {light ? <h2 style={{backgroundColor: 'yellow'}}>On</h2> : <h2 style={{backgroundColor: 'white'}}>Off</h2>}
            <button onClick={() => {setLight(!light)}}>
                {light ? "Off" : "On"}
            </button>
        </>
    )
}

export default Light_on_off;