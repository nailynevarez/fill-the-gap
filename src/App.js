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
import TealBackground from './TealBackground.png';
import IntroButton from './ETMButton.png';
import Statement from './BeginningStatement.png';
import IntroTitle from './TitleCW.png';
import AButton from './AButton.png';
import ADefinition from './ADefinition.png';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Tri1Done: false,
      activePage: 'fourth',
      isTealActive: true,
      isAppActive: true,
      isIntroButton: false,
      isIntroSlideActive: false,
      AValue: '',
      AQuestion: true,
      AAnswer: false,
      isHexActive: true,
      showHex: true,
      isAActive: false,
      showA: false,
    };

  }


  componentWillMount() {
    setTimeout(() => {
      this.setState({
        isIntroButton: true,
      });
    }, 3000);
   }


  handleAClick = (event) => {
    this.setState({
      isHexActive: false,

    });

    setTimeout(() => {
      this.setState({
        showHex: false,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        showA: true,
          isAActive: true,
      });
    }, 1000);
    }

  handleIntroButtonClick = (event) => {
    this.setState({
      isIntroButton: false,
      isTealActive: false,
      isAppActive: true,
    });

    setTimeout(() => {
      this.setState({
        isIntroSlideActive: false,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
        isAppActive: true,
      });
    }, 1000);
  }

  handleAboutClick = (event) => {

  }

  handleGoBackClick = (event) => {
    this.setState({
      isAActive: false,


    });

    setTimeout(() => {
      this.setState({

        showA: false,
      });
    }, 500);

    setTimeout(() => {
      this.setState({
          showHex: true,
          isHexActive: true,
      });
    }, 1000);
  }


  handleAValueChange = (event) => {
    this.setState({
      AValue: event.target.value
    });
    console.log(this.state.AValue);
  }

  handleAValueSubmit = (event) => {
    this.setState({
      AQuestion: false,
      Tri1Done: true,
    });

    setTimeout(() => {
      this.setState({
        AAnswer: true,
      });
    }, 500);
  }

  handleReturnText = (event) => {

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


    {this.state.isIntroSlideActive ?
    <div className = {this.state.isTealActive ? 'fadeIn' : 'fadeOut'}>
    <img className = "TealBackground" src = {TealBackground}/>
    </div>
    : null }


    {this.state.isIntroSlideActive ?
    <div className = {this.state.isTealActive ? 'fadeIn' : 'fadeOut'}>
      <div className = "IntroTitleDiv">
      <img className = "IntroTitle" src = {IntroTitle}/>
      </div>


      <div className = "IntroStatementDiv">
      <img className = "IntroStatement" src = {Statement}/>
      </div>

    </div>
    : null}

    {this.state.isIntroSlideActive ?
    <div className = {this.state.isIntroButton ? 'fadeIn' : 'fadeOut'} >
    <div className = "IntroButtonDiv">
      <img className = "IntroButton" src = {IntroButton} onClick = {this.handleIntroButtonClick.bind(this)}/>
      </div>
    </div>
     : null}


     {this.state.isAppActive ?
    <div className = {this.state.isAppActive ? 'fadeIn' : 'fadeOut'}>
      <main>

      <div className ="logo">
        <img src={logo}/>
      </div>

      <div className = "navs">
        <nav><a>Home</a></nav>
        <nav><a onClick = {this.handleAboutClick.bind(this)}>About</a></nav>
        <nav><a>Get Involved</a></nav>
      </div>
      </main>

      {this.state.showHex ?
    <div className = "scrollingDiv">
    <div className = {this.state.isHexActive ? 'fadeIn' : 'fadeOut'}>
      <div className = "first-row">
        <img alt = ""  className ="Tri6Empty" src={Tri6Empty} />
        {this.state.Tri1Done ? <img alt = "" className ="Tri1Full" src={Tri1Full} onClick={this.handleAClick.bind(this)}/> : <img alt = "" className ="Tri1Empty" src={Tri1Empty} onClick={this.handleAClick.bind(this)}/>}
        <img alt = "" className ="Tri2Empty" src={Tri2Empty}/>
      </div>


        <div className = "second-row">

        <img alt = "" className ="Tri5Empty" src={Tri5Empty}/>
        <img alt = "" className ="Tri4Empty" src={Tri4Empty}/>
        <img alt = "" className ="Tri3Empty" src={Tri3Empty}/>
        </div>
        </div>
      </div>
      : null }
        {this.state.showA ?
        <div className = {this.state.isAActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "aspirationDiv">
          {this.state.AQuestion ?<p>What is a hope/dream of yours?</p> :null}
          {this.state.AQuestion ?<input placeholder = "Type here." type = "text" value = {this.state.AValue} onChange = {this.handleAValueChange.bind(this)}/> :null}
         {this.state.AQuestion ? <img className = "AButton" src = {AButton} onClick = {this.handleAValueSubmit.bind(this)}/> :null}

         {this.state.AAnswer ?
           <div className = {this.state.AAnswer ? 'fadeIn' : 'fadeOut'}>
           <p className = "ATitle">ASPIRATIONAL</p>
           <p className = "AAnswer">{this.state.AValue}</p>
           <img className = "ADefinition" src= {ADefinition}/>
           <p className = "returnText" onClick = {this.handleGoBackClick.bind(this)}> <i class="left"></i> RETURN TO MODEL </p>
           </div>
           : null}
        </div>
        </div>
        : null}

     </div>
     : null}
    </div>

  );
}
}

export default App;
