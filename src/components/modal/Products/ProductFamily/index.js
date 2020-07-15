import React from "react";
import { Input, Modal, Button, Upload, Select } from "antd";
import IntlMessages from "util/IntlMessages";

const Option = Select.Option;

class Index extends React.Component {
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
       
        return (
            <Modal
                title="Add Product Family"
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
                                placeholder="Family Name"
                                margin="none" />
                        </div>
                        <div className="gx-form-group">
                            <Select
                                style={{ width: "100%" }}
                                placeholder="Manufacture"
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            >
                                <Option value="0">InActive</Option>
                                <Option value="1">Active</Option>
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
                                <Option value="0">InActive</Option>
                                <Option value="1">Active</Option>
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
                                <Option value="0">InActive</Option>
                                <Option value="1">Active</Option>
                            </Select>
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

export default Index;