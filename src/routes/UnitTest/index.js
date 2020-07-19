import React, { useEffect } from 'react'
import { RunUnitTest } from 'api/UnitTest/TestData';
import {
  Form,
  Input,
  Cascader,
  Button,
  Card,
  Upload
} from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { UploadFile } from 'api/Shared/FileUpload';
import { PreFix } from 'api/Shared/Constant/Enum';
import { IsHasValue, GetNewKey, GetKeyNameFromObject, EnCode, DeCode } from 'api/Shared/Util';

const UnitTest = () => {

  useEffect(() => {
    console.log(EnCode('9LWy6ICixkHnNmNRNuiUbzwWnEr4i8eIhrLFMQ1+'));
    console.log(DeCode('OUxXeTZJQ2l4a0huTm1OUk51aVViendXbkVyNGk4ZUlockxGTVExKw=='));
    RunUnitTest();
  }, []);

  const handleFileUploadChange = (files) => {
    if (IsHasValue(files) && files.fileList.length > 0 && IsHasValue(files.fileList[0])) {
      console.log(files.fileList[0]);
      let file = files.fileList[0];
      let fileName = GetNewKey(PreFix.Product) + '.jpg';
      file.name = fileName;

      UploadFile(file, PreFix.Product, (res) => {
        debugger;

      })
    }

  }

  return (
    <>
      <div>Unit Test</div>
      <Upload
        listType="picture-card"
        onChange={handleFileUploadChange}
      >
        <div>
          <PlusOutlined />
          <div className="ant-upload-text">Product Image</div>
        </div>
      </Upload>

    </>
  )
}

export default UnitTest;
