import React, { useState, useEffect } from 'react';

const JsonConnectedCheckbox = ({ json, jsonPath, displayName, updateFunction }: {
    json: any,
    jsonPath: string,
    displayName: string,
    updateFunction?: () => any
}) => {
    const [value, setValue] = useState(json[jsonPath]);

    useEffect(() => {
        setValue(json[jsonPath]);
    }, [json, jsonPath]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked);
        if (updateFunction) {
            updateFunction();
        }
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={value} onChange={handleChange} />
                {displayName}
            </label>
        </div>
    );
}

export default JsonConnectedCheckbox;
