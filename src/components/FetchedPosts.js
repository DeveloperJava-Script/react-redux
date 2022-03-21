import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../redux/actions"
import Post from "./Post"

export default function FetchedPosts() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts)
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <div className="spinner-border text-primary" role="status"></div>
  }
  return (
    <div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
      {posts
        .sort(() => 0.5 - Math.random())
        .map(item => (
          <Post key={item.id} item={item} />
        ))}
    </div>
  )
}
