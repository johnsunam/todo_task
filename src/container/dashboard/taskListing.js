import React from 'react';
import { connect } from 'react-redux';
import {  List, Switch} from 'antd';
import moment from 'moment';
import _ from 'underscore';
import { setCategory, editCategory } from '../../actions/category';
import ModalComponent from './modalComponent';

const TaskList = props => {
    let data = props.today ? _.filter(props.currentCategory.tasks,task => props.today == task.date):_.filter(props.currentCategory.tasks, task=> moment().format('YYYY-MM-DD') != task.date);
    data = data ? data:[];
    return <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (<List.Item actions={item.done ?[<a onClick={() => props.onDelete(item) }>delete</a>]:[<a onClick={() => props.onDelete(item) }>delete</a>, <ModalComponent title="Add task" placeholder={"Enter task..."} task={item} addCategory={props.editTask} edit={ true }/>]}>
        <List.Item.Meta
        title={<span><Switch defaultChecked={item.done} onChange={ done => {
            item.done = done;
            props.setCategory({...props.currentCategory});
            _.each(props.categories,category=> {
                if(category.id == props.currentCategory.id){
                    category = {...props.currentCategory};
                }
            })
            props.editCategory([...props.categories])
        }} checkedChildren='done' unCheckedChildren="not done" /><a href="https://ant.design">{item.name}</a></span>}
        />
        <div>{item.date}</div>
    </List.Item>)
         
        
    }
/>
}

function mapStateToProps (state) {
    return  {
        categories: state.categoryReducer
    }
}

export default connect(mapStateToProps, { setCategory,editCategory })(TaskList);