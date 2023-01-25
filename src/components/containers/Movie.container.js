import React from 'react';
import {Link} from "react-router-dom";

const Movie = props => {
    return(
        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6166.
        //             621389858306!2d20.127949203263363!3d49.470434409739525!2m3!
        //             1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715fb9ee1b
        //             7d01d%3A0xa07dcc3b704db045!2zxYFvcHVzem5h!5e0!3m2!1sen!2spl
        //             !4v1598621793360!5m2!1sen!2spl" 
        //         style={{width: "100%", height: "400", border: 0}} frameBorder="0" 
        //         allowFullScreen="" aria-hidden="false" tabIndex="0" title="googlemaps">
        // </iframe>


        <section style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <iframe src="https://www.youtube.com/embed/0qzLRlQFFQ4"
                style={{width: "640", height: "480", alignContent: "center"}}  
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>    
            </iframe>
        </section>
    );
}; export default Movie;