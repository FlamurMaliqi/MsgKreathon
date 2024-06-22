// Component with that gets json object, json path diplay name and optional update function
import React, { useState, useEffect } from 'react';

// Todo:  Still needs to be styled
const JsonConnectedTextArea = ({ json, jsonPath, displayName, updateFunction }:{
    json: any,
    jsonPath: string,
    displayName: string,
    updateFunction?: () => any
}) => {
    const [value, setValue] = useState(json[jsonPath]);

    useEffect(() => {
        setValue(json[jsonPath]);
    }, [json, jsonPath]);

    const handleChange = (event:any) => {
        json[jsonPath] = event.target.value;
        setValue(event.target.value);
        if (updateFunction) {
            updateFunction();
        }
    }

    return (
        <div>
            <label>{displayName}</label>
            <textarea value={value} onChange={handleChange} />
        </div>
    );
}

export default JsonConnectedTextArea;
