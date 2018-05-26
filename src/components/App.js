import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import Header from '../components/Header';
import NewsItems from '../components/NewsItems';
import './App.css';
// CSS
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <Fragment>
      <div>
        <Header />
        <div className="container">
          <div className="row">
              <NewsItems />
          </div>
        </div>
      </div>
      </Fragment>
    );
  }
}

export default App;
