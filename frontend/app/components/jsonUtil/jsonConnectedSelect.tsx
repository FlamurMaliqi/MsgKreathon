"use client"
// Component with that gets json object, json path diplay name and optional update function
import React, { useState, useEffect } from 'react';


// Todo:  Still needs to be styled
const JsonConnectedSelect = ({ json, jsonPath, displayName, updateFunction, className, selectables }:{
    json: any,
    jsonPath: string,
    displayName: string,
    updateFunction?: () => any,
    className?: string
    selectables: any

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

    if (value == undefined) {
        // Set value to first key in selectables
        setValue(Object.keys(selectables)[0]);
        json[jsonPath] = Object.keys(selectables)[0];
    }

    return (
        <div>
           

            <select id={displayName} value={value} className={className} onChange={handleChange}>
                {Object.keys(selectables).map((key) => {
                    return <option value={key}>{selectables[key]}</option>
                })}

            </select>
        </div>
    );
}



export default JsonConnectedSelect;