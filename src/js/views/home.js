import React, { useContext } from "react";
import "../../styles/home.css";
import Person from "../component/person";
import { Context } from "../store/appContext";
import { Single } from "./single";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.Personajes);
  return (
    <div>
      <div className="container ">
        <h1 className=" d-flex justify-content-start" style={{ color: "red" }}>
          Characters
        </h1>
        <div className=" d-flex flex-row flex-nowrap overflow-auto w-auto">
          {store.Personajes.map((item, i) => {
            return <Person type={"personajes"}  key={i} uid={item.uid} name={item.name} />;
          })}
        </div>
      </div>

      <div className="container">
        <h1 className=" d-flex justify-content-start" style={{ color: "red" }}>
          Planets
        </h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto w-auto">
          {store.Planetas.map((item, i) => {
            return <Person type={"planetas"} key={i} uid={item.uid} name={item.name} />;
          })}
        </div>
      </div>

      <div className="container">
        <h1 className=" d-flex justify-content-start" style={{ color: "red" }}>
          starships
        </h1>
        <div className="d-flex flex-row flex-nowrap overflow-auto w-auto">
          {store.Vehiculos.map((item, i) => {
            return <Person type={"vehiculo"} key={i} uid={item.uid} name={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
