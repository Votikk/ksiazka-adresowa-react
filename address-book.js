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
              />
            <PersonalProjects
              />
            <ContactItem 
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              />
            <ContactItem 
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              />
            <ContactItem 
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              />
            <ContactItem 
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              />
            <ContactItem 
              name="Monika Pietrzałek"
              tel="111 111 111"
              email="mpietrzalek@example.com"
              />
            <ContactItem 
              name="Magda Osnowska"
              tel="22 222 222"
              email="mosnowska@example.com"
              />
          </div>
          );
}

function PersonalInfo() {
  return (
          <div className="col-md-6">
            <div className="personal-info">
              <div className="avatar">
          
              </div>
              <div className="title">
                Monika pietrzałek
              </div>
              <div className="tel">
                612 612 612
              </div>
              <div className="email">
                mpietrzalek@example.com
              </div>
              <div className="City">
                Warsaw
              </div>
              <div className="Postal">
                00-030
              </div>
              <div className="Street">
                ul. Kopernika
              </div>
            </div>
          </div>
          );
}

function PersonalProjects() {
  return (
          <div class="col-md-6">
            <div class="personal-projects">
              <ProjectItem 
                title="google.com"
                frontend=""
                backend=""
                />
              <ProjectItem 
                title="wp.pl"
                frontend=""
                backend=""
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
            <div class="project">
              <span class="title">{title}</span>
              <span class="frontend-icon">FRONT-END</span>
              <span class="backend-icon">BACKEND-END</span>
            </div>
            );
  }
}

class ContactItem extends React.Component {
  render() {
    const {name, tel, email} = this.props;
    return (
            <div className="col-md-3">
              <div className="single" onClick={() => alert('click!')}>
                <div className="avatar">
            
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
              </div>
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

ReactDOM.render(<App />,
        $("#address-book").get(0));