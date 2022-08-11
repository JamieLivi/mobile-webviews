import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ justifyContent: "center" }}>
          <h5>{`standalone: ${standalone}`}</h5>
          <h5>{`userAgent:  ${userAgent}`}</h5>
          <h5>{`safari: ${safari.toString()}`}</h5>
          <h5>{`ios: ${ios}`}</h5>
        </div>
      </header>
    </div>
  );
};

export default App;
