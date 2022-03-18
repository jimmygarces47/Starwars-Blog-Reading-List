import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const [datapersonaje, setDatapersonaje] = useState("");
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/" + params.theid)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDatapersonaje(data);
      });
  }, []);
  return (
    <div className="card mb-3">
      <div className="row ">
        <div className="col-md-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}
            style={{ width: "250px" }}
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          {datapersonaje !== "" ? (
            <div className="card-body">
              <h5 className="card-title  d-flex justify-content-center">
                {datapersonaje.result.properties.name}
              </h5>
              <p className="card-text  d-flex justify-content-center">
                {datapersonaje.result.description}{" "}
              </p>
              <div className="row">
                <div className="col-2 text-center">
                  <p style={{ color: `red` }}>Name</p>
                  <p style={{ color: `red` }}>
                    {datapersonaje.result.properties.name}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            "cargando"
          )}
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
