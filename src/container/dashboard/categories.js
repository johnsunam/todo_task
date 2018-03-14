import React, { Component } from 'react';
import { Layout , Menu, Breadcrumb, Card, Row, Col, Modal, Button, Icon } from 'antd';
import { connect } from 'react-redux';
import ModalComponent from './modalComponent';
import { addCategory, editCategory } from '../../actions/category'
import { Link } from 'react-router-dom';
import _ from 'underscore';

class Categories extends Component {
    

    render () {
        const self = this;
        return  <div> 
                    <ModalComponent title="Add Category" placeholder={"Enter category name..."} addCategory={this.props.addCategory} />
                    <Row style={{ padding: 24 }} gutter={16}>
                        {this.props.categories.map( (category, key) => <Col key={key} span={4}>
                            
                                <Card title={<div>{category.name} <span>{category.id != 1 && <a style={{ margin: 5 }}  onClick={() => {
                                    let categories = _.reject(self.props.categories, cat => cat.id == category.id)
                                    self.props.editCategory([...categories]);
                                }}><Icon type="delete" /></a>}<Link to={`/${category.id}`}  ><a><Icon type="edit" /></a></Link></span></div>} bordered={false}>
                                    Items: {category.items}
                                </Card>
                            
                            </Col>
                        )}
                    </Row>
                </div>
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categoryReducer
    }
}

export default connect(mapStateToProps,{addCategory, editCategory})(Categories);