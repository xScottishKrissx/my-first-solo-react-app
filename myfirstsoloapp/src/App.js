import React from 'react';
import './App.css';

import  Header  from  './components/Header/index';
import Footer from './components/Footer/footer';
import { NewCard } from './components/Card/card';
import './data/data';


class App extends React.Component{
  render(){
    console.log("Hello, i hope you like my very first react project :)");    
     
    return (
      <div className="wrapper">        
        
        {/* The fooid is used to get the correct
            array object ---------------------->
        */}

        <Header />

        {/* 
          Having so may card components is probably not the most efficient way of 
          doing this but it helped me get a better understanding of working with 
          components, props and state.

          It also helped me visualise how I could build a website using react by organising 
          the components as you see here with a header, the content and then a footer.

        */}
        <NewCard data={this.props.data} fooid="0" />
        <NewCard data={this.props.data} fooid="1" />
        <NewCard data={this.props.data} fooid="2" />

        <NewCard data={this.props.data} fooid="3" />
        <NewCard data={this.props.data} fooid="4" />
        <NewCard data={this.props.data} fooid="5" />

        <NewCard data={this.props.data} fooid="6" />
        <NewCard data={this.props.data} fooid="7" />
        <NewCard data={this.props.data} fooid="8" />        
        
        <NewCard data={this.props.data} fooid="9" />
        <NewCard data={this.props.data} fooid="10" />
        <NewCard data={this.props.data} fooid="11" />

        <Footer />

        
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
