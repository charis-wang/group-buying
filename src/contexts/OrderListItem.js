import React from "react";
//import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background';
import MenuTable from '../components/menu/MenuTable'
import OrderListDetail from "../components/order/OrderListDetail";


class OrderListItem extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <div className="text-info p-3">Order List!</div>
        <div className="row">
          <div className="col-4">
            <span className="text-success">Shop Menu</span>
            <MenuTable />
          </div>
          <div className="col-8">
            <span className="text-danger">Order Detail</span>
            <OrderListDetail />
          </div>
        </div>
      </div>

    )
  }
}



export default OrderListItem