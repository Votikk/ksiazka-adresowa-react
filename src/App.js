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
                          <LoadingInfo />
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

function LoadingInfo() {
  return(
          <span className="loading-info">Przygotowuję skok neuronowy...</span>
          )
}

function AppHeader() {
  return (
          <div className="container navigation">
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  StarWarsBook
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
        likes: likes,
        avatar: "url(img/avatar.webp)"
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
                            avatar={this.state.avatar}
                            />
              }
              <PersonalProjects
                isDisplayed={this.state.isDisplayed}
                />
            
              {this.props.contacts.map((contact, counter) => (
                            <div className="col-md-3" key={counter}>
                              <div className="single">
                                <div className="main-info" 
                                     onClick={() => this.showPersonalInfo(
                                        contact.name,
                                        'płeć ' + contact.gender,
                                        'urodzony ' + contact.birth_year,
                                        'oczy ' + contact.eye_color + ', włosy ' + contact.hair_color,
                                        'pochodzenie ' + contact.homeworld,
                                        'Wysokość ' + contact.height + 'cm, masa ' + contact.mass + 'kg', 24
                                        )}>
                                  <div className="title">
                                    {contact.name}
                                  </div>
                                </div>
                                <div className="tel">
                                  płeć {contact.gender}
                                </div>
                                <div className="email">
                                  Born {contact.birth_year}<br/>włosy {contact.hair_color}<br/>oczy {contact.eye_color}
                                </div>
                                <div className="counter">
                                  <button className="add-like" onClick={this.increment.bind(this)}>
                                    Wyróżnij
                                  </button>
                                  <div className="total-likes">
                                    Skazany na śmierć w 
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
            </div>
            )
  }
  increment() {
    console.log('todo increment');
  }
  ;
}

class PersonalInfo extends React.Component {

  render() {
    const {title, tel, email, city, postal, street, isDisplayed} = this.props;
    return (
            <div className="col-md-6 personal-info-container">
              <div className="personal-info">
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
              <div className="col-md-6 personal-projects-container">
                <div className="personal-projects">
                  <ProjectItem
                    title="Własność"
                    owned="test"
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
              active="active"
              />
            <OptionsItem
              title="Planety"
              active=""
              />
            <OptionsItem
              title="Statki"
              active=""
              />
          </div>
          )
}

class ProjectItem extends React.Component {

  render() {
    const {title, owned} = this.props;
    return (
            <div className="project">
              <div className="title">{title}</div>
              {owned !== "" &&
                          <div>
                            <span className="vehicle-icon">Sand Crawler</span>
                            <span className="vehicle-icon">T-16 skyhopper</span>
                            <span className="vehicle-icon">X-34 landspeeder</span>
                            <span className="vehicle-icon">AT-AT</span>
                          </div>
              }
            </div>
            );
  }
}

class OptionsItem extends React.Component {
  render() {
    const {title, active} = this.props;
    if (active == "active") {
      return (
              <div className="single active">
                {title}
              </div>
              );
    } else {
      return (
              <div className="single">
                {title}
              </div>
              );
    }

  }
}

export default App;
