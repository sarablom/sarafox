import React, { useContext, useState } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Context } from "../contexts/Context";
import blank from "../assets/blank.png";
import fabric from "../assets/fabrics/Dinosarie.jpg";
import splash from "../assets/fabrics/Splash.jpg";
import struts from "../assets/fabrics/struts.jpg";
import curryDog from "../assets/fabrics/curryDog.jpg";
//import { onDragStartHandler, allowDropEvent, onDropHandler } from "../utilities/dragEvents";

function ProductsPage() {
  const [context, setContext] = useContext(Context);
  const [currentGarmentSrc, setCurrentGarmentSrc] = useState("");
  const [currentGarmentAlt, setCurrentGarmentAlt] = useState("");
  const [currentGarmentClass, setCurrentGarmentClass] = useState("");

  //const garment = context.chosenGarment;

  function updateChosenGarment(garment) {
    setCurrentGarmentSrc(garment.src);
    setCurrentGarmentAlt(garment.alt);
    setCurrentGarmentClass(garment.className);
    setContext({
      chosenGarment: garment,
    });
  }

  function updateChosenFabric(fabric) {
    if(currentGarmentSrc.length === 0) {
        console.log('Välj ett plagg först');
    } else {
        setCurrentGarmentSrc(fabric.src);
    }
  }

  return (
    <section className="products-main">
      <div className="products-main__tool-container">
        <div className="products-main__pattern-selector">
          <div className="products-main__garment">
            <img
              onClick={(e) => updateChosenGarment(e.target)}
              className="products-main__sweater"
              src={blank}
              alt="Sweater with long sleeves"
            />
          </div>
          <div className="products-main__garment">
            <img
              onClick={(e) => updateChosenGarment(e.target)}
              className="products-main__trousers"
              src={blank}
              alt=" Här skriver du något från context"
            />
          </div>
        </div>

        <div
          className="products-main__choice-container"
        >
          {currentGarmentSrc.length === 0 && (
            <p>Välj ett plagg genom att klicka på det</p>
          )}
          {currentGarmentSrc.length !== 0 && (
            <img
              src={currentGarmentSrc}
              alt={currentGarmentAlt}
              className={currentGarmentClass}
            />
          )}
        </div>

        <div className="products-main__fabrics-selector">
          <div className="products-main__fabric-container">
            <img
              onClick={(e) => updateChosenFabric(e.target)}
              className="products-main__fabric"
              src={fabric}
              alt="Här skriver du något från context"
            />
          </div>
          <div className="products-main__fabric-container">
            <img
              onClick={(e) => updateChosenFabric(e.target)}
              className="products-main__fabric"
              src={splash}
              alt="Här skriver du något från context"
            />
          </div>
          <div className="products-main__fabric-container">
            <img
              onClick={(e) => updateChosenFabric(e.target)}
              className="products-main__fabric"
              src={struts}
              alt="Här skriver du något från context"
            />
          </div>
          <div className="products-main__fabric-container">
            <img
              onClick={(e) => updateChosenFabric(e.target)}
              className="products-main__fabric"
              src={curryDog}
              alt="Här skriver du något från context"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;
