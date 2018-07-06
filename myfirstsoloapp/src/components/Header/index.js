import React from 'react';
import './index.css';

const Header = () => {
    return (
        <div className="headerWrapper">
            <h3>Cards Project</h3>
            <p>the very first thing i ever did with the react.js framework.</p>
            <p>Components, Props, State, Stateless Components vs Class Based Components, Reusability, Getting a simple project up and running.</p>

            <p>if this page looks empty when you're here then give the browser a refresh a few times. I am using an external service to provide the images and I have zero control over whether or not it works. You should see something like this(insert hyperlink here Christopher!!!)</p>
            <ul>
                <li>Random images generate every time the browser refreshes. This was to demonstrate that i could work with json data and arrays.</li>
                <li>the same goes for the random author image</li>
                <li>I also created a like button that will work as you expect every time you hit the heart</li>
                <li>The like button was practice with using components, props, maps and arrays to experiment with the shadow DOM</li>
                <li>Nothing groundbreaking but i spent a lot of time plugging away at this and i'm proud of what i achieved considering it was my first experience with the framework and my most in depth usage with any javascript framework(if you don't count jquery)</li>
            </ul>
        </div>
    )
}
    


export default Header;