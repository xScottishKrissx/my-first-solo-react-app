import React from 'react';

//import logo from './logo.svg';
import './App.css';
//import './components/Card/card';
import { Card} from './components/Card/card';
import { NavBar } from './components/navbar/navbar';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {likes: 1 };
  }

  render(){
    setTimeout(() => {
      this.setState({likes: ''})
    })
    return (
      <div>
        <NavBar />

        <Card  
          title="Card 1"
          subtitle="Subtitle 1"
          text = "Text 1"
          author = "Author 2"
          likeCount = {1030}
        />

        <Card  
          title="Card 2"
          subtitle="Subtitle 2"
          text = "Text 2"
          author = "Author 2"
          likeCount = {200}
        />

        <Card  
          title="Card 3"
          subtitle="Subtitle 3"
          text = "Text 3"
          author = "Author 3"
        />

        <Card  
          title="Card 4"
          subtitle="Subtitle 4"
          text = "Text 4"
          author = "Author 4"
        />

        <Card  
          title="Card 5"
          subtitle="Subtitle 5"
          text = "Text 5"
          author = "Author 5"
        />

        <Card  
          title="Card 6"
          subtitle="Subtitle 6"
          text = "Text 6"
          author = "Author 6"
        />

      </div>
    );
  }
}

export default App;
