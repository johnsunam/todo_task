import React, { Component } from 'react';
import { Modal, Form ,  Icon, Button } from 'antd';
import CommonModalForm from './commonForm';


class ModalComponent extends Component {

    constructor (props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
    }
    handleOk = () => {
        const form = this.form;
        form.validateFields((err, values) => {
        if (err) {
            return;
        }
        this.props.addCategory(values)
        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
        });
    }
    
    handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
    }

    saveFormRef = (form) => {
        this.form = form;
    }

    render () {
        return <div> 
                <Button type="primary" onClick={this.showModal}><Icon type="plus-circle-o" /></Button>
                <CommonModalForm ref={this.saveFormRef} handleCancel={ this.handleCancel } {...this.props} handleOk = {this.handleOk} visible={this.state.visible}  />
        </div>
    }
}
export default ModalComponent;