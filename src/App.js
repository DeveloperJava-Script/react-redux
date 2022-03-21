import React from "react"
import FetchedPosts from "./components/FetchedPosts"
import PostForm from "./components/PostForm"
import Posts from "./components/Posts"

export default function App() {
  return (
    <div className="container">
      <h1>React redux</h1>
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Загруженные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}
