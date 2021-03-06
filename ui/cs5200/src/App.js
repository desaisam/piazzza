import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import login from './component/page/login/index';
import register from './component/page/register/index';
import school from './component/page/school-home/index';
import conversations from './component/page/conversations/index';
import sections from './component/page/section/index';
import student from './component/page/student-home/index';
import logout from './component/page/logout/index';
import professor from './component/page/professor-home/index';
import companies from './component/page/company-search/index';
import home from './component/page/home/index';
import companyProfile from './component/page/company-profile/index';
import companyHome from './component/page/company-home/index';
import careerEventDetail from './component/page/events/index';
import admin from './component/page/admin-home/index';
import './App.css';
import { Layout, Menu } from 'antd';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout style={{minHeight: '100%', maxWidth: '100%'}}>
          <Layout.Header>
            <Route path="/" component={Nav}/>
          </Layout.Header>
          <Route path="/" exact component={home}/>
          <Route path="/school/" component={school}/>
          <Route path="/login/" component={login}/>
          <Route path="/register/" component={register}/>
          <Route path="/conversations/" component={conversations}/>
          <Route path="/sections/:sectionId/:questionId?/:postId?/" exact component={sections}/>
          <Route path="/student/" component={student}/>
          <Route path="/logout/" exact component={logout}/>
          <Route path="/professor/" component={professor}/>
          <Route path="/companies/" exact component={companies}/>
          <Route path="/companies/:id/" exact component={companyProfile}/>
          <Route path="/company/" exact component={companyHome}/>
          <Route path="/events/:id/" exact component={careerEventDetail}/>
          <Route path="/admin/" component={admin}/>
        </Layout>
      </Router>
    );
  }
}

export default App;
