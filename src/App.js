import logo from './logo.svg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
          <div>
            <AppHeader />
            <div className="container contacts">
              <ContactsList />
            </div>
          </div>
          );
}

function AppHeader() {
  return (
          <div className="container navigation">
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  Książka adresowa
                </div>
              </div>
              <div className="col-md-6">
                <div className="single">
                  <HeaderOptions />
                </div>
              </div>
            </div>
          </div>
          );
}

function ContactsList() {
  return (
          <div className="row">
            <PersonalInfo
              title="Marek zwierzycki"
              tel="555 555 555"
              email="mzwierzycki@example.com"
              city="Gdańsk"
              postal="80-010"
              street="ul. Kościuszki"
              likes="1"
              />
            <PersonalProjects
              />
            <ContactItem
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              avatar="img/avatar.webp"
              likes="2"
              />
            <ContactItem
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              avatar="img/avatar.webp"
              likes="1"
              />
            <ContactItem
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              avatar="img/avatar.webp"
              likes="44"
              />
            <ContactItem
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              avatar="img/avatar.webp"
              likes="453"
              />
            <ContactItem
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              avatar="img/avatar.webp"
              likes="0"
              />
            <ContactItem
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              avatar="img/avatar.webp"
              likes="88"
              />
          </div>
          );
}

class PersonalInfo extends React.Component {

  render() {
    const {title, tel, email, city, postal, street} = this.props;
    return (
            <div className="col-md-6">
              <div className="personal-info">
            
                <div className="avatar">
            
                </div>
                <div className="title">
                  {title}
                </div>
                <div className="tel">
                  {tel}
                </div>
                <div className="email">
                  {email}
                </div>
                <div className="city">
                  {city}
                </div>
                <div className="postal">
                  {postal}
                </div>
                <div className="street">
                  {street}
                </div>
              </div>
            </div>
            )
  }
}

function PersonalProjects() {
  return (
          <div className="col-md-6">
            <div className="personal-projects">
              <ProjectItem
                title="google.com"
                frontend="1"
                backend="0"
                />
              <ProjectItem
                title="wp.pl"
                frontend="0"
                backend="1"
                />
              <ProjectItem
                title="hypeup.org"
                frontend="1"
                backend="1"
                />
            </div>
          </div>
          );
}

function HeaderOptions() {
  return (
          <div className="options">
            <OptionsItem
              title="Dodaj"
              />
            <OptionsItem
              title="Opcja 2"
              />
            <OptionsItem
              title="Opcja 3"
              />
          </div>
          )
}

class ProjectItem extends React.Component {

  render() {
    const {title, frontend, backend} = this.props;
    return (
            <div className="project">
              <span className="title">{title}</span>
              {frontend == 1 &&
                          <span className="frontend-icon">FRONT-END</span>
              }
              {backend == 1 &&
                          <span className="backend-icon">BACKEND-END</span>
              }
            </div>
            );
  }
}

class ContactItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.likes
    };
  }

  render() {
    const {name, tel, email, avatar} = this.props;
//    const btn = useRef(null);
    return (
            <div className="col-md-3">
              <div className="single" onClick={this.contactOnClickHandler}>
                <div className="avatar" style={{backgroundImage: "url(" + avatar + ")"}}>
            
                </div>
                <div className="title">
                  {name}
                </div>
                <div className="tel">
                  {tel}
                </div>
                <div className="email">
                  {email}
                </div>
                <div className="counter">
                  <button className="add-like" onClick={this.increment.bind(this)}>
                    Polub!
                  </button>
                  <img className="like-btn" src="img/like.jpg"/>
                  <div className="total-likes">
                    Łącznie <output>{this.state.counter}</output> polubień
                  </div>
                </div>
              </div>
            </div>
                      );
            }

    contactOnClickHandler() {
      //alert('Kliknięto!');
    }

    increment() {
//      var likes = parseInt(this.state.counter);
//      if (!(this.refs.btn.setAttribute("disabled", "disabled"))) {
//        this.setState({
//          counter: likes + 1
//        });
//      }
//      this.refs.btn.setAttribute("disabled", "disabled");
    }

  }


  class OptionsItem extends React.Component {
    render() {
      const {title} = this.props;
      return (
              <div className="single">
                {title}
              </div>
              );
    }
  }



  export default App;
