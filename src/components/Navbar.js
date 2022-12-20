import React from "react";

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>Group Buying</a>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <a className="nav-link " href="/login">Login</a>

            </div>
          </div>
        </div>
      </nav >
    )
  }
}

export default Navbar