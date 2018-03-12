import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Modal } from 'antd';
const FormItem = Form.Item;

const CommonModalForm = Form.create()(
    (props) => {
        const { visible, handleCancel, handleOk, form, placeholder } = props;
        const { getFieldDecorator } = form;
        return <Modal
                    title="Add Category"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Create"
                    >
                    <Form>
                        <FormItem>
                        {getFieldDecorator('name')(<Input placeholder={placeholder} />)}
                        </FormItem>
                    </Form>
                </Modal>
    }
)


export default CommonModalForm;