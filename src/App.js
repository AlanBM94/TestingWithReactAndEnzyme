import React from "react";
import Header from "./components/Header";
import "./app.scss";
import Headline from "./components/Headline";

const tempArray = [
  {
    fName: "Alan",
    lName: "Beltrán",
    email: "sevilbm94@hotmail.com",
    age: 25,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click de button to render posts"
          tempArray={tempArray}
        />
      </section>
    </div>
  );
}

export default App;
