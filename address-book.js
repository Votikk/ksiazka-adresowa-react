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
                  <div className="options">
                    <div className="single">
                      Lista
                    </div>
                    <div className="single">
                      Dodaj
                    </div>
                  </div>
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
          </div>
          );
}

function ContactItem({ name, tel, email}) {
  return (
          <div className="col-md-3">
            <div className="single">
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

ReactDOM.render(<App />,
        $("#address-book").get(0));