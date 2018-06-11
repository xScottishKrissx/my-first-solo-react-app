import React from 'react';
import ReactDOM from 'react-dom';

//import logo from './logo.svg';
import './App.css';
//import './components/Card/card';
import { Card, AddLike} from './components/Card/card';
import { NavBar } from './components/navbar/navbar';
import './data/data';




let test;
class App extends React.Component{
  render(){
    //console.log("Our Data is.." + this.props.data);

    return (
      <div>
        
        <NavBar />
        <GetData data={this.props.data} />
        <Footer />
        <StatelessFunctionalFooter />
          
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


class GetData extends React.Component{
  clicked(e){
    
    console.log("You Clicked " + e.target.id);
    //const x = e.target.id;    
    const y = Math.random () < 0.5 ?  true : false;
    document.getElementById(e.target.id).innerHTML = y;
    //const ttest = document.getElementById(e.target.id).innerHTML = y;
    //console.log(ttest);
    
    
    if (!y === true ){
      document.getElementById(e.target.id).innerHTML = "Dislike";
      console.log("Dislike");
      
    }else{
      document.getElementById(e.target.id).innerHTML = "Like";
      console.log("Like");
    }
    
   const currentLikes = document.getElementById("likes").innerHTML;
   console.log("Current Likes: " + currentLikes);
  }


  
  render(){

    const {data}  = this.props;
    const number  = 0;
    const dataList = data.map(cardData => {
      //console.log(cardData);
      console.log("ID is..." + cardData.id);
      console.log(cardData.title);
      console.log(cardData.likes);

      return (
        <div key={cardData.id} id={cardData.id} className="card">        
          <p>{cardData.title}</p>         
          <p>{cardData.likes}</p> 
          <p id="likes">{number}</p>     
          <button id={"btnId-" + cardData.id} onClick={this.clicked}>Like</button>  
        </div>
        
        
      )

    });


    
    
    return(
      <div>{dataList}</div>
      
    );
  }
}


// The Following 2 are the same thing.
class Footer extends React.Component{
  render(){
    return (
        <div className="Footer">
          <p>Footer</p>
        </div>
      );
  }
}

const StatelessFunctionalFooter = () => 
  //Space for data manipulation
    <div className="Footer">
      <p>Stateless Functional Footer</p>
    </div>


export default App;
