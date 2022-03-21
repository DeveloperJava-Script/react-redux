import React, { Component } from "react"
import { connect } from "react-redux"
import { createPost, showAlert, hideAlert } from "../redux/actions"

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "" }
  }

  submitHandler = e => {
    e.preventDefault()
    const { title } = this.state
    if (!title.trim().length) {
      this.props.showAlert("warning")
      return
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    }

    this.props.createPost(newPost)
    this.setState({ title: "" })
  }

  inputHandler = e => {
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }))
  }

  closeAlertHandler = () => {
    this.props.hideAlert()
  }

  render() {
    return (
      <div>
        {this.props.alert && (
          <div className={`alert alert-${this.props.alert}`} role="alert">
            <div className="d-flex justify-content-between">
              <p className="m-0">
                Внимание, название поста не может быть пустым
              </p>
              <button
                type="button"
                className="btn-close"
                onClick={this.closeAlertHandler}
              ></button>
            </div>
          </div>
        )}
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Введите название поста
            </label>
            <input
              className="form-control mb-2"
              id="exampleInputPassword1"
              value={this.state.title}
              name={"title"}
              onChange={this.inputHandler}
            />
            <button className="btn btn-success" type="submit">
              Добавить
            </button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    alert: state.app.alert,
  }
}
const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
