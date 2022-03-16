import React, { Component ,useContext} from "react";
import { Context } from "../store/appContext";
const Person = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container">
      <div className="card" style={{ width: "400px" }}>
        <img
          src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
          className="card-img-top"
          style={{ width: " 400px", height: "250px" }}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-start">{props.name}</h5>
          <span className="card-text d-flex justify-content-start">
            Gender:Male
          </span>
          <span className="card-text d-flex justify-content-start">
            Hair-color:Yellow
          </span>
          <span className="card-text  d-flex justify-content-start ">
            Eyes:Blue
          </span>
          <br></br>
          <div className="row">
            <div className="col-6">
              <button
                href="#"
                className="btn btn-primary  d-flex justify-content-start "
              >
                Learn More
              </button>
              </div>
              <div className="col-6">
              <button type="button" className="btn btn-outline-warning d-flex justify-content-end ">
                <i className="bi bi-heart"  onClick={()=>actions.AgregarFavorite(props.name)}></i>
              </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
