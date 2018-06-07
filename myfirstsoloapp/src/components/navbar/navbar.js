import React from 'react';
import './navbar.css';

export class NavBar extends React.Component{

    constructor(props){
        super(props);        
        this.state = {link: this.props.title};
    }

    render(){
       
        const pages = ['Home', 'Page 1', 'Page 2','Page 3', 'Page 4', 'Page 5'];
        const links = pages.map((page, i) => { 
            return (
                <li onClick={this.handleClick} id={page} key={'page_' + i}><a  key={'page_' + i} > {page} </a></li>
             ) 
            }
        );

    return( 
        <div>
        <ul>{links}</ul>
        </div>
        );
    }
}