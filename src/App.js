import like from './like.jpg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export class App extends React.Component {

  state = {
    searchResult: null
  };

  render() {
    return (
            <div>
              <AppHeader 
                passedGetPeople={this.getPeople}
                passedGetVehicles={this.getVehicles}
                passedGetShips={this.getShips}
                passedGetSearchResult={this.getSearchResult}
                />
              <div className="container contacts">
                {this.state.searchResult ? (
                                  <ContactsList searchResult={this.state.searchResult} />
                                  ) : (
                          <LoadingInfo />
                          )}
              </div>
            </div>
            )
  }

  // pobieranie osób
  getPeople = () => {
    fetch("https://swapi.dev/api/people/")
            .then(res => res.json())
            .then(json => this.setState({searchResult: json.results}));
  }

  // pobieranie pojazdów
  getVehicles = () => {
    fetch("https://swapi.dev/api/vehicles/")
            .then(res => res.json())
            .then(json => this.setState({searchResult: json.results}));
  }

  // pobieranie statków
  getShips = () => {
    fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(json => this.setState({searchResult: json.results}));
  }

  // wyszukiwanie
  getSearchResult() {
    fetch("https://swapi.dev/api/starships/")
            .then(res => res.json())
            .then(json => this.setState({searchResult: json.results}));
  }

}

function LoadingInfo() {
  return(
          <span className="loading-info">Wybierz opcję z górnego menu lub wyszukaj...</span>
          )
}

class AppHeader extends React.Component {
  render() {
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
                    <div className="options">
            
                      <div className="single active"
                           onClick={this.props.passedGetPeople}>
                        Postacie
                      </div>
                      <div className="single active"
                           onClick={this.props.passedGetVehicles}>
                        Pojazdy
                      </div>
                      <div className="single active"
                           onClick={this.props.passedGetShips}>
                        Statki
                      </div>
            
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="search-bar">
                    <div className="show-search-bar">
                      <form>
                        <input type="text" />
                        <input type="submit" value="Wyszukaj"/>
                      </form>
                    </div>
                    <div className="searchresults">
                      <div className="one">Luke Skywalker</div>
                      <div className="one">Luke Skywalker</div>
                      <div className="one">Luke Skywalker</div>
                      <div className="one">Luke Skywalker</div>
                      <div className="one">Luke Skywalker</div>
                      <div className="one">Luke Skywalker</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
  }
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
    const {searchResult} = this.props;

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
            
              {this.props.searchResult.map((oneResult, counter) => (
                            <div className="col-md-3" key={counter}>
                              <div className="single">
                                <div className="main-info" 
                                     onClick={() => this.showPersonalInfo(
                                        oneResult.name,
                                        oneResult.gender,
                                        oneResult.birth_year,
                                        oneResult.eye_color + ', ' + oneResult.hair_color,
                                        oneResult.homeworld,
                                        oneResult.height + ', ' + oneResult.mass, 
                                        24
                                        )}>
                                  <div className="title">
                                    {oneResult.name}
                                  </div>
                                </div>
                                <div className="tel">
                                  {oneResult.gender}
                                </div>
                                <div className="email">
                                  {oneResult.birth_year}<br/>{oneResult.hair_color}<br/>{oneResult.eye_color}
                                </div>
                                <div className="counter" onClick={() => this.showPersonalInfo(
                                        oneResult.name,
                                        oneResult.gender,
                                        oneResult.birth_year,
                                        oneResult.eye_color + ', ' + oneResult.hair_color,
                                        oneResult.homeworld,
                                        oneResult.height + ', ' + oneResult.mass, 
                                        24
                                        )}>
                                  <button className="add-like" onClick={this.increment.bind(this)}>
                                    Zobacz
                                  </button>
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

export default App;
