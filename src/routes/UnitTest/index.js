/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react'
import { RunUnitTest } from 'api/UnitTest/TestData';
import { Upload } from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
//import { UploadFile } from 'api/Shared/FileUpload';
import { FileUpload } from 'api/Shared/Firestore';
import { PreFix } from 'api/Shared/Constant/Enum';
import { GetNewKey, GetFileExtn } from 'api/Shared/Util';
import { CSVLink, CSVDownload } from "react-csv";
import { ImportData, ExportData } from 'components/DataImportExport';
import { ImportCompany } from 'api/Company/CompanyController';
import { AddTemplate } from 'api/Shared/Common';

const UnitTest = () => {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  let fileReader;

  const csvData = [
    ["firstname,lastname,email"],
    ["Ahmed,Tomi,ah@smthing.co.com"],
    ["Raed,Labes,rl@smthing.co.com"],
    ["Yezzi,Min l3b,ymin@cocococo.com"]
  ];

  useEffect(() => {
    //RunUnitTest();
    addDefaultTemplate();
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
    await ImportCompany(data, async (res) => {
      console.log(res);
    });
  }

  const addDefaultTemplate = async () => {
    const CompanyTemplate = { 'data': 'company_id,company_name,email,mobilenumber,contactperson,billing_address,tin,gst,logo,banner' };
    const AreaTemplate = { 'data': 'area_id,area_name,area_type,country_id,country_name,state_id,state_name,city_id,city_name,company_id,company_name,store_id,store_name,profile_image_url,pincode' };
    const BrandTemplate = { 'data': 'brand_id,brand_name,manufacture_id,manufacture_name,company_id,company_name,store_id,store_name,profile_image_url' };
    const CityTemplate = { 'data': 'city_id,city_name,state_id,state_name,country_id,country_name,company_id,company_name,store_id,store_name,profile_image_url' };
    const CountryTemplate = { 'data': 'country_id,country_name,profile_image_url' };
    const ProductTemplate = { 'data': 'product_id,product_name,manufacture_id,manufacture_name,brand_id,brand_name,product_category_id,product_category_name,product_family_id,product_family_name,description,company_id,company_name,store_id,store_name,profile_image_url' };
    const ProductCategoryTemplate = { 'data': 'product_category_id,product_category_name,manufacture_id,manufacture_name,brand_id,brand_name,company_id,company_name,store_id,store_name,profile_image_url' };
    const ProductFamilyTemplate = { 'data': 'product_family_id,product_family_name,product_category_id,product_category_name,brand_id,brand_name,manufacture_id,manufacture_name,company_id,company_name,store_id,store_name,profile_image_url' };
    const StateTemplate = { 'data': 'state_id,state_name,country_id,country_name,profile_image_url' };
    const StoreTemplate = { 'data': 'store_id,store_name,store_type,company_id,company_name,billing_address,shipping_address,area_id,area_name,city_id,city_name,state_id,state_name,country_id,country_name,pincode,latitude,longitude,email,mobilenumber,contactperson,tin,gst,logo,banner,business_days_hours,delivery_days_hours' };
    const UserTemplate = { 'data': 'user_id,email_id,user_name,password,first_name,last_name,user_type,company_id,company_name,store_id,store_name,profile_image_url' };

    const callback = (data, err) => {
      console.log(data, err);
    };

    AddTemplate('company', CompanyTemplate, callback);
    AddTemplate('area', AreaTemplate, callback);
    AddTemplate('brand', BrandTemplate, callback);
    AddTemplate('city', CityTemplate, callback);
    AddTemplate('country', CountryTemplate, callback);
    AddTemplate('product', ProductTemplate, callback);
    AddTemplate('productCategory', ProductCategoryTemplate, callback);
    AddTemplate('productFamily', ProductFamilyTemplate, callback);
    AddTemplate('state', StateTemplate, callback);
    AddTemplate('store', StoreTemplate, callback);
    AddTemplate('user', UserTemplate, callback);
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
