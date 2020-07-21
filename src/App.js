import React, { Component } from "react";
import Header from "./components/Header";
import "./app.scss";
import SharedButton from "./components/Button";
import ListItem from "./components/ListItem";
import Headline from "./components/Headline";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

const tempArray = [
  {
    fName: "Alan",
    lName: "Beltrán",
    email: "sevilbm94@hotmail.com",
    age: 25,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="app" data-test="AppComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click de button to render posts"
            tempArray={tempArray}
          />
          {!hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  description: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
