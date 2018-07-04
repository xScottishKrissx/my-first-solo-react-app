import React from 'react';
//import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './App.css';
//import './components/Card/card';
import { Card /*AddLike*/ , NewCard } from './components/Card/card';
//import { NavBar } from './components/navbar/navbar';
import './data/data';


class App extends React.Component{
  render(){
    //console.log("Our Data is.." + this.props.data);    
     
    return (
      <div className="wrapper">        
        
        {/* The fooid is used to get the correct
            array object ---------------------->
        */}
        <NewCard data={this.props.data} fooid="0" />
        <NewCard data={this.props.data} fooid="1" />
        <NewCard data={this.props.data} fooid="2" />
        {/* <Card data={this.props.data} fooid="0" />  
        <Card data={this.props.data} fooid="1" /> 
        <Card data={this.props.data} fooid="2" />   */}
          
        
       
      
        {/*
        <Card  
          title="Title 1"
          subtitle="Subtitle 1"
          text = "Text 1"
          author = "Author 2"
          likeCount = {1}
        
        />        

        <Card  
          title="Card 2"
          subtitle="Subtitle 2"
          text = "Text 2"
          author = "Author 2"
          likeCount = {200}
        />
        */}
      </div>
    );
  }
}
// The Following 2 are the same thing.
// class Footer extends React.Component{
//   render(){
//     return (
//         <div className="Footer">
//           <p>Footer</p>
//         </div>
//       );
//   }
// }

// const StatelessFunctionalFooter = () => 
//   //Space for data manipulation
//     <div className="Footer">
//       <p>Stateless Functional Footer</p>
//     </div>


export default App;
