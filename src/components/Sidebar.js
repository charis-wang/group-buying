import React, { useState } from "react";
//import { useNavigate } from 'react-router-dom'
import { clickMenu } from "../actions";
import './index.css'

class Sidebar extends React.Component {



  render() {
    return (

      <div className="col-2">
        <ul className="nav flex-column mt-5">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">All</a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="/drinks" > Drink</a >
          </li >
          <li className="nav-item" >
            <a className="nav-link" href="lunchbox" > Lunch Box</a >
          </li >
        </ul >
      </div >



    )
  }
}

export default Sidebar