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
  const [currentGarment, setCurrentGarment] = useState("");
  const [currentFabric, setCurrentFabric] = useState(blank);
  //const chosenGarment = context.chosenGarment;

  function updateChosenGarment(garment) {
    console.log(garment.d);
    setCurrentGarment(garment);

    setContext({
      chosenGarment: garment,
    });
  }

  function updateChosenFabric(fabric) {
    if (currentGarment.length === 0) {
      console.log("Välj ett plagg först");
    } else {
      setCurrentFabric(fabric.src);
      console.log(currentFabric);
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
            style={{ fill: currentFabric }}
          >
            <path
              //onClick={(e) => console.log(e.target.d)}
              onClick={(e) => updateChosenGarment(e.target)}
              className="products-main__sweater"
              d="M19.35,46,29,34.22A1.31,1.31,0,0,1,30.8,34a1.29,1.29,0,0,1,.48,1h0V90.33H91.92V34a1.31,1.31,0,0,1,1.31-1.31,1.29,1.29,0,0,1,1.12.64l9.39,13.24a1.26,1.26,0,0,1,.24.83l-.23,25h12.08l4.39-34.64c-5.1-10.15-10.78-18.93-17.51-25.18C96.3,6.68,88.9,3,80.1,2.64A18.51,18.51,0,0,1,70.88,17a19.6,19.6,0,0,1-8.43,2.61,18.23,18.23,0,0,1-8.76-1.52c-5.19-2.33-9.57-7.3-11.29-15.44C34.93,3.05,28,6.31,21.56,12c-6.8,6-13.07,14.65-18.91,25.5L7,72.94H18.82l.24-26.1a1.27,1.27,0,0,1,.29-.81ZM5.74,84.45l-1.22-10a.49.49,0,0,1,0-.12L0,37.38H0a1.31,1.31,0,0,1,.14-.77C6.2,25.31,12.72,16.27,19.83,10s15-9.85,23.5-10a1.31,1.31,0,0,1,1.42,1.08c1.37,7.83,5.3,12.52,10,14.62A15.63,15.63,0,0,0,62.26,17a17,17,0,0,0,7.31-2.26,16,16,0,0,0,8-13.48h0A1.32,1.32,0,0,1,78.9,0C89,.08,97.33,4.06,104.5,10.72s13,15.72,18.24,26.27h0a1.33,1.33,0,0,1,.13.74l-4.59,36.18h0L117,84.17a1.31,1.31,0,0,1-1.31,1.26H102.33A1.3,1.3,0,0,1,101,84.11l.09-10.26h0v-.1a.62.62,0,0,1,0-.13l.24-25.86-6.83-9.63v63.53A1.31,1.31,0,0,1,93.24,103H30a1.31,1.31,0,0,1-1.31-1.31V38.72l-7,8.6L21.33,84.2v.1A1.31,1.31,0,0,1,20,85.61H7a1.31,1.31,0,0,1-1.3-1.16Z"
              transform="translate(0 0.02)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 102.99"
            className="products-main__garment"
          >
            <path
              onClick={(e) => updateChosenGarment(e.target)}
              className="products-main__trousers"
              style={{ fill: blank }}
              d="M68.19,13c-2.93,1.48-9.26,2.3-16.67,2.63A11.09,11.09,0,0,1,53.3,17.4c1.73,2.29,1.8,4.79-2.16,7.78A1.36,1.36,0,1,1,49.51,23c2.28-1.73,2.4-3,1.63-4a17.19,17.19,0,0,0-3.65-3l-.36-.25c-5.07.09-10.41,0-15.37-.29a8.38,8.38,0,0,0-.68,1.21A15.88,15.88,0,0,0,29.93,24a1.36,1.36,0,1,1-2.71.11,18.43,18.43,0,0,1,1.41-8.62l.12-.25c-7.31-.51-13.41-1.36-16-2.42-6,24.07-7.56,53.65-9.12,83.22-.14,2.66-1.36,12.31,0,14a4.35,4.35,0,0,0,.59.62.65.65,0,0,1,.18.15l.26.18c.94.61,3.74,1.11,6.68,1.38,3.09.28,6.19.28,7.33-.13a5,5,0,0,0,2-1.25,4.73,4.73,0,0,0,1.07-2l.69-2.88h0C27.44,84.93,33.18,60.9,39.26,52.3A1.36,1.36,0,0,1,41.15,52l0,0C46,55.11,52.73,81.25,58.33,102.93c.8,3.08,1,7.06,3.73,8.78l0,0c1.38.8,4.86,1,8.28.69s6.39-1.14,7.18-2.39h0l0-.06,0,0a5.22,5.22,0,0,0,.49-1.2,6.92,6.92,0,0,0,.22-1.42c-.18-2.67-.38-5.69-.57-8.72C75.82,69.37,73.9,40.15,68.19,13Zm-34-3a1.35,1.35,0,1,1,1.11,2.47,9.6,9.6,0,0,0-1.48.83A2.4,2.4,0,1,0,33,10.66c.4-.23.82-.45,1.26-.65Zm8.71,2a1.35,1.35,0,1,1,2.31-1.41,6.2,6.2,0,0,0,1.28,1.39,2.6,2.6,0,0,0,.07-.56,2.39,2.39,0,1,0-2.39,2.39l.28,0A8.8,8.8,0,0,1,42.94,12ZM63.49,115l.43,2.46c.37,2.1,2,2.71,3.91,2.67a26,26,0,0,0,7.28-1.75l.07,0,.31-.11c.89-.32,1.24-.37,1.26-.41s0-.23-.07-.73-.05-.83-.06-1.49l0-1.79a22.63,22.63,0,0,1-6,1.34,27.8,27.8,0,0,1-7.13-.17Zm15.79-2.81,0,3.38c0,.5,0,1,.06,1.37a3.56,3.56,0,0,1-.3,2.26c-.48.8-1.16,1-2.69,1.59l-.31.11-.06,0a27.77,27.77,0,0,1-8.13,1.9c-3.23.08-6-1-6.64-4.91l-.69-3.9A8.85,8.85,0,0,1,59,112.72c-2.4-2.43-2.52-5.91-3.35-9.13C50.59,83.85,44.51,60.3,40.62,55.14,35.13,64.33,29.77,86.81,25,106.77h0l-.69,2.88h0v0a7.44,7.44,0,0,1-1.71,3.23,7.22,7.22,0,0,1-1.82,1.41l-.53,3.1a7.05,7.05,0,0,1-.35,1.28,6.22,6.22,0,0,1-4.62,3.85,14.93,14.93,0,0,1-6.07,0,21.79,21.79,0,0,1-3.94-1.07C1.91,120.25,1.91,120,2,117.34c0-.29,0-.62,0-.94l0-3.93a5.78,5.78,0,0,1-.61-.69c-2.78-3.57-.8-11.31-.56-15.84,1.57-29.88,3.15-59.75,9.29-84.13L11.48,3a1.34,1.34,0,0,1,1.37-1.16C16.62.56,27.16,0,38.16,0,50.7,0,64,.72,68.44,2a1.26,1.26,0,0,1,.5.26,1.35,1.35,0,0,1,.62,1l1,8c6,27.69,7.91,57.48,9.86,87.27.18,2.8.37,5.61.58,8.77h0v.15a9.59,9.59,0,0,1-.32,2.1,8.07,8.07,0,0,1-.75,1.84.41.41,0,0,1,0,.09l0,.06h0a5.08,5.08,0,0,1-.57.69ZM4.77,114l0,2.4c0,.42,0,.73,0,1,0,.91,0,1,1.5,1.56a19.42,19.42,0,0,0,3.44.93,12.48,12.48,0,0,0,4.95,0,3.67,3.67,0,0,0,2.74-2.18,4.22,4.22,0,0,0,.21-.78l.3-1.75a37.21,37.21,0,0,1-6.81-.06A33.22,33.22,0,0,1,4.77,114ZM39.9,5.06A136.51,136.51,0,0,0,61.37,3.61c-6-.57-14.76-.89-23.21-.89A190.11,190.11,0,0,0,18,3.57c5,.95,13.31,1.49,21.89,1.49Z"
              transform="translate(0.01)"
            />
          </svg>
        </div>

        <div className="products-main__choice-container">
          {currentGarment.length === 0 && (
            <p>Välj ett plagg genom att klicka på det</p>
          )}
          {currentGarment && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.88 102.99"
            className="products-main__chosen-garment">
              <defs>
                <pattern
                  id="img1"
                  patternUnits="userSpaceOnUse"
                  width="151"
                  height="103"
                >
                  <image href={currentFabric} x="-10" y="0" width="151" height="103" />
                </pattern>
              </defs>

              <path
                d="M351.19,643.19c-15.43,6.64-17.17,7.87-20.65,14.79-1.15,2.36-3.29,6.13-4.68,8.49A178.29,178.29,0,0,0,315,686.12c-3,6.73-8.76,18.23-11.4,22.66-3.83,6.41-9.46,18.24-9.65,20.4a9.83,9.83,0,0,1-1,3.3c-1,1.94-1,2.26,1.05,4a14.2,14.2,0,0,0,9.2,3.3c2.79,0,2.94,0,2.94-1.18a3,3,0,0,1,1.09-2A22.35,22.35,0,0,0,314,728.9c1.05-1.93,3.69-6.22,5.73-9.52s5.72-9.61,8.06-14.09,5.47-10.17,6.92-12.62,3.48-5.94,4.48-7.73,2-3.16,2.29-3.16c.79,0,1.79,9.24,2.24,21a209.28,209.28,0,0,1-1.05,25.77,7.76,7.76,0,0,0,.5,3.92,5.43,5.43,0,0,1,.5,2.87c-.45,1.7.94,3.39,3.13,3.77a52.61,52.61,0,0,1,5.82,1.7c3.09,1.08,5.28,1.46,10.7,1.79,3.74.28,8.76.7,11.2,1,4.68.56,8.16,0,14-1.94,1.39-.47,4.08-1.27,6-1.83,3.93-1.09,5.42-2.26,4.93-3.82a4.57,4.57,0,0,1,.69-3c1.15-2.35,1.3-6.93.75-26.72-.3-11.64-.25-12.72.7-16.16a23.78,23.78,0,0,1,1.29-4c1.1-1.08,4.68,6.22,8.51,17.53,1.84,5.47,4,11.59,4.83,13.67,4,10.08,10.25,20.07,12.79,20.4.75.09,1.39.71,1.84,1.79.9,2,1.84,2,6.82.43,4.33-1.42,6-3,5.32-4.76a4.38,4.38,0,0,1-.19-2.36c.34-1.32-.65-4.24-2.79-8.2a144.34,144.34,0,0,1-8.46-19.08c-3.64-10-5.73-15.46-6.32-16.5-.3-.51-1.55-3.72-2.79-7.06s-3.88-9.43-5.87-13.43-4.53-9.43-5.78-12a30.88,30.88,0,0,0-3.28-5.8c-1.29-1.31-5-3.15-8.81-4.42-1.49-.48-5.37-1.84-8.56-3.07l-5.87-2.17-1.1.95c-1.74,1.46-8.56,3-13.44,3-5.12,0-8.8-1-10.8-2.83a5.48,5.48,0,0,0-1.89-1.42C356.86,640.83,354.23,641.87,351.19,643.19Z" transform="translate(-292.29 -640.78)"
                fill="url(#img1)"
              />
            </svg>
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
