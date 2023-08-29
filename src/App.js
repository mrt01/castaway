import "./styles/App.css";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <div className="App_header_Right">
          <h1 style={{ margin: 0 }}>Castaway</h1>
        </div>
        <div className="App_header_Left">
          <nav>
            <a href="#">Home</a>
            <a href="#">Episodes</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
      <Section1 />
      <Section2 />
      <Section3 />
      <Form />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
