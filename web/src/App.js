import React, { useRef } from "react";
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
  const windowNavRef = useRef(window.navigator);
  windowNavRef.current = window.navigator;

  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);
  const view = getWebView();
  const isIosWebview = view === "ios-webview";
  const userAgentData = window.navigator.userAgentData;
  console.log("🚀 ~ userAgentData", JSON.stringify(userAgentData));
  console.log(window.navigator);

  // const windowObj = { ...window.navigator };
  // console.log("🚀 ~ windowObj", windoObj);
  // console.log(window.navigator);
  // console.log(
  //   "🚀 ~ windowNavRef.current",
  //   JSON.stringify(windowNavRef.current)
  // );
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
          <p>{`userAgentData:  ${JSON.stringify(userAgentData)}`}</p>
          <p>{`platform:  ${window.navigator.platform}`}</p>
          <p>{`cookieEnabled:  ${window.navigator.cookieEnabled}`}</p>
          <p>{`doNotTrack: ${window.navigator.doNotTrack}`}</p>
        </div>
      </header>
    </div>
  );
};

export default App;
