import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Modal, DatePicker } from 'antd';
import moment from 'moment';
const FormItem = Form.Item;

const CommonModalForm = Form.create({
    mapPropsToFields(props) {
    if(props.edit)
    return {
        name: Form.createFormField({
        ...props.task.name,
        value: props.task.name,
      }),
      date: Form.createFormField({
        ...props.task.date,
        value: moment(props.task.date, 'YYYY/MM/DD'),
      }),
    };
  },})(
    (props) => {
        const { visible, handleCancel, handleOk, form, placeholder, title } = props;
        const { getFieldDecorator } = form;
        console.log(props.edit, props.task);
        return <Modal
                    title={title}
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="Create"
                    >
                    <Form>
                        <FormItem>
                        {getFieldDecorator('name')(<Input placeholder={placeholder}  />)}
                        {props.type =='other' || props.edit ? getFieldDecorator('date')(<DatePicker format={'YYYY/MM/DD'} />):''}
                        </FormItem>
                    </Form>
                </Modal>
    }
)


export default CommonModalForm;