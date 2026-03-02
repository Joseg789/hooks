import { useState } from "react";

export const Semaforo = () => {
  // controlar el semaforo

  //   estado del semaforo
  //definimos un estado del semaforo para poder controlar los cambios que ocurren y simular el cambio de luces
  //cada estado se compone de la variable estado y su funcion Dispatcher setState
  const [light, setLight] = useState("red"); //el estado inicial sera red o rojo

  const handleClick = (color) => {
    //cada vez que hacemos click en un boton por ejemplo amarillo, deberiamos cambiar el semaforo a ese color
    //para cambiar el estado debemos usar useState() y su funcion Dispatcher setState()

    setLight(color); //setLight es la Funcion Dispatcher del estado Light y es la encargada de gestionar o cambiar el estado
    //!importante cada vez que nuestro estado cambia  o hacemos setState() React re-dibuja o vuelve a reenderizar nuestro componente
    //entonces cada vez que hacemos click en un boton y cambiamos el estado del semaforo, React vuelve a renderizar el componente y se actualiza la interfaz de usuario para reflejar el nuevo estado del semaforo
    //en este caso cuando seleccinamos un color, el semaforo se actualiza y muestra el color seleccionado en la interfaz de usuario
  };

  return (
    <div className="container">
      <div className="traffic-wrapper">
        <div
          className={`light ${light === "red" ? " red pulse" : "off"}`}
        ></div>
        <div
          className={`light ${light === "yellow" ? "yellow pulse" : "off"}`}
        ></div>
        <div
          className={`light  ${light === "green" ? " green pulse" : "off"}`}
        ></div>

        <div className="button-group">
          <button className="btn btn-red" onClick={() => handleClick("red")}>
            Rojo
          </button>
          <button
            className="btn btn-yellow"
            onClick={() => handleClick("yellow")}
          >
            Amarillo
          </button>
          <button
            className="btn btn-green"
            onClick={() => handleClick("green")}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
