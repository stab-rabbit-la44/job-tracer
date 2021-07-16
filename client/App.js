import React, {  Component } from 'react';
import Navbar from './components/Navbar.jsx';
import Routes from './components/Routes.jsx';
import './main.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
