import React from 'react';
import './card.css';

class RandomImage extends React.Component{

    constructor(props){
        super(props);
        
        this.state ={
            pictures: [],
        }
    }

    componentDidMount(){
        fetch('https://randomuser.me/api/?results=1')
        .then(results => {
            return results.json();
        }).then(data => {
            let pictures = data.results.map((pic) => {
                // console.log(pic.id);
                return(                            
                     <img key={pic.id} alt="tempAuthorImage" src={pic.picture.medium} />                    
                    )
            })
            
            this.setState({pictures: pictures});
            // console.log("state", this.state.pictures);
        })
    }

    render(){
        return <span className="tempRemoveBorder">{this.state.pictures}</span>;
    }
}

// class AddLike extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             likes: [],
//         }
//     }

//     addLike(e){
//         console.log("Add Like Please to..." + e.target.id )
//     }

//     render(){

//         return (
//             <div>
//                 <ul>
//                     <li onClick={this.addLike} id={this.props.id}>{this.props.id} | {this.props.likes}</li>                    
//                 </ul>
//             </div>
//         );
//     }
// }







export class Card extends React.Component{

    constructor(props){
        super(props);

        this.state = {            
            url: '/static/media/like.df7ce1e7.png',
            actualMethod: require('./assets/like.png'),
            currentLikes:0,
            currentDislikes: 0,
            isLike:false,
            clickedid: "0"
            // pictures: []
        }
        this.clicked = this.clicked.bind(this);        
        this.handleLike = this.handleLike.bind(this);
        
    }

    // I need to research .fetch more,


    clicked(e){
        
        console.log(this.thing);
        console.log(this.props.thing);
       // console.log("You Clicked " + e.target.id);
       // console.log("Classname is.. " + e.target.className);
        //const x = e.target.id;    
        //const y = Math.random () < 0.5 ?  true : false;
        const y = this.state.isLike;
        //console.log(y);
        //document.getElementById(e.target.id).innerHTML = y;



        const currentCardId = document.getElementById(e.currentTarget.id).id;
        console.log("Card ID... " + currentCardId);
        
        this.setState({
            clickedid:currentCardId
        })
        console.log("Clicked ID is.." + this.state.clickedid);
        

        //const ttest = document.getElementById(e.target.id).innerHTML = y;
        //console.log(ttest);
        
        
        if (y === false ){
         // document.getElementById(e.target.id).innerHTML = "Dislike";
          //console.log("Dislike");          
          
          this.setState({
            //   url: '/static/media/dislike.6ebbb798.png'
            actualMethod: require('./assets/dislike.png'),
            currentLikes: this.state.currentLikes + 1,
            isLike: true
          })        
          
        }else if(y === true ){
          //document.getElementById(e.target.id).innerHTML = "Like";
          //console.log("Like");               

          this.setState({
            // url: '/static/media/like.df7ce1e7.png'
            actualMethod: require('./assets/like.png'),
            //currentDislikes: this.state.currentDislikes + 1,
            currentLikes: this.state.currentLikes - 1,
            isLike: false
            })
            
        }else{

        }
        
       //const currentLikes = document.getElementById("likes").innerHTML;
       //console.log("Current Likes: " + currentLikes);
      }


      handleLike(e){        
        //console.log("You clicked " + e.target.id);

        //const number1 = document.getElementById(e.target.id).innerHTML;
        //console.log(number1);

        // number1 is read only.
        // I think the solution it handle adding likes via state in a seperate component
        // similiar to how I work with the random image.
        // I would need to pass a prop with the correct card id to identify each like value
        
        //const number2 = number1 =+ 1;
        //console.log(number2);

      }   


    render(){        
    const {data}  = this.props;
    console.log(this.props.fooid);
    //console.log(this.state.isLike)
    // const number  = 0;

    




    // const newDataList  = data.forEach(currentItem => {
    //     console.log("new data list is = " + currentItem.id);
    //     return (
    //         <div className="hello">
    //             <h2>{currentItem.title}</h2>
    //             <img src="https://picsum.photos/500/200/?random" alt="newTemp" />
    //         </div>
    //     );
    // });

    // const newNewDataList = data.map(function(info){
    //     console.log(info);
    //     return (
    //         <div key={info.id}  className="hello">
    //             <h2>{info.title}</h2>
    //             <img src={info.image_path} alt="newTemp" />
    //         </div>
    //     )
    // })
    

    const test = data.find(function(element){
        return element === 0;
    })
    console.log("Return element " + test)

    const dataList = data.map(cardData => {


      //console.log(cardData);
      //console.log("ID is..." + cardData.id);
      //console.log(cardData.title);
      //console.log(cardData.likes);

    //   const randomNum = (Math.floor(Math.random() * 2) + 0);

    //   console.log(<RandomImage />);

        const newLikes  = this.state.currentLikes + cardData.likes;
        
        console.log(newLikes);
      return (    
           
       <div key={cardData.id} id={cardData.id} onClick={this.experiment} data-set="a" className="card">  
         {/* <img src={require("./assets/" + cardData.image_path + ".jpg")} className="" alt="temp" />       */}
          {/* <img src={cardData.image_path} alt="temp" /> */}

         <img src={"https://unsplash.it/500/200?random=" + cardData.id} alt="temp" />

          {/* <img src="https://picsum.photos/500/200/?random" alt="temp" /> */}
         
          <p className="title" >{cardData.title}</p>  
          <p className="text">{cardData.text}</p>    

          <div className="postInfo" >
            <div className="author">
                {/* <img src={require("./assets/author.jpg")} alt="author"/>                  */}
                {/* <img src="https://randomuser.me/api/?inc=picture" alt="author"  /> */}
                {/* <img src={this.state.pictures} alt="author" /> */}
                <RandomImage key={cardData.id}/>
                
                <p className="author-name" >{cardData.author}</p>
                <p className="post-date" >{cardData.post_date}</p>
            </div>
            <div className="likes">
                {/* <img className="like" id="likes" onClick={this.clicked} src={require("./assets/like.png")} alt="like" /> */}
                <img className="like" id={cardData.id} thing={cardData.id} onClick={this.clicked} src={this.state.actualMethod} alt="like" />
                {/* <AddLike id={cardData.id} likes={cardData.likes} /> */}

                {/* Old Way */}
                {/* <p>{this.state.currentLikes}</p>
                <p>{this.state.currentDislikes}</p> */}
                {/* New Way */}
                <p>{newLikes}</p>


                <p> 
                    <span  onClick={this.handleLike} id="myId" className="addLike">{cardData.likes}</span>                     
                    | 
                    <span  onClick={this.handleLike} className="addDislke">{cardData.dislikes}</span> 
                </p>
            </div>   
          </div>

          {/* <p className="">{cardData.likes}</p>  */}
          {/* <p id="likes">{number}</p>     */}
          
          {/* <button className={"button"} id={"btnId-" + cardData.id} onClick={this.clicked}>Like</button>   */}
         
        </div>    
       )
    });    
    
    /*
    let i;
    for(i = 0; i <= 2; i++ ){
         <span>i</span>;
      console.log("I is.." + i);
      console.log("console log data list" + dataList)
      


    }

    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    var text = "";
    var x;
    for (x = 0; x < cars.length; x++) {
        text += cars[x] + "<br>";
    }
    document.getElementsByClassName("cardWrapper").innerHTML = text;
    */

    return(
      <div className="cardWrapper">{dataList} </div>
      
    );

    }

}

/*
export class AddLike extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    render(){
        let thing ;
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <span>Likes: {this.props.likeCount}</span>
                <span> New Likes:{this.props.newLikes}</span>
            </div>
        )
    }
}
*/



/*
export class Card extends React.Component{

    constructor(props){
        super(props);
        this.state = {counter: "Yes"};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //Do something
        //alert("Button Pressed");
        const newCounter = this.state.counter === "No" ? "Yes": "No";
        //const newCounter = coinToss();
        this.setState({counter: newCounter});
    }

    coinToss(){
        //console.log(Math.random () < 0.5 ? "Heads" : "Tails");
        return Math.random () < 0.5 ? "Heads" : "Tails";
    }

    render(){
    return (    
            <div>
                <h1>Hello World </h1>
                <p>Let's get back to some basics</p>
                <button onClick={this.coinToss}>Click Me!</button>
                <p>Counter:{this.state.counter}</p>
            </div>
        );
    }
}

*/




















/*
const cardcontent = [
    {
        title: ' Title  1',
        subtitle: 'Subtitle 1',
        text: 'Text 1',
        src: 'src 1'
    },
    {
        title: ' Title  2',
        subtitle: 'Subtitle 2',
        text: 'Text 2',
        src: 'src 2'
    },
    {
        title: ' Title  3',
        subtitle: 'Subtitle 3',
        text: 'Text 3',
        src: 'src 3'
    },
    {
        title: ' Title  4',
        subtitle: 'Subtitle 4',
        text: 'Text 4',
        src: 'src 4'
    },
    {
        title: ' Title  5',
        subtitle: 'Subtitle 5',
        text: 'Text 5',
        src: 'src 5'
    },
    {
        title: ' Title  6',
        subtitle: 'Subtitle 6',
        text: 'Text 6',
        src: 'src 6'
    }
];


export class Card extends React.Component{
    constructor(props){
        super(props);
  
        let likeCount;  
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log(e.target.id);
        this.setState({likeCount: + 2 });
    }
    
   render(){
    const likeCount = Math.floor(Math.random() * 101);
    return ( 
        
        <div >
           {cardcontent.map((card,index) => 
                <div key={'card_' + index} className="card" >
                    <img key={'img_' + index} src={card.src} />

                    <h1 key={'title' + index}> {card.title} </h1>

                    <h3 key={'subtitle_' + index}> {card.subtitle} </h3>

                    <p key={'text_' + index}> {card.text} </p>

                    <button key={"button_" + index} id={index++} onClick={this.handleClick}>Like</button>
                    <p>Like Value:{likeCount}</p>
                </div>
           )
           }

           
           
        </div>

        
    );
   }
}
*/