import React from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import blogData from "../data/blog";


function App() {

  return (
    <div className="App">
     <About imgSrc={blogData.image} about={blogData.about}/>
     <ArticleList posts={blogData.posts}/>
     <Header name={blogData.name}/>
    </div>
  );
}

export default App;
