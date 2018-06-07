import React from 'react';
import './card.css';


export class Card extends React.Component{
    render(){
        return (
            <div>
                <img alt="thingy"/>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
                <p>{this.props.text}</p>
                <h5>{this.props.author}</h5>

                <AddLike likeCount={this.props.likeCount}/>
            </div>
        );
    }
}

class AddLike extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log("Click");
        console.log(this.props.likeCount);
        const thing = this.props.likeCount + 10;
        console.log("Like Count is.." + thing);
    }


    render(){
        let thing ;
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <span>Likes: {this.props.likeCount}</span>
                <span> New Likes:{thing}</span>
            </div>
        )
    }
}


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