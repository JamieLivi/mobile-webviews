import React from "react";
import "./App.css";

const getWebView = () => {
  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  if (ios) {
    if (!standalone && safari) {
      //browser
      return "ios-browser";
    } else if (standalone && !safari) {
      //standalone
      return "ios-standalone";
    } else if (!standalone && !safari) {
      //uiwebview
      return "ios-webview";
    }
  } else {
    return false;
  }
};

const App = () => {
  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);
  const view = getWebView();
  const isIosWebview = view === "ios-webview";
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{`standalone: ${standalone}`}</p>
          <p>{`userAgent:  ${userAgent}`}</p>
          <p>{`safari: ${safari}`}</p>
          <p>{`ios: ${ios}`}</p>
          <p>{`isIosWebview: ${isIosWebview}`}</p>
          <p>-------</p>
          <p>{`platform:  ${window.navigator.platform}`}</p>
          <p>{`cookieEnabled:  ${window.navigator.cookieEnabled}`}</p>
          <p>{`doNotTrack: ${window.navigator.doNotTrack}`}</p>
          <p>{`maxTouchPoints: ${window.navigator.maxTouchPoints}`}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
