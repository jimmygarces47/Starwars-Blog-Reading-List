import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    console.log(params.type);
    if (params.type === "personajes") {
      actions.GetDetallePesonaje(params.theid);
    }
    if (params.type === "planetas") {
      actions.GetDetallePlaneta(params.theid);
    }
    if (params.type === "vehiculo") {
      actions.GetDetalleVehiculo(params.theid);
    }
  }, []);

  console.log(store.DetallePersonaje.properties);
  return (
    <div>
      <div className="card mb-3">
        <div className="row ">
          <div className="col-md-4">
          <img
          src={`https://starwars-visualguide.com/assets/img/${params.type=="personajes" ?"characters": params.type=="planetas"?"planets":"starships"}/${params.theid}.jpg`}
          className="card-img-top"
          style={{ width: " 400px", height: "250px" }}
          alt="..."
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
        ></img>
          </div>
          <div className="col-md-8">
            {store.DetallePersonaje ? (
              store.DetallePersonaje.uid === params.theid ? (
                <div className="card-body">
                  <h5 className="card-title  d-flex justify-content-center">
                    {store.DetallePersonaje.properties.name}
                  </h5>
                  <p className="card-text  d-flex justify-content-center">
                    {store.DetallePersonaje.description}
                  </p>

                  
                  { params.type==="personajes"?
                    <div className="row">
                      
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Gender</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.gender}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Color Eyes</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.eye_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Color Hair</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.hair_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Skin Color</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.skin_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Height</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.height}
                        </p>
                      </div>
                    </div>
                  :""}
                  { params.type==="planetas"?
                    <>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Climate</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.climate}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>population</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.population}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Obital Period</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.orbital_period}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Rotation Period</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.rotation_period}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Diameter</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.diameter}
                        </p>
                      </div>
                    </>
                  :""}
                  { params.type==="vehiculo"?
                    <>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Model</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.model}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Cargo Capacity</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.cargo_capacity}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>length</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.eye_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Color Hair</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.hair_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Skin Color</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.skin_color}
                        </p>
                      </div>
                      <div className="col-2 text-center">
                        <p style={{ color: `red` }}>Height</p>
                        <p style={{ color: `red` }}>
                          {store.DetallePersonaje.properties.height}
                        </p>
                      </div>
                    </>
                  :""}
                </div>
              ) : (
                "cargando1"
              )
            ) : (
              "cargando2"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
