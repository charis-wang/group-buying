import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom'
import { clickMenu } from "../actions";
import './index.css'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = ({ isSidebarOpen: false })
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this)
  }

  onButtonClickHandler() {
    console.log(this)
    this.setState({ isSidebarOpen: true })
    console.log(this.state.isSidebarOpen)
  }

  render() {
    return (
      <div className="container row">
        <div className="col-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Whole Menu</a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="#" > Drink</a >
            </li >
            <li className="nav-item" >
              <a className="nav-link" href="#" > Lunch Box</a >
            </li >
          </ul >

          <button
            className="btn"
            onClick={() => this.onButtonClickHandler()}
          >
            Drinks

          </button >
        </div >


        <div className="col-9">
          <p>show menu</p>
          <img src='../../background-image.jpeg' className="img" alt="..." />
          <img src='../../background-image.jpeg' className="img" alt="..." />
          <img src='../../background-image.jpeg' className="img" alt="..." />
        </div>
      </div >
    )
  }
}

export default Sidebar