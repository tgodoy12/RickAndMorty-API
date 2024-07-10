import React from "react";

const CharacterCard = (props) => {

    return(
        <div className="card mx-3" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
        </div>
        </div>
    );
}

export default CharacterCard;