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
import LButton from './LButton.png';
import LDefinition from './LDefinition.png';
import FButton from './FButton.png';
import FDefinition from './FDefinition.png';
import SDefinition from './FDefinition.png';
import NDefinition from './FDefinition.png';
import RDefinition from './FDefinition.png';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Tri1Done: false,
      Tri2Done: false,
      Tri3Done: false,
      Tri4Done: false,
      Tri5Done: false,
      Tri6Done: false,

      activePage: 'fourth',
      isTealActive: true,
      isAppActive: true,
      isIntroButton: false,
      isIntroSlideActive: false,
      AValue: '',
      LValue: '',
      FNumValue: 50,
      FValue: '',
      SValue: '',
      NValue: '',
      RValue: '',

      AQuestion: true,
      AAnswer: false,
      LQuestion: true,
      LAnswer: false,
      FQuestion: true,
      FAnswer: false,
      SQuestion: true,
      SAnswer: false,
      NQuestion: true,
      NAnswer: false,
      RQuestion: true,
      RAnswer: false,

      isHexActive: true,
      showHex: true,

      isAActive: false,
      showA: false,
      isLActive: false,
      showL: false,
      isLActive: false,
      showF: false,
      isFActive: false,
      showS: false,
      isSActive: false,
      showN: false,
      isNActive: false,
      showR: false,
      isRActive: false,
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


    handleLClick = (event) => {
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
          showL: true,
          isLActive: true,
        });
      }, 1000);
      }


      handleFClick = (event) => {
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
            showF: true,
            isFActive: true,
          });
        }, 1000);
        }


        handleSClick = (event) => {
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
              showS: true,
              isSActive: true,
            });
          }, 1000);

          }

          handleNClick = (event) => {
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
                showN: true,
                isNActive: true,
              });
            }, 1000);
            }

            handleRClick = (event) => {
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
                  showR: true,
                  isRActive: true,
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
      isLActive:false,
      isFActive: false,
      isSActive: false,
      isNActive: false,
      isRActive: false,
    });

    setTimeout(() => {
      this.setState({
        showA: false,
        showL: false,
        showF: false,
        showS: false,
        showN: false,
        showR: false,
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

  handleLValueChange = (event) => {
    this.setState({
      LValue: event.target.value,
    });
    console.log(this.state.LValue);
  }

  handleFValueChange = (event) => {
    this.setState({
      FNumValue: event.target.value,
    });

    if(this.state.FNumValue > 0 && this.state.FNumValue < 25) {
      this.setState({
        FValue: "Somewhat important",
      });
    }

    if(this.state.FNumValue >= 25 && this.state.FNumValue < 50) {
      this.setState({
        FValue: "Important",
      });
    }


    else if(this.state.FNumValue >= 50 && this.state.FNumValue < 75) {
      this.setState({
        FValue: "Very important",
      });
    }

    else if(this.state.FNumValue >= 75 && this.state.FNumValue <= 100) {
      this.setState({
        FValue: "The most important",
      });
    }
    console.log(this.state.FNumValue);
    console.log(this.state.FValue);
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

  handleLValueSubmit = (event) => {
    this.setState({
      LQuestion: false,
      Tri2Done: true,
    });

    setTimeout(() => {
      this.setState({
        LAnswer: true,
      });
    }, 500);
  }


  handleFValueSubmit = (event) => {
    this.setState({
      FQuestion: false,
      Tri3Done: true,
    });

    setTimeout(() => {
      this.setState({
        FAnswer: true,
      });
    }, 500);
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
        {this.state.Tri6Done ? <img alt = ""  className ="Tri6Full" src={Tri6Full} onClick={this.handleRClick.bind(this)}/> : <img alt = ""  className ="Tri6Empty" src={Tri6Empty} onClick={this.handleRClick.bind(this)}/>}
        {this.state.Tri1Done ? <img alt = "" className ="Tri1Full" src={Tri1Full} onClick={this.handleAClick.bind(this)}/> : <img alt = "" className ="Tri1Empty" src={Tri1Empty} onClick={this.handleAClick.bind(this)}/>}
        {this.state.Tri2Done ? <img alt = "" className ="Tri2Full" src={Tri2Full} onClick={this.handleLClick.bind(this)}/> : <img alt = "" className ="Tri2Empty" src={Tri2Empty} onClick={this.handleLClick.bind(this)}/>}
      </div>


        <div className = "second-row">

        {this.state.Tri5Done ? <img alt = "" className ="Tri5Full" src={Tri5Full} onClick={this.handleNClick.bind(this)}/> : <img alt = "" className ="Tri5Empty" src={Tri5Empty} onClick={this.handleNClick.bind(this)}/>}
        {this.state.Tri4Done ? <img alt = "" className ="Tri4Full" src={Tri4Full} onClick={this.handleSClick.bind(this)}/> : <img alt = "" className ="Tri4Empty" src={Tri4Empty} onClick={this.handleSClick.bind(this)}/> }
        {this.state.Tri3Done ? <img alt = "" className ="Tri3Full" src={Tri3Full} onClick={this.handleFClick.bind(this)}/>:<img alt = "" className ="Tri3Empty" src={Tri3Empty} onClick={this.handleFClick.bind(this)}/> }
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




        {this.state.showL ?
        <div className = {this.state.isLActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "linguisticDiv">
          {this.state.LQuestion ?<p>How often do you and your family tell stories?</p> :null}
          {this.state.LQuestion ?
            <form>
            <label>Sometimes
            <input  name = "language" type = "radio" value = "Sometimes" checked = {this.state.LValue === "Sometimes"} onChange={this.handleLValueChange.bind(this)}/>
            </label>

            <label>Often
            <input  name = "language" type = "radio" value = "Often" checked = {this.state.LValue === "Often"} onChange={this.handleLValueChange.bind(this)}/>
            </label>

            <label>All the time
            <input  name = "language" type = "radio" value = "All the time" checked = {this.state.LValue === "All the time"} onChange={this.handleLValueChange.bind(this)}/>
            </label>
            </form>
            :null}
         {this.state.LQuestion ? <img className = "LButton" src = {LButton} onClick = {this.handleLValueSubmit.bind(this)}/> :null}

         {this.state.LAnswer ?
           <div className = {this.state.LAnswer ? 'fadeIn' : 'fadeOut'}>
           <p className = "LTitle">LINGUISTIC</p>
           <p className = "LAnswer">{this.state.LValue}</p>
           <img className = "LDefinition" src = {LDefinition}/>
           <p className = "returnText" onClick = {this.handleGoBackClick.bind(this)}> <i class="left"></i> RETURN TO MODEL </p>
           </div>
           : null}
        </div>
        </div>
        : null}




        {this.state.showF ?
        <div className = {this.state.isFActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "FamilialDiv">
          {this.state.FQuestion ?<p>How important is the support you receive from your family?</p> :null}
          {this.state.FQuestion ?

            <div>
            <input  name = "language" type = "range" class = "slider" value = {this.state.FNumValue} min = "1" max = "100" onChange={this.handleFValueChange.bind(this)}/>
            <p className = "FValueLabel">{this.state.FValue}</p>
            </div>
            :null}
         {this.state.FQuestion ? <img className = "LButton" src = {FButton} onClick = {this.handleFValueSubmit.bind(this)}/> :null}
         {this.state.FAnswer ?
            <div className = {this.state.FAnswer ? 'fadeIn' : 'fadeOut'}>
            <p className = "FTitle">FAMILIAL</p>
            <p className = "FAnswer">{this.state.FValue}</p>
            <img className = "FDefinition" src = {FDefinition}/>
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
