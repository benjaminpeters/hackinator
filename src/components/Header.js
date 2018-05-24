import React, { Component } from "react";
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="bg-light pt-4 pb-4 mb-4">
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
          <a className="navbar-brand" href="">
            Hackinator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form id="search" className="form-inline m-auto">
              <i className="fa fa-search search-icon"></i>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
        </div>
      </header>
    );
  }
}

export default Header;
