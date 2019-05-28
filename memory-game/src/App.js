import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Score from "./components/Score";
import Pictures from "./components/Pictures";
import images from "./images.json";

class App extends Component {

  state = {
    images,
    randomArray: [],
    picked: [],
    score: 0,
    high: 0
  };

  componentDidMount(){
    this.randomize();
  };

  select = id => {
    //if hasn't been picked, add one to score
    if (this.state.picked.indexOf(id) === -1) {
      this.state.picked.push(id);
      this.setState({score: this.state.score + 1}, this.check());
      this.randomize();
    }
    else {
      this.restart();
    }
  }

  check = () => {
    //set high score if met
    console.log(this.state.score)
    if (this.state.score + 1 > this.state.high){
      this.setState({high: this.state.high + 1})
    }
  }

  randomize = () => {
    const newArr = [];
    let tempArr = this.state.images;
    for (let i = tempArr.length; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i));
      newArr.push(tempArr[rand])
      tempArr = tempArr.filter(element => newArr.indexOf(element) === -1)
    }
    this.setState({randomArray: newArr});
  }

  restart = () => {
    this.setState({score: 0, picked: []})
    this.randomize();
  }

  render() {
    return (
      <div>
        <Header>
          <Score
            score={this.state.score}
            high={this.state.high}
          />
        </Header>
        <Main>
          {console.log(this.state.randomArray)}
          {this.state.randomArray.map(picture => (
            <Pictures
              select={this.select}
              id={picture.id}
              key={picture.id}
              image={picture.image}
              name={picture.name}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;