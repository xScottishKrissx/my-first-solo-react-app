import React from 'react';
import './App.css';
import {NewCard } from './components/Card/card';
import { Header } from './components/header';
import { Main } from './components/main';
//import { NavBar } from './components/navbar/navbar';
import './data/data';
import {BrowserRouter,Route, Link} from 'react-router-dom';

// class App extends React.Component{
//   render(){
//     //console.log("Our Data is.." + this.props.data);    
     
//     return (
//       <div className="wrapper">        
        
//         {/* The fooid is used to get the correct
//             array object ---------------------->
//         */}
//         <NewCard data={this.props.data} fooid="0" />
//         <NewCard data={this.props.data} fooid="1" />
//         <NewCard data={this.props.data} fooid="2" />

          
        
       

//       </div>
//     );
//   }
// }

// The following is the exact same as above...
//  ... but shorter.
const App = (props) => (
  <div className="wrapper">
      <Header />
      <Main />


      <NewCard data={props.data} fooid="0" />
      <NewCard data={props.data} fooid="1" />
      <NewCard data={props.data} fooid="2" />
  </div>
)

export default App;