import {
  CREATE_POST,
  FETCH_POST,
  HIDE_ALERT,
  HIDE_LOADER,
  SHOW_ALERT,
  SHOW_LOADER,
} from "./types"

export const createPost = post => {
  return {
    type: CREATE_POST,
    payload: post,
  }
}

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  }
}
export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  }
}
export const showAlert = alertName => {
  return {
    type: SHOW_ALERT,
    payload: alertName,
  }
}
export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  }
}

export const fetchPosts = () => {
  return async dispatch => {
    dispatch(showLoader())
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    )
    const json = await res.json()
    dispatch({
      type: FETCH_POST,
      payload: json,
    })
    dispatch(hideLoader())
  }
}
