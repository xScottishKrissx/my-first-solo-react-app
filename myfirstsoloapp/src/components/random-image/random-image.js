import React from 'react';
import './random-image.css';

export default class RandomAuthorImage extends React.Component{

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