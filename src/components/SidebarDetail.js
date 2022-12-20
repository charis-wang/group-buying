import React from 'react'
import { connect } from 'react-redux'

const SidebarDetail = (Drinks) => {
  return (
    <li className="nav-item" >
      <a className="nav-link" href="#" > Lunch Box</a >
    </li >
  )
}

const mapToStateProps = (state) => {
  return { menu: state.clickMenu }
}

export default connect(mapToStateProps)(SidebarDetail)
