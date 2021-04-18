import "../App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import about from "../about";
import Hobbies from "./Hobbies";
import Work from "./Work";
import Education from "./Education";

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
          <Route path="/education" component={Education}>
            <Header />
            <Education />
          </Route>

          <Route path="/work" component={Work}>
            <Header />
            <Work />
          </Route>

          <Route path="/hobbies" component={Hobbies}>
            <Header />
            <Hobbies />
          </Route>

          <Route path="/about" component={About}>
            <Header />
            {about.map(createAbout)}
          </Route>

          <Route exact path="/" component={Home}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
