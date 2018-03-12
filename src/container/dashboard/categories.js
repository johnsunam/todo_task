import React, { Component } from 'react';
import { Layout , Menu, Breadcrumb, Card, Row, Col, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import ModalComponent from './modalComponent';
import { addCategory } from '../../actions/category'
import { Link } from 'react-router-dom';


class Categories extends Component {
    

    render () {
        return  <div> 
                    <ModalComponent placeholder={"Enter category name..."} addCategory={this.props.addCategory} />
                    <Row style={{ padding: 24, minHeight: 500 }} gutter={16}>
                        {this.props.categories.map( (category, key) => <Col key={key} span={4}>
                            <Link to="/category"  >
                                <Card title={category.name} bordered={false}>
                                    Items: {category.items}
                                </Card>
                            </Link>
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

export default connect(mapStateToProps,{addCategory})(Categories);