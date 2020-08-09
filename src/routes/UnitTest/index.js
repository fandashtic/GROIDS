/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import { RunUnitTest } from 'api/UnitTest/TestData';
import {
  // Form,
  // Input,
  // Cascader,
  // Button,
  // Card,
  Upload
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
//import { UploadFile } from 'api/Shared/FileUpload';
import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';
import { CSVLink, CSVDownload } from "react-csv";
import { ImportData, ExportData } from 'components/DataImportExport';
import {ImportCompany} from 'api/Company/CompanyController';

const UnitTest = () => {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  let fileReader;

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

  useEffect(() => {
    //RunUnitTest();
  }, [image]);

  const handleChange = e => {
    if (e.target.files[0]) {
      var file = e.target.files[0];
      let newFile = new File([file], GetNewKey(PreFix.Product) + '.' + GetFileExtn(file.name));
      setImage(newFile);
    }
  };

  const upload = () => {
    FileUpload(image, image.name, PreFix.Product, setProgress, setUrl, (data, err) => {
      console.log(data);
      console.log(err);
    });
  };

  const handleFileRead = (e) => {
    const content = fileReader.result;
    console.log(content)
    // … do something with the 'content' …
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const importdata = async (data) => {
    await ImportCompany(data, async(res) => {
      console.log(res)
    });
  }

  return (
    <>
      <div>Unit Test</div>
      <br />

      <ImportData action={importdata} />

      <br />

      <ExportData data={csvData} text="Hello" />

      <br />
      <CSVLink data={csvData}>Download me</CSVLink>;

      <div>
        <progress value={progress} max="100" />
        <br />
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={upload}>Upload</button>
        <br />
        {url}
        <br />
        <img src={url} alt="firebase-image" />
      </div>
      <hr />
      <div className='upload-expense'>
        <input
          type='file'
          id='file'
          className='input-file'
          accept='.csv'
          onChange={e => handleFileChosen(e.target.files[0])}
        />
      </div>


      {/* <Upload
        listType="picture-card"
        onChange={handleUpload}
      >
        <div>
          <PlusOutlined />
          <div className="ant-upload-text">Product Image</div>
        </div>
      </Upload> */}

    </>
  )
};

export default UnitTest;
