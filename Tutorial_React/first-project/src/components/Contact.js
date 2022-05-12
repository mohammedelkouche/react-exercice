
import React, { Component } from 'react'

 class Contact extends Component {
  render() {
    return (
      <>
      <div>
          <h3>{this.props.name}</h3>
          <ul>
              <li>email  = {this.props.email}</li>
              <li>phone = {this.props.phone}</li>
          </ul>
      </div>
      </>
    )
  }
}
export default Contact ;