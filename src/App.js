import React from 'react';
import logo from './logo.png';
import './stylesheets/app.css';
import About from './About.js';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';
import Fourth from './Fourth.js';
import Tri1Empty from './Tri1Empty.png';
import Tri2Empty from './Tri2Empty.png';
import Tri3Empty from './Tri3Empty.png';
import Tri4Empty from './Tri4Empty.png';
import Tri5Empty from './Tri5Empty.png';
import Tri6Empty from './Tri6Empty.png';
import Tri1Full from './Tri1Full.png';
import Tri2Full from './Tri2Full.png';
import Tri3Full from './Tri3Full.png';
import Tri4Full from './Tri4Full.png';
import Tri5Full from './Tri5Full.png';
import Tri6Full from './TriFull6.png';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activePage: 'fourth',
    };
    this.myDivToFocus = React.createRef()
  }




  handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({
               behavior: "smooth",
               block: "nearest"
            })
        }
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

      <div className ="logo">
        <img src={logo}/>
      </div>

      <div className = "navs">
        <nav><a>Home</a></nav>
        <nav><a>About</a></nav>
        <nav><a>Get Involved</a></nav>
      </div>
      </main>

      <div className = "first-row">
        <img className ="Tri6Empty" src={Tri6Empty} onClick={this.handleOnClick.bind(this)}/>
        <img className ="Tri1Empty" src={Tri1Empty}/>
        <img className ="Tri2Empty" src={Tri2Empty}/>
      </div>

      <div className = "second-row">


        <img className ="Tri5Empty" src={Tri5Empty}/>
        <img className ="Tri4Empty" src={Tri4Empty}/>
        <img className ="Tri3Empty" src={Tri3Empty}/>
     </div>


     <div ref={this.myDivToFocus}>
        <p>This is a test.</p>
     </div>


    </div>
  );
}
}

export default App;
