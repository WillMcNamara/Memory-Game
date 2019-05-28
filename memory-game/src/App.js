import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Pictures from "./components/Pictures";
import images from "./images.json"

class App extends Component {

  state = {
    images
  };

  select = id => {
    
  }

  render() {
    return (
      <div>
        <Header/>
        <Main>
          {this.state.images.map(picture => (
            <Pictures
              select={this.select}
              id={picture.id}
              image={picture.image}
            />
          ))}
        </Main>
      </div>
    );
  }
}
export default App;
