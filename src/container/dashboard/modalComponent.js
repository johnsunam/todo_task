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
        if(this.props.edit){
            values.id = this.props.task.id;
            values.done = this.props.task.done;
        }
        this.props.addCategory(values);
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
                {this.props.edit ?<a onClick={this.showModal}>edit</a>:<Button type="primary" onClick={this.showModal}><Icon type="plus-circle-o" /></Button>}
                <CommonModalForm ref={this.saveFormRef} handleCancel={ this.handleCancel } {...this.props} handleOk = {this.handleOk} visible={this.state.visible}  />
        </div>
    }
}
export default ModalComponent;