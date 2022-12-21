import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background'
import Banner from '../components/Banner'
import Sidebar from "../components/Sidebar";
import '../components/index.css'
import MenuGallery from "../components/MenuGallery";
import { connect } from 'react-redux'


class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <div className="container row">
          <Sidebar />
          <MenuGallery />
        </div>
      </div >
    )
  }
}

export default HomePage