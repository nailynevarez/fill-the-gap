import React from 'react';
import logo from './logo.svg';
import './stylesheets/app.css';
import About from './About.js';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import Fourth from './Fourth.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 'fourth',
    };
  }

render() {
  let component = null;
      switch (this.state.activePage) {
        case 'about':
          component = <About/>;
          break;
        case 'first':
          component = <First/>;
          break;
        case 'second':
          component = <Second/>;
          break;
        case 'third':
          component = <Third/>;
          break;
        case 'fourth':
          component = <Fourth/>;
          break;

      }
  return (
    <div>
      <main>
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Get Involved</nav>
      </main>
      {component}
      <div className="scrolling-wrapper">
        <div className="card"><h2>Card1</h2></div>
        <div className="card"><h2>Card2</h2></div>
        <div className="card"><h2>Card3</h2></div>
        <div className="card"><h2>Card4</h2></div>
        <div className="card"><h2>Card5</h2></div>
        <div className="card"><h2>Card6</h2></div>
        <div className="card"><h2>Card</h2></div>
        <div className="card"><h2>Card</h2></div>
        <div className="card"><h2>Card</h2></div>
      </div>

    </div>
  );
}
}

export default App;
