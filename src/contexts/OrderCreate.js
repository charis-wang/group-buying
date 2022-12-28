import React from "react";
import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background';

import OrderDateTimePicker from "../components/order/OrderDateTimePicker";
import OrderForm from "../components/order/OrderForm";

class OrderCreate extends React.Component {


  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <div className="text-info p-3">Order Now!</div>

        <div className="m-3">

          <OrderForm />
        </div>
      </div>
    )
  }
}



export default OrderCreate