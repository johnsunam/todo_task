import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { setCategory } from '../../actions/category'
import { Row, Col, Icon, Button, List } from 'antd';
import ModalComponent from './modalComponent';
import moment from 'moment';
import { editCategory } from '../../actions/category';
import  TaskList  from './taskListing';
import { Link, Redirect } from 'react-router-dom';


class Category extends Component {

    constructor(props){
        super(props)
        this.addTodo = this.addTodo.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    componentWillMount() {

        let category = _.findWhere(this.props.categories,{id: parseInt(this.props.match.params.category)});
        category ?this.props.setCategory(category):this.props.history.push('/');
    }

    addTodo (data) {
        data.done = false;
        data.date = data.date ?moment(data.date).format('YYYY-MM-DD'):moment().format('YYYY-MM-DD');
        data.id = `${this.props.currentCategory.id}.${this.props.currentCategory.tasks.length+1}`
        let tasks = this.props.currentCategory.tasks;
        this.props.currentCategory.items = this.props.currentCategory.items + 1;
        tasks.push(data);
        this.props.editCategory([...this.props.categories])
    }

    onDelete (item) {
        _.each(this.props.categories,category=> {
            if(category.id == this.props.currentCategory.id) {
                let tasks= _.reject(category.tasks, task => task.id == item.id)
                category.tasks =  tasks;
                category.items = tasks.length;
                this.props.setCategory({...category})
            }
        })
        this.props.editCategory([...this.props.categories]);
    }

    onEdit (data) {
        _.each(this.props.categories,category=> {
            if(category.id == this.props.currentCategory.id) {
                let task= _.find(category.tasks, task => task.id == data.id)
                task.date = moment(data.date).format('YYYY-MM-DD')
                task.name = data.name;
                this.props.setCategory({...category})
            }
        })
        this.props.editCategory([...this.props.categories]);
    }

    render () {
        return (<div>
            <div style={{ marginBottom: 10 }}>
            <Link to='/'>
             <Button type="primary"><Icon type="left" /></Button>
             </Link>
             </div>
            <Row>
                <Col span={10} style={{ backgroundColor: 'white' }} >
                <Row style={{margin: 10 }}>
                    <h2 style={{ textAlign: 'center' }}>Today</h2>
                    <Row style={{margin: 10, textAlign: 'center' }}>
                        <ModalComponent  title="Add task" placeholder={"Enter task..."} addCategory={this.addTodo} />   
                        <TaskList editTask={this.onEdit} {...this.props} onDelete={this.onDelete} changeDone = {this.changeDone} today={moment().format('YYYY-MM-DD')}/>
                    </Row>
                </Row>
                </Col>
                <Col span={10} offset={4} style={{ backgroundColor: 'white'}}>
                <Row style={{margin: 10 }}>
                    <h2 style={{textAlign: 'center'}}>Other day</h2>
                    <Row style={{ margin: 10, textAlign: 'center' }}>
                        <ModalComponent type="other" title="Add task" placeholder={"Enter task..."} addCategory={this.addTodo} />
                        <TaskList editTask={this.onEdit} {...this.props} onDelete={this.onDelete} changeDone = {this.changeDone}/>
                    </Row>
                </Row>
                </Col>
            </Row>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categoryReducer,
        currentCategory: state.currentCategoryReducer
    }
}

export default connect(mapStateToProps, { setCategory,editCategory })(Category);