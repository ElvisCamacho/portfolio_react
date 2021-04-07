import "../App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import about from "../about";
import Hobbies from "./Hobbies";

function createAbout(about) {
  return (
    <About
      key={about.id}
      about={about.about}
      firstParagraph={about.firstParagraph}
      lastParagraph={about.lastParagraph}
      contactMe={about.contactMe}
      email={about.email}
      telefone={about.telefone}
    />
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/hobbies" component={Hobbies}>
            <Header />
            <Hobbies />
          </Route>

          <Route path="/about" component={About}>
            <Header />
            {about.map(createAbout)}
            {/* <About
              about={about[0].about}
              firstParagraph={about[0].firstParagraph}
              lastParagraph={about[0].lastParagraph}
              contactME={about[0].contactME}
              email={about[0].email}
              telefone={about[0].telefone}
            />*/}
          </Route>

          <Route path="/" component={Home}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
