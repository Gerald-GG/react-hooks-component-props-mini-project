import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
    This is My Blog. Call me Gee. On this, the instructions were, "You are on your own."<br />
    React is fun and I am loving it.
    <About image={blogData.image} />
    <Header img={blogData.image} about={blogData.about} />
    <Article />
    <ArticleList />
    </div>
  );
}

export default App;
