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

const UnitTest = () => {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    RunUnitTest();
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
  }


  return (
    <>
      <div>Unit Test</div>

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
