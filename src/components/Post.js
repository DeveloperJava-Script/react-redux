import React from "react"

export default function Post({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
      </div>
    </div>
  )
}
