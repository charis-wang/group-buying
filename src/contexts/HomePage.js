import React from "react";
import Navbar from "../components/Navbar";
import BackgroundImagePage from '../components/Background'
import Banner from '../components/Banner'
import Sidebar from "../components/Sidebar";
import '../components/index.css'



class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BackgroundImagePage />
        <Sidebar />
      </div >
    )
  }
}

export default HomePage