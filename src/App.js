import './App.scss';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <div className="name">
              <span>T</span>
              <span>o</span>
              <span>d</span>
              <span>a</span>
              <span>i</span>
              <span>l</span>
              <span>y</span>
            </div>
            <div className="line" />
            <div className="sub">
              <p>Effective Daily Standups</p>
              <p className="description">
                Enjoy the{' '}
                <a href="https://chrome.google.com/webstore/detail/todaily/aidlimhbkbbifgjlihhhakplpgfoljmh">
                  <img alt="" width="19" height="19" src="./chrome.png" />
                </a>{' '}
                Extension :)
              </p>
            </div>
          </div>

          <footer id="target">
            <div className="content">
              <div className="top">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://chrome.google.com/webstore/detail/todaily/aidlimhbkbbifgjlihhhakplpgfoljmh"
                >
                  <i className="fab fa-chrome" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/otomer/"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
              <div className="bottom">
                <label>
                  made with <i className="fas fa-heart beat" /> by{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.tomerovadia.com"
                  >
                    Tomer Ovadia
                  </a>{' '}
                  @ 2019
                </label>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
