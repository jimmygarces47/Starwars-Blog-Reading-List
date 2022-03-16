import React, { useContext } from "react";
import "../../styles/home.css";
import Person from "../component/person";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.Personajes);
  return (
    <div >
      <div className="container ">
        <div className="row  d-flex flex-row flex-nowrap overflow-auto">
          <div className="col-1">
            <h1
              className=" d-flex justify-content-start"
              style={{ color: "red" }}
            >
              Characters
            </h1>

            {store.Personajes.map((item, i) => {
              return <Person key={i} name={item.name} />;
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-10">
          <div className="container flex-nowrap ">
            <h1
              className=" d-flex justify-content-start"
              style={{ color: "red" }}
            >
              Planets
            </h1>
           
            {store.Planetas.map((item, i) => {
              return <Person key={i} name={item.name} />;
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-10">
          <div className="container flex-nowrap ">
            <h1
              className=" d-flex justify-content-start"
              style={{ color: "red" }}
            >
              Vehiculos
            </h1>
           
            {store.Vehiculos.map((item, i) => {
              return <Person key={i} name={item.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
