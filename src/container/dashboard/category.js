import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { setCategory } from '../../actions/category'
import { Row, Col, Icon, Button } from 'antd';
import ModalComponent from './modalComponent';
import moment from 'moment';
import { editCategory } from '../../actions/category';

class Category extends Component {

    constructor(props){
        super(props)
        this.addTodo = this.addTodo.bind(this);
       

    }
    componentDidMount() {
        let category = _.findWhere(this.props.categories,{id: parseInt(this.props.match.params.category)});
        this.props.setCategory(category);
    }

    addTodo(data) {
        data.done = false;
        data.date = data.date ?moment(data.date).format('YYYY-MM-DD'):moment().format('YYYY-MM-DD');
        let tasks = this.props.currentCategory.tasks;
        this.props.currentCategory.items = this.props.currentCategory.items + 1;
        tasks.push(data);
        this.props.editCategory([...this.props.categories])
    }

    render () {
        return (<div>
            <Row>
                <Col span={10} style={{ backgroundColor: 'white' }} >
                <Row style={{margin: 10 }}>
                    <h2 style={{ textAlign: 'center' }}>Today</h2>
                    <Row style={{margin: 10, textAlign: 'center' }}>
                        <ModalComponent title="Add task" placeholder={"Enter task..."} addCategory={this.today} />
                        
                    </Row>
                </Row>
                </Col>
                <Col span={10} offset={4} style={{ backgroundColor: 'white'}}>
                <Row style={{margin: 10 }}>
                    <h2 style={{textAlign: 'center'}}>Other day</h2>
                    <Row style={{ margin: 10, textAlign: 'center' }}>
                        <ModalComponent type="other" title="Add task" placeholder={"Enter task..."} addCategory={this.addTodo} />
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