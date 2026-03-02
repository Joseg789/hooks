import { useState, useRef } from "react";

export const Semaforo2 = () => {
  // controlar el semaforo

  //   estado del semaforo
  //definimos un estado del semaforo para poder controlar los cambios que ocurren y simular el cambio de luces
  //cada estado se compone de la variable estado y su funcion Dispatcher setState
  const [light, setLight] = useState(""); //estado inicial vacio para que no haya ninguna luz encendida al cargar el componente por primera vez
  const [previousLight, setPreviousLight] = useState(null); // estado para guardar el estado anterior del semáforo
  const [executionSetLight, setExecutionSetLight] = useState(false); // estado para controlar si se ha ejecutado setLight() y mostrar la información en el panel educativo
  const [animationKey, setAnimationKey] = useState(0); // estado para controlar la animación del panel educativo

  // contador de renderizados
  const renderCount = useRef(0);
  renderCount.current++;

  // función para manejar el click en los botones y cambiar el estado del semáforo
  const handleClick = (color) => {
    console.log("Estado antes del setLight:", light); // este console.log mostrará el estado actual del semáforo antes de que se ejecute setLight, lo que puede ser útil para entender cómo funciona el estado en React y cómo se actualiza después de llamar a setLight. Debido a la naturaleza asíncrona de setState en React, el estado no se actualizará inmediatamente después de llamar a setLight, por lo que este console.log reflejará el estado anterior antes del cambio.

    setPreviousLight(light); // guardamos el estado anterior
    setLight(color); // cambiamos el estado del semáforo al color seleccionado
    setExecutionSetLight(true); // indicamos que se ha ejecutado setLight
    setAnimationKey((prev) => prev + 1); // cambiamos la key para reiniciar la animación del panel educativo
    // reseteamos el estado de ejecución después de 5 segundos para permitir nuevas interacciones y mostrar la información actualizada en el panel educativo
    setTimeout(() => {
      setExecutionSetLight(false);
    }, 5000); // reseteamos el estado de ejecución después de 10 segundos para permitir nuevas interacciones

    console.log("Después de setLight (no inmediato):", light); // este console.log no reflejará el cambio de estado inmediatamente debido a la naturaleza asíncrona de setState en React, por lo que mostrará el estado anterior en lugar del nuevo estado después de llamar a setLight. El nuevo estado se reflejará en el próximo renderizado del componente.
  };

  return (
    <>
      <div className="container">
        <div className="traffic-wrapper">
          <div
            className={`light ${light === "red" ? "red pulse" : "off"}`}
          ></div>
          <div
            className={`light ${light === "yellow" ? "yellow pulse" : "off"}`}
          ></div>
          <div
            className={`light ${light === "green" ? "green pulse" : "off"}`}
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
        <div
          key={animationKey}
          className={` education-panel  ${executionSetLight ? "pulse-panel" : ""}`}
        >
          <h3>Entendiendo useState() en React</h3>
          <p>
            Estado actual (light):{" "}
            {light === "yellow"
              ? "Amarillo 🟡"
              : light === "red"
                ? "Rojo 🔴"
                : light === "green"
                  ? "Verde 🟢"
                  : "Ninguno"}
          </p>
          <p>Estado anterior: {previousLight || "Ninguno"}</p>
          <p className={light ? `${light} pulse text-white` : "text-green"}>
            ¿Se ejecutó setLight?
            {!executionSetLight
              ? ` " No (esperando interacción)  `
              : ` " Sí y cambió el estado a " ${light} `}
          </p>
          <p>
            ⚠️⚠️ Nota: Cada vez que se hace click en un botón, se ejecuta
            setLight y se actualiza el estado del semáforo.
          </p>
          <p>
            {" "}
            y react vuelve a renderizar el componente para reflejar el nuevo
            estado.
          </p>
          {executionSetLight && <p>Render</p>}
        </div>
      </div>

      {/*  PANEL EDUCATIVO */}
    </>
  );
};
