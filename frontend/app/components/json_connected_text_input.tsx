// Component with that gets json object, json path diplay name and optional update function
import React, { useState, useEffect } from 'react';


// Todo:  Still needs to be styled
const JsonConnectedTextField = ({ json, jsonPath, displayName, updateFunction }:{
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
        setValue(event.target.value);
        if (updateFunction) {
            updateFunction();
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