import React from "react";
import { connect } from 'react-redux'
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background';
import MenuForm from "../components/menu/MenuForm";
import { createMenu } from "../actions"
import MenuTable from "../components/menu/MenuTable";
import MenuTableForm from "../components/menu/MenuTableForm";

class MenuCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: null
    }
  }

  onSubmit = (value) => {
    //console.log('before', this.state)
    // console.log('tettttt', this.state)
    this.setState({
      'formValues': value
    })
    //this.state.formValues.item = value.item
    //this.state = { formValues: value }
    //console.log('after', this.state)
  }


  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <div className="container">
          <div className="row ">
            <div className="col-4 ">

              <MenuForm />
            </div>
            <div className="col-8" >
              <MenuTableForm onSubmit={this.onSubmit} />
              <MenuTable value={this.state.formValues} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default MenuCreate