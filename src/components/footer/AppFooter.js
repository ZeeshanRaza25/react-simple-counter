import React, { Component } from 'react';
import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <h5>Made with <span style={{ color: 'red' }}>&#9829;</span> by <a
          target="_blank"
          href="https://www.facebook.com/muhammadzeeshan008">Zeeshan Raza
          </a>
          <br />
        </h5>
      </div>
    );
  }
}

export default AppFooter;
