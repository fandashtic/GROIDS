import React, { useState, useEffect } from 'react';
import { CSVLink, CSVDownload } from "react-csv";

let ImportData = ({ action }) => {

    let fileReader;

    const handleFileRead = async (event) => {
        const content = fileReader.result;
        await action(content);
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
            { text }
        </CSVLink>
    );
}

export { ImportData, ExportData };