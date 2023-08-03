import React from "react";


const Jumbotron = ({title, description, secondDescription, buttonLabel}) => {

      return (

        <div className="jumbotron">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{description}</p>
        <hr className="my-4"/>
        <p>{secondDescription}</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">{buttonLabel}</a>
        </p>
    </div>
)
};


export default Jumbotron;
