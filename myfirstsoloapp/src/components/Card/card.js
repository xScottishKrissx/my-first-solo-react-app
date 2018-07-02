import React from 'react';
import './card.css';
import RandomAuthorImage from '../random-image/random-image';
import HandleLike from './handle-like';


// A Class for handling add-like
// A class for rendering the card
// A class for 

export class Card extends React.Component{

     render(){        
        const {data}  = this.props;
        const cardArray = [];
        const singleCard = data[this.props.fooid];        
        cardArray.push(singleCard);    

        const newDataList = cardArray.map(newcarddata => {  
            return(
                <div key={newcarddata.id} id={newcarddata.id} className="card">
                
                    {/* The random image is made random using numerical ID of each card 
                        This is down to the way the website I am using serves their random images.
                    */}
                    <GetRandomHeaderImage id={newcarddata.id}/>

                    <p className="title" >{newcarddata.title}</p>  
                    <p className="text">{newcarddata.text}</p>

                    <div className="postInfo">

                        <div className="author" >
                            <RandomAuthorImage key={newcarddata.id}/>                        
                            <p className="author-name" >{newcarddata.author}</p>
                            <p className="post-date" >{newcarddata.post_date}</p>                        
                        </div>

                        <HandleLike  
                            carddataid={newcarddata.id}                             
                            dislikes={newcarddata.dislikes}
                            likes={newcarddata.likes}
                        />              



                    </div>

                </div>
            )
        });

    return(
        <div className="cardWrapper"><NewCard /> | {newDataList}</div>   

    );

    }

}

const NewCard = () => {
    return <p>New Card</p>;
}


const GetRandomHeaderImage = ({id}) => {
    return <img src={"https://unsplash.it/500/200?random=" + id} alt="random_image" />;
}

