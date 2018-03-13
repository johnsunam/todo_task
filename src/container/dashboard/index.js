import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Layout , Menu, Breadcrumb, Card, Row, Col } from 'antd';
import  Categories  from './categories';
import Category from './category';
const { Header, Footer, Sider, Content } = Layout;

class Dashboard extends Component {

    render () {
        return <Layout>
        <Header style={{width: '100%' }}>
          <h2 className='header-title'> Todo Task </h2>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64,  minHeight: 500  }}>
         {this.props.children}
        </Content>
      </Layout>
    }
}

function mapStateToProps (state) {
    return {
      categories: state.categoryReducer,
      currentCategory: state.currentCategoryReducer
    }
}

export default withRouter(connect(mapStateToProps)(Dashboard));