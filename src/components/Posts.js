import React from "react"
import { connect } from "react-redux"
import Post from "./Post"

function Posts({ posts }) {
  console.log("render posts")
  if (!posts.length) {
    return <p>Постов пока нет</p>
  }
  return (
    <div>
      {posts.map(item => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
  }
}
export default connect(mapStateToProps, null)(Posts)
