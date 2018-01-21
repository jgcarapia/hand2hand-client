import React from 'react';


function Card(props) {
  return(

  <div className ="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://lorempixel.com/100/190/nature/6"></img>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h5><b>{props.needs}</b></h5>
          <p>{props.description}</p>
        </div>
        <div className="card-action">
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  </div>



  );
}

export default Card;
