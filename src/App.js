import like from './like.jpg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export class App extends React.Component {

  state = {
    contacts: null
  };

  render() {
    return (
            <div>
              <AppHeader />
              <div className="container contacts">
                {this.state.contacts ? (
                        <ContactsList contacts={this.state.contacts} />
                ) : (
                  'Ładowanie...'
                )}
              </div>
            </div>
   )         
  }

  componentDidMount() {
    fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(json => this.setState({contacts: json.results}));
  }

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

class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
  }

  showPersonalInfo = (title, tel, email, city, postal, street, likes) => {
    this.setState(() => {
      return {
// isDisplayed: !prevState.isDisplayed
        isDisplayed: true,
        title: title,
        tel: tel,
        email: email,
        city: city,
        postal: postal,
        street: street,
        likes: likes
      }
    });
  }

  render() {
    const {contacts} = this.props;

      console.log(contacts[0]['name']);
    
    return (
          
            <div className="row">
              {this.state.isDisplayed == true &&
                          <PersonalInfo
                            title={this.state.title}
                            tel={this.state.tel}
                            email={this.state.email}
                            city={this.state.city}
                            postal={this.state.postal}
                            street={this.state.street}
                            likes={this.state.likes}
                            />
              }
              <PersonalProjects
                isDisplayed={this.state.isDisplayed}
                />
            
              <div className="col-md-3">
                <div className="single">
                  <div className="main-info" onClick={() => this.showPersonalInfo("Magda Zwierzyniak", "111 111 1111", "mzwierzyniak@example.com", "Kraków", "84-230", "ul. Kościuszki", 24)}>
                    <div className="avatar" style={{backgroundImage: "url(img/avatar.webp)"}}>
            
                    </div>
                    <div className="title">
                      Magda Zwierzyniak
                    </div>
                  </div>
                  <div className="tel">
                    111 111 1111
                  </div>
                  <div className="email">
                    mzwierzyniak@example.com
                  </div>
                  <div className="counter">
                    <button className="add-like" onClick={this.increment.bind(this)}>
                      Polub!
                    </button>
                    <img className="like-btn" src={like}/>
                    <div className="total-likes">
                      Łącznie <output id="likes-counter-2">24</output> polubień
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single">
                  <div className="main-info" onClick={() => this.showPersonalInfo("Paweł Kielec", "222 222 2222", "pkielec@example.com", "Warszawa", "43-422", "ul. Abrahama", 50)}>
                    <div className="avatar" style={{backgroundImage: "url(img/avatar.webp)"}}>
            
                    </div>
                    <div className="title">
                      Paweł Kielec
                    </div>
                  </div>
                  <div className="tel">
                    222 222 2222
                  </div>
                  <div className="email">
                    pkielec@example.com
                  </div>
                  <div className="counter">
                    <button className="add-like" onClick={this.increment.bind(this)}>
                      Polub!
                    </button>
                    <img className="like-btn" src={like}/>
                    <div className="total-likes">
                      Łącznie <output id="likes-counter-1">50</output> polubień
                    </div>
                  </div>
                </div>
              </div>
            </div>
                )
      }
      increment() {
        var counterValue = document.getElementById("likes-counter-1").textContent;
        var counter = document.getElementById("likes-counter-1");
        counterValue = parseInt(counterValue) + 1;
        counter.innerHTML = counterValue;
      }
      ;
    }

    class PersonalInfo extends React.Component {

      render() {
        const {title, tel, email, city, postal, street, isDisplayed} = this.props;
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

    class PersonalProjects extends React.Component {

      render() {
        const {isDisplayed} = this.props;
        if (isDisplayed) {
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
                  )
        }
        return (null)
      }
    }

    function HeaderOptions() {
      return (
              <div className="options">
                <OptionsItem
                  title="Postacie"
                  />
                <OptionsItem
                  title="Planety"
                  />
                <OptionsItem
                  title="Statki"
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
