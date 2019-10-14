import React, { Component } from 'react';
import Particles from 'react-particles-js'
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Rank from './components/Rank/Rank.js'
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 77,
      density: {
        enable: true,
        value_area: 700
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleOptions} 
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  } 
}

export default App;
