import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { Contact, CTA, Footer, Navbar, Skills } from "./components";
import { Blog, Header, Projects } from "./containers";
import "./App.css";
import SingleBlog from "./pages/single-blog/SingleBlog";

function App() {
  return (
    <div id="top" className="App">
      {/* <SingleBlog /> */}
      <Navbar />
      <Header
        fullname="damilola bada"
        description="web developer & creative thinker"
        aboutme="I am passionate about using various web development tools to create fun products that solve problems in various industries. Let's connect if you're looking for a creative mind to join your team."
      />
      <div id="skills" className="App__skillscta  section__margin">
        <Skills />
        <CTA />
      </div>
      <Projects />
      <Blog />
      <div id="contact" className="App__contact  section__margin">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
