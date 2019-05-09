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
import SDefinition from './SDefinition.png';
import NDefinition from './NDefinition.png';
import RDefinition from './RDefinition.png';
import sound from './sound.mp4';
import kid from './kid.png';
import man from './man.png';
import about1 from './about1.png';
import about2 from './about2.png';
import about3 from './about3.png';
import end from './end.png';
import endButton from './endButton.png';


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
      isAppActive: false,
      isIntroButton: false,
      isIntroSlideActive: true,
      introTextFade: false,
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
      showHex: false,
      showPeeps: true,

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

      isFriendsChecked: false,
      isClassmatesChecked: false,
      isFamilyChecked: false,
      isInstructorsChecked: false,
      isCoworkersChecked: false,
      finalSValue: "",

      isAboutActive: false,
      isDone: false,
      showEnd: false,
      showEndButton: false,
    };

  }


  componentWillMount() {

    this.changeBackground('#009a8b');

    setTimeout(() => {
      this.setState({
        isIntroButton: true,
      });
    }, 3000);

    setTimeout(() => {
      this.setState({
        introTextFade: true,
      });
    }, 1000);
   }

   checkDone = () => {
     if (this.state.Tri1Done === true &&
          this.state.Tri2Done === true &&
          this.state.Tri3Done === true &&
          this.state.Tri4Done === true &&
          this.state.Tri5Done === true &&
          this.state.Tri6Done === true ) {
       setTimeout(() => {
         this.setState({
           isHexActive: false,
         });
       }, 2500);
       setTimeout(() => {
         this.setState({
           showHex: false,
           showEnd: true,
           showEndButton: true,
         });
       }, 3500);
     }
   }




changeBackground = (color) => {
 document.body.style.background = color;
}

  handleAClick = (event) => {
    this.setState({
      isHexActive: false,
    });

    setTimeout(() => {
      this.setState({
        showHex: false,
        showPeeps: false,
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
          showPeeps: false,
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
            showPeeps: false,
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
              showPeeps: false,
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
                showPeeps: false,
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
                  showPeeps: false,
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
      introTextFade: false,
      isIntroSlideActive: false,
    });

    setTimeout(() => {
      this.setState({
        showHex: true,
      });
    }, 2000);



    this.changeBackground('#F1F3F4');
  }

  handleAboutClick = (event) => {
    this.setState({
      isAboutActive:true,
      isHexActive: false,
      showHex:false,
      showPeeps: false,
      showA: false,
      showF: false,
      showL: false,
      showS: false,
      showN: false,
      showR: false,
    });
  }


  handleHomeClick = (event) => {
    this.setState({
      isAboutActive:false,
      isHexActive: true,
      showHex:true,
      showPeeps: true,
      showA: false,
      showF: false,
      showL: false,
      showS: false,
      showN: false,
      showR: false,
    });
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
          showPeeps: true,
      });
    }, 1000);

    this.checkDone();
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
        FValue: "Not important",
      });
    }

    if(this.state.FNumValue >= 25 && this.state.FNumValue < 50) {
      this.setState({
        FValue: "Somewhat Important",
      });
    }


    else if(this.state.FNumValue >= 50 && this.state.FNumValue < 75) {
      this.setState({
        FValue: "Important",
      });
    }

    else if(this.state.FNumValue >= 75 && this.state.FNumValue <= 100) {
      this.setState({
        FValue: "Extremely important",
      });
    }
    console.log(this.state.FNumValue);
    console.log(this.state.FValue);
  }

  handleNValueChange = (event) => {
    this.setState({
      NValue: event.target.value,
    });
    console.log(this.state.NValue);
  }

  handleRValueChange = (event) => {
    this.setState({
      RValue: event.target.value,
    });
    console.log(this.state.RValue);
  }


  handleFriendsValueChange = (event) => {
    this.setState({
      isFriendsChecked: !this.state.isFriendsChecked,
    });
  }

  handleClassmatesValueChange = (event) => {
    this.setState({
      isClassmatesChecked: !this.state.isClassmatesChecked,
    });
  }

  handleFamilyValueChange = (event) => {
    this.setState({
      isFamilyChecked: !this.state.isFamilyChecked,
    });
  }

  handleInstructorsValueChange = (event) => {
    this.setState({
      isInstructorsChecked: !this.state.isInstructorsChecked,
    });
  }

  handleCoworkersValueChange = (event) => {
    this.setState({
      isCoworkersChecked: !this.state.isCoworkersChecked,
    });
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



    handleSValueSubmit = (event) => {
    if(this.state.isFriendsChecked === true) {
      this.setState(prevState => ({ finalSValue: prevState.finalSValue.concat('\n Friends') }));
      }

    if(this.state.isClassmatesChecked === true) {
      this.setState(prevState => ({ finalSValue: prevState.finalSValue.concat('\n Classmates') }));
      }

    if(this.state.isFamilyChecked === true) {
      this.setState(prevState => ({ finalSValue: prevState.finalSValue.concat('\n Family') }));
      }


      if(this.state.isInstructorsChecked === true) {
        this.setState(prevState => ({ finalSValue: prevState.finalSValue.concat('\n Instructors') }));
      }

      if(this.state.isCoworkersChecked === true) {
        this.setState(prevState => ({ finalSValue: prevState.finalSValue.concat('\n Coworkers') }));
      }



      this.setState({
        SQuestion: false,
        Tri4Done: true,
      });

      setTimeout(() => {
        this.setState({
          SAnswer: true,

        });
      }, 500);
    }



    handleNValueSubmit = (event) => {
      this.setState({
        NQuestion: false,
        Tri5Done: true,
      });

      setTimeout(() => {
        this.setState({
          NAnswer: true,
        });
      }, 500);

      this.setState(prevState => ({ NValue: prevState.NValue.concat('\n Worlds') }));
    }

    handleRValueSubmit = (event) => {
      this.setState({
        RQuestion: false,
        Tri6Done: true,
      });

      setTimeout(() => {
        this.setState({
          RAnswer: true,

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
    {this.state.introTextFade ?
    <div className = {this.state.introTextFade ? 'fadeIn' : 'fadeOut'}>
      <div className = "IntroTitleDiv">
      <img className = "IntroTitle" src = {IntroTitle}/>
      </div>


      <div className = "IntroStatementDiv">
      <img className = "IntroStatement" src = {Statement}/>
      </div>

    </div>
    : null}

    {this.state.isIntroButton ?
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
        <nav><a onClick = {this.handleHomeClick.bind(this)}>Home</a></nav>
        <nav><a onClick = {this.handleAboutClick.bind(this)}>About</a></nav>
        <nav><a>Get Involved</a></nav>
      </div>
      </main>

      {this.state.showPeeps ? <img className = "kid" src = {kid}/> : null}
      {this.state.showPeeps ? <img className = "man" src = {man}/> : null}

      {this.state.isAboutActive ?
        <div className = {this.state.isAboutActive ? 'fadeIn' : 'fadeOut'}>
        <div className = 'aboutDiv'>
        <img className = 'about1' src = {about1}/>
        <img className = 'about3' src = {about3}/>
        <img className = 'about2' src = {about2}/>
        </div>
        </div>
      : null}

      {this.state.showEnd ?
        <div className = {this.state.showEnd ? 'fadeIn' : 'fadeOut'}>
        <div className = 'endWrapper'>
        <img className = "end" src = {end}/>
        <img className = "endButton" src = {endButton}/>
        </div>
        </div>
        : null}


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
            <label>
            <input  name = "language" type = "radio" value = "Sometimes" checked = {this.state.LValue === "Sometimes"} onChange={this.handleLValueChange.bind(this)}/>
            Sometimes
            </label>

            <label>
            <input  name = "language" type = "radio" value = "Often" checked = {this.state.LValue === "Often"} onChange={this.handleLValueChange.bind(this)}/>
            Often
            </label>

            <label>
            <input  name = "language" type = "radio" value = "All the time" checked = {this.state.LValue === "All the time"} onChange={this.handleLValueChange.bind(this)}/>
            All the time
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



        {this.state.showS ?
        <div className = {this.state.isSActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "socialDiv">
          {this.state.SQuestion ?<p>Who would you consider to be in your network?</p> :null}
          {this.state.SQuestion ?<p className = "parenthesis">(Those who you engage with most and who care about your growth)</p> :null}
          {this.state.SQuestion ?
            <form>
            <label>
            <input type = "checkbox" value = "Friends" checked = {this.state.isFriendsChecked} onChange={this.handleFriendsValueChange.bind(this)}/>
            Friends</label>

            <label>
            <input type = "checkbox" value = "Classmates" checked = {this.state.isClassmatesChecked} onChange={this.handleClassmatesValueChange.bind(this)}/>
            Classmates</label>


            <label>
            <input type = "checkbox" value = "Family" checked = {this.state.isFamilyChecked} onChange={this.handleFamilyValueChange.bind(this)}/>
            Family</label>


            <label>
            <input type = "checkbox" value = "Instructors" checked = {this.state.isInstructorsChecked} onChange={this.handleInstructorsValueChange.bind(this)}/>
            Instructors</label>


            <label>
            <input type = "checkbox" value = "Coworkers" checked = {this.state.isCoworkersChecked} onChange={this.handleCoworkersValueChange.bind(this)}/>
            Coworkers</label>


            </form>
            :null}
         {this.state.SQuestion ? <img className = "SButton" src = {AButton} onClick = {this.handleSValueSubmit.bind(this)}/> :null}
         {this.state.SAnswer ?
            <div className = {this.state.SAnswer ? 'fadeIn' : 'fadeOut'}>
            <p className = "STitle">SOCIAL</p>
            <p className = "SAnswer">{this.state.finalSValue}</p>
            <img className = "SDefinition" src = {SDefinition}/>
            <p className = "returnText" onClick = {this.handleGoBackClick.bind(this)}> <i class="left"></i> RETURN TO MODEL </p>
            </div>
            : null}

        </div>
        </div>
        : null}



        {this.state.showN ?
        <div className = {this.state.isNActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "linguisticDiv">
          {this.state.NQuestion ?<p>How many "worlds" do you switch between in your life?</p> :null}
          {this.state.NQuestion ?<p className = "parenthesis">(School, Work, Family, Spirituality, Friends etc.)</p> :null}
          {this.state.NQuestion ?
            <input placeholder = "Type here." type = "text" value = {this.state.NValue} onChange = {this.handleNValueChange.bind(this)}/>
            :null}
         {this.state.NQuestion ? <img className = "LButton" src = {LButton} onClick = {this.handleNValueSubmit.bind(this)}/> :null}

         {this.state.NAnswer ?
           <div className = {this.state.NAnswer ? 'fadeIn' : 'fadeOut'}>
           <p className = "NTitle">NAVIGATIONAL</p>
           <p className = "NAnswer">{this.state.NValue}</p>
           <img className = "NDefinition" src = {NDefinition}/>
           <p className = "returnText" onClick = {this.handleGoBackClick.bind(this)}> <i class="left"></i> RETURN TO MODEL </p>
           </div>
           : null}
        </div>
        </div>
        : null}


        {this.state.showR ?
        <div className = {this.state.isRActive ? 'fadeIn' : 'fadeOut'}>
        <div className = "resistanceDiv">
          {this.state.RQuestion ? <p className = "resistanceQuestion">Have you ever witnessed, been told about, or experienced racial discrimination/microaggressions? </p> :null}
          {this.state.RQuestion ?
            <form>
            <label>Yes
            <input   type = "radio" value = "Yes" checked = {this.state.RValue === "Yes"} onChange={this.handleRValueChange.bind(this)}/>
            </label>

            <label>No
            <input  type = "radio" value = "No" checked = {this.state.RValue === "No"} onChange={this.handleRValueChange.bind(this)}/>
            </label>
            </form>
            :null}
         {this.state.RQuestion ? <img className = "LButton" src = {FButton} onClick = {this.handleRValueSubmit.bind(this)}/> :null}

         {this.state.RAnswer ?
           <div className = {this.state.RAnswer ? 'fadeIn' : 'fadeOut'}>
           <p className = "RTitle">RESISTANCE</p>
           <img className = "RDefinition" src = {RDefinition}/>
           <p className = "returnText" onClick = {this.handleGoBackClick.bind(this)}> <i class="left"></i> RETURN TO MODEL </p>
           </div>
           : null}
        </div>
        </div>
        : null}











     </div>
     : null}
     <footer ><div className = {this.state.isTealActive ? 'tealColor' : 'whiteColor'}><audio src={sound}  controlsList='nodownload'  autoPlay loop/>
     </div></footer>
    </div>

  );
}
}

export default App;
