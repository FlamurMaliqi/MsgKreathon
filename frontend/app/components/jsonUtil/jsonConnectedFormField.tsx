"use client"
// Component with that gets json object, json path diplay name and optional update function
import React, { useState, useEffect } from 'react';


// Todo:  Still needs to be styled
const JsonConnectedTextField = ({ json, jsonPath, displayName, updateFunction, className }:{
    json: any,
    jsonPath: string,
    displayName: string,
    updateFunction?: () => any,
    className?: string

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
            <input type="text"  id ={displayName} onChange={handleChange} placeholder={value} className={className}/>
        </div>
    );
}



export default JsonConnectedTextField;