// Component with that gets json object, json path diplay name and optional update function
import React, { useState, useEffect } from 'react';


// Todo:  Still needs to be designed
const JsonConnectedTextField = ({ json, jsonPath, displayName, updateFunction }) => {
    const [value, setValue] = useState(json[jsonPath]);

    useEffect(() => {
        setValue(json[jsonPath]);
    }, [json, jsonPath]);

    const handleChange = (event) => {
        setValue(event.target.value);
        if (updateFunction) {
            updateFunction(event.target.value);
        }
    }

    return (
        <div>
            <label>{displayName}</label>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    );
}



export default JsonConnectedTextField;