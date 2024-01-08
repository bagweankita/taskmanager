import logo from "./logo.svg";
import "./App.css";
import Content from "./component/content/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
