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
  return(
          <div className="row">
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