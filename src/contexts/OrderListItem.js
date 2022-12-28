import React from "react";
//import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background';
import MenuTable from '../components/menu/MenuTable'


class OrderListItem extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <div className="text-info p-3">Order List!</div>
        <MenuTable />
      </div>

    )
  }
}



export default OrderListItem