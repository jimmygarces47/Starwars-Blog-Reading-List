const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      Personajes: [],
	  Planetas: [],
    Vehiculos:[],
    Favorite:[],
    Personaje:{},
    },
   
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      ObtenerPersonajes: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ Personajes: data.results }));
        // .then(data => console.log(data.results))
      },
      ObtenerPlanetas: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ Planetas: data.results }) );
      },
      ObtenerVehiculos:() =>{
        fetch("https://www.swapi.tech/api/vehicles")
        .then((response)=> response.json())
        .then((data)=> setStore({Vehiculos:data.results}));
      },
      AgregarFavorite:(fav)=>{
        setStore({Favorite:getStore().Favorite.concat(fav)})
      },
      
      deleteFav:(i)=>{
        setStore({Favorite: getStore().Favorite.filter(
          (item,index) => index !== i)})
        console.log("funciona");
      },
      AgregarPersonaje:(theid)=>{
        fetch(`https://www.swapi.tech/api/people/${theid}`)//fetch para obtener cada personaje
          .then((response) => response.json())
          .then((data) => setStore({ Personaje: data.result }))
      },


      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
