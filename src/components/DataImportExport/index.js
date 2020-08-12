import React, { useState, useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";
import { IsHasValue } from 'api/Shared/Util';
let ImportData = ({ action }) => {

    let fileReader;

    const handleFileRead = async (event) => {
        const content = fileReader.result;
        const array = content.split("\n").map(function(a){return a.trim()}) || [];
        const keys = array[0].split(",").map(function(a){return a.trim()}) || [];
        const response = [];
        let r = 0;
        array.forEach(element => {
            if (r > 0) {
                let row = {};
                if (IsHasValue(element)) {
                    let dataRow = element.split(",").map(function(a){return a.trim()}) || [];
                    let i = 0;
                    if (IsHasValue(dataRow) && dataRow.length > 0) {
                        if (IsHasValue(keys)) {
                            keys.forEach(key => {
                                if (IsHasValue(key)) {
                                    row[key] = dataRow[i];
                                }
                                i++;
                            });
                            response.push(row);
                        }
                    }
                }
            }
            r++;
        });

        await action(response);
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return (
        <>
            <div className='upload-expense'>
                <input
                    type='file'
                    id='file'
                    className='input-file'
                    accept='.csv'
                    onChange={e => handleFileChosen(e.target.files[0])}
                />
            </div>
        </>
    )
};

let ExportData = ({ data, text }) => {

    return (
        <CSVLink data={data}>
            {text}
        </CSVLink>
    );
}

export { ImportData, ExportData };