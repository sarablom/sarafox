import React, { useContext, useState } from "react";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Context } from "../contexts/Context";
import blank from "../assets/blank.png";
import fabric from "../assets/fabrics/Dinosarie.jpg";
import splash from "../assets/fabrics/Splash.jpg";
import struts from "../assets/fabrics/struts.jpg";
import curryDog from "../assets/fabrics/curryDog.jpg";

function ProductMaker() {
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
    if (currentGarmentSrc.length === 0) {
      console.log("Välj ett plagg först");
    } else {
      setCurrentGarmentSrc(fabric.src);
    }
  }

  return (
    <section className="products-main">
      <div className="products-main__tool-container">
        <div className="products-main__pattern-selector">
          {/* <div className="products-main__garment">
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
              alt=" Trousers without pockets"
            />
          </div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 102.99"
            className="products-main__garment"
          >
            <path
              onClick={(e) => updateChosenGarment(e.target)}
              className="products-main__sweater"
              src={blank}
              d="M19.35,46,29,34.22A1.31,1.31,0,0,1,30.8,34a1.29,1.29,0,0,1,.48,1h0V90.33H91.92V34a1.31,1.31,0,0,1,1.31-1.31,1.29,1.29,0,0,1,1.12.64l9.39,13.24a1.26,1.26,0,0,1,.24.83l-.23,25h12.08l4.39-34.64c-5.1-10.15-10.78-18.93-17.51-25.18C96.3,6.68,88.9,3,80.1,2.64A18.51,18.51,0,0,1,70.88,17a19.6,19.6,0,0,1-8.43,2.61,18.23,18.23,0,0,1-8.76-1.52c-5.19-2.33-9.57-7.3-11.29-15.44C34.93,3.05,28,6.31,21.56,12c-6.8,6-13.07,14.65-18.91,25.5L7,72.94H18.82l.24-26.1a1.27,1.27,0,0,1,.29-.81ZM5.74,84.45l-1.22-10a.49.49,0,0,1,0-.12L0,37.38H0a1.31,1.31,0,0,1,.14-.77C6.2,25.31,12.72,16.27,19.83,10s15-9.85,23.5-10a1.31,1.31,0,0,1,1.42,1.08c1.37,7.83,5.3,12.52,10,14.62A15.63,15.63,0,0,0,62.26,17a17,17,0,0,0,7.31-2.26,16,16,0,0,0,8-13.48h0A1.32,1.32,0,0,1,78.9,0C89,.08,97.33,4.06,104.5,10.72s13,15.72,18.24,26.27h0a1.33,1.33,0,0,1,.13.74l-4.59,36.18h0L117,84.17a1.31,1.31,0,0,1-1.31,1.26H102.33A1.3,1.3,0,0,1,101,84.11l.09-10.26h0v-.1a.62.62,0,0,1,0-.13l.24-25.86-6.83-9.63v63.53A1.31,1.31,0,0,1,93.24,103H30a1.31,1.31,0,0,1-1.31-1.31V38.72l-7,8.6L21.33,84.2v.1A1.31,1.31,0,0,1,20,85.61H7a1.31,1.31,0,0,1-1.3-1.16Z"
              transform="translate(0 0.02)"
            />
          </svg>
        </div>

        <div className="products-main__choice-container">
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

export default ProductMaker;
