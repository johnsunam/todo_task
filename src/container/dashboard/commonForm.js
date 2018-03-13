import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Modal, DatePicker } from 'antd';
const FormItem = Form.Item;

const CommonModalForm = Form.create()(
    (props) => {
        const { visible, handleCancel, handleOk, form, placeholder, title } = props;
        const { getFieldDecorator } = form;
        return <Modal
                    title={title}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Create"
                    >
                    <Form>
                        <FormItem>
                        {getFieldDecorator('name')(<Input placeholder={placeholder} />)}
                        {props.type =='other'? getFieldDecorator('date')(<DatePicker />):''}
                        </FormItem>
                    </Form>
                </Modal>
    }
)


export default CommonModalForm;