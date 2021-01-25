import like from './like.jpg';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export class App extends React.Component {

  state = {
    searchPeople: null,
    searchVehicles: null
  };

  render() {
    return (
            <div>
              <AppHeader 
                passedGetPeople={this.getPeople}
                passedGetVehicles={this.getVehicles}
                />
              <div className="container contacts">
                {this.state.searchPeople ? (
                                  <ContactsList searchPeople={this.state.searchPeople} />
                                  ) : (
                          <LoadingInfo />
                          )}
                {this.state.searchVehicles ? (
                          <ContactsList searchVehicles={this.state.searchVehicles} />
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
            .then(this.setState({searchVehicles: null}))
            .then(res => res.json())
            .then(json => this.setState({searchPeople: json.results}));
  }

  // pobieranie pojazdów
  getVehicles = () => {
    fetch("https://swapi.dev/api/vehicles/")
            .then(this.setState({searchPeople: null}))
            .then(res => res.json())
            .then(json => this.setState({searchVehicles: json.results}));
  }

}

// informacja, jeśli nic nie jest załadowane
function LoadingInfo() {
  return(
          <span className="loading-info"></span>
          )
}

// nagłówek
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
                           onClick={this.props.passedGetPeople}
                           >
                        Postacie
                      </div>
                      <div className="single active"
                           onClick={this.props.passedGetVehicles}
                           >
                        Pojazdy
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
  }
}

// lista wyników
class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
  }

  // pokaż szczegółowe informacje o wybranej postaci
  showPersonDetailedInfo = (
          title, gender, birth_year, eye_color, hair_color, homeworld, height, mass
          ) => {
    this.setState(() => {
      return {
// isDisplayed: !prevState.isDisplayed
        isDisplayed: true,
        title: title,
        gender: gender,
        birth_year: birth_year,
        eye_color: eye_color,
        hair_color: hair_color,
        homeworld: homeworld,
        height: height,
        mass: mass
      }
    });
  }

  // pokaż szczegółowe informacje o wybranym pojeździe
  showVehicleDetailedInfo = (
          title, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers
          ) => {
    this.setState(() => {
      return {
        isDisplayed: true,
        title: title,
        model: model,
        manufacturer: manufacturer,
        cost_in_credits: cost_in_credits,
        length: length,
        max_atmosphering_speed: max_atmosphering_speed,
        crew: crew,
        passengers: passengers
      }
    });
  }

  render() {
    // zwracanie osób
    if (this.props.searchPeople) {
      return (
              <div className="row">
                {this.state.isDisplayed == true &&
                              <PersonDetailedInfo
                                title={this.state.title}
                                gender={this.state.gender}
                                birth_year={this.state.birth_year}
                                eye_color={this.state.eye_color}
                                hair_color={this.state.hair_color}
                                homeworld={this.state.homeworld}
                                height={this.state.height}
                                mass={this.state.mass}
                                />
                }
                <PersonPersonalProjects
                  isDisplayed={this.state.isDisplayed}
                  />
              
                {this.props.searchPeople.map((oneResult, counter) => (
                                <div className="col-md-3" key={counter}>
                                  <div className="single">
                                    <div className="main-info" 
                                         onClick={() => this.showPersonDetailedInfo(
                                            oneResult.name,
                                            oneResult.gender,
                                            oneResult.birth_year,
                                            oneResult.eye_color,
                                            oneResult.hair_color,
                                            oneResult.homeworld,
                                            oneResult.height,
                                            oneResult.mass
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
                                  </div>
                                </div>
                            ))}
              </div>
              )
    }
    // zwracanie pojazdów
    if (this.props.searchVehicles) {
      return (
              <div className="row">
                {this.state.isDisplayed == true &&
                              <VehicleDetailedInfo
                                title={this.state.title}
                                model={this.state.model}
                                manufacturer={this.state.manufacturer}
                                cost_in_credits={this.state.cost_in_credits}
                                length={this.state.length}
                                max_atmosphering_speed={this.state.max_atmosphering_speed}
                                crew={this.state.crew}
                                passengers={this.state.passengers}
                                />
                }
                <PersonPersonalProjects
                  isDisplayed={this.state.isDisplayed}
                  />
              
                {this.props.searchVehicles.map((oneResult, counter) => (
                                <div className="col-md-3" key={counter}>
                                  <div className="single">
                                    <div className="main-info" 
                                         onClick={() => this.showVehicleDetailedInfo(
                                            oneResult.name,
                                            oneResult.model,
                                            oneResult.manufacturer,
                                            oneResult.cost_in_credits,
                                            oneResult.length,
                                            oneResult.max_atmosphering_speed,
                                            oneResult.crew,
                                            oneResult.passengers
                                            )}>
                                      <div className="title">
                                        {oneResult.name}
                                      </div>
                                    </div>
                                    <div className="one-info">
                                      {oneResult.model}
                                    </div>
                                    <div className="one-info">
                                      {oneResult.manufacturer}
                                    </div>
                                    <div className="one-info">
                                      {oneResult.cost_in_credits}
                                    </div>
                                  </div>
                                </div>
                            ))}
              </div>
              )
    }
  }
}

// info szczegółowe po kliknięciu w element
class PersonDetailedInfo extends React.Component {

  render() {
    const {title, gender, birth_year, eye_color, hair_color, homeworld, height, mass, isDisplayed} = this.props;
    return (
            <div className="col-md-6 personal-info-container">
              <div className="personal-info">
                <div className="title">
                  {title}
                </div>
                <div className="one-info">
                  Płeć: {gender}
                </div>
                <div className="one-info">
                  Urodzony: {birth_year}
                </div>
                <div className="one-info">
                  Oczy: {eye_color}
                </div>
                <div className="one-info">
                  Włosy: {hair_color}
                </div>
                <div className="one-info">
                  Pochodzenie: {homeworld}
                </div>
                <div className="one-info">
                  Wysokość: {height}
                </div>
                <div className="one-info">
                  Masa: {mass}
                </div>
              </div>
            </div>
            )
  }
}


// info szczegółowe po kliknięciu w element
class VehicleDetailedInfo extends React.Component {

  render() {
    const {title, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, isDisplayed} = this.props;
    return (
            <div className="col-md-6 personal-info-container">
              <div className="personal-info">
                <div className="title">
                  {title}
                </div>
                <div className="one-info">
                  Model: {model}
                </div>
                <div className="one-info">
                  Producent: {manufacturer}
                </div>
                <div className="one-info">
                  Koszt: {cost_in_credits} kredytów
                </div>
                <div className="one-info">
                  Długość: {length} m.
                </div>
                <div className="one-info">
                  Max. prędkość atmosferyczna: {max_atmosphering_speed} km/h
                </div>
                <div className="one-info">
                  Ilość załogi: {crew}
                </div>
                <div className="one-info">
                  Ilość pasażerów: {passengers}
                </div>
              </div>
            </div>
            )
  }
}

// szczegółowe info prawa kolumna
class PersonPersonalProjects extends React.Component {

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

// prawa kolumna jedna kategoria
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
