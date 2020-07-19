import React from "react";
import Header from "./components/Header";
import "./app.scss";
import Headline from "./components/Headline";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click de button to render posts" />
      </section>
    </div>
  );
}

export default App;
