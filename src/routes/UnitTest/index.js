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
import { IsHasValue, GetNewKey, GetFileExtn, EnCode, DeCode } from 'api/Shared/Util';

const UnitTest = () => {

  useEffect(() => {
    RunUnitTest();
  }, []);

  const handleFileUploadChange = (files) => {
    if (IsHasValue(files) && files.fileList.length > 0 && IsHasValue(files.fileList[0])) {
      let file = files.fileList[0];
      let fileName = GetNewKey(PreFix.Product) + '.' + GetFileExtn(file.name);
      file.name = fileName;
      UploadFile(file, PreFix.Product, (res) => {
        //console.log(res);
        console.log(res.data.bucket);
        console.log(res.data.key);
        console.log(res.data.location);
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
