import React from "react";
import { Avatar, Input, Modal, Button, Upload, Select } from "antd";
import IntlMessages from "util/IntlMessages";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

const Option = Select.Option;
class Products extends React.Component {
    state = {
        loading: false,
        thumb: require('assets/images/placeholder.jpg'),
        fileList: []
    }
      handleChange = (value) =>{
        console.log(`selected ${value}`);
      }
    
     handleBlur = () =>{
        console.log('blur');
      }
    
      handleFocus = () =>{
        console.log('focus');
      }
    modalAction = () => {
        this.props.onClose()
    }
   
    render() {
        const { onSave, onClose, open, Product, loading } = this.props;
        const { thumb, fileList } = this.state
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div className="ant-upload-text">Product Image</div>
            </div>
        );
        return (
            <Modal
                title="Add Product"
                toggle={onClose} visible={open}
                closable={false}
                onCancel={onClose}
                style={{ top: 20 }}
                onOk={this.modalAction}
                footer={[
                    <Button className="ant-btn" key="back" onClick={onClose}>
                        Cancel
                    </Button>,
                    <Button key="submit" className="ant-btn" type="primary" loading={loading} onClick={this.modalAction}>
                        Submit
                    </Button>,
                    <Button className="ant-btn" type="primary" loading={loading} onClick={this.modalAction}>
                        Sumbit and Add New
                    </Button>,
                ]}
            >
                <div className="gx-modal-box-row">
                    <div className="gx-modal-box-form-item">
                        <div className="gx-form-group">
                            <Input
                                required
                                placeholder="Product Name"
                                margin="none" />
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Product Family"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Category"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Brand"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Manufacture"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </div>
                        <div className="gx-form-group">
                            <Input
                                placeholder="PTS"
                                autosize={{ minRows: 2, maxRows: 6 }}
                                margin="normal" />
                        </div>
                        <div className="gx-form-group">
                            <Input
                                placeholder="PTR"
                                onChange={(event) => this.setState({ designation: event.target.value })}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                margin="normal" />
                        </div>
                        <div className="gx-form-group">
                            <Input
                                placeholder="MRP"
                                onChange={(event) => this.setState({ designation: event.target.value })}
                                autosize={{ minRows: 2, maxRows: 6 }}
                                margin="normal" />
                        </div>

                        <div className="gx-form-group">
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                            >
                                {fileList.length >= 1 ? null : uploadButton}
                            </Upload>
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="status"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="0">InActive</Option>
                                <Option value="1">Active</Option>
                            </Select>
                        </div>
                    </div>
                </div>

            </Modal>
        )
    }
}

export default Products;