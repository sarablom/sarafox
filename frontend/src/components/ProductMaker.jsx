import React, { useContext, useState } from "react";
import { Context } from "../contexts/Context";
import CloseModal from "../assets/CloseModal.svg";
import blank from "../assets/blank.png";
import dino from "../assets/fabrics/Dinosarie.jpg";
import splash from "../assets/fabrics/Splash.jpg";
import redOstrich from "../assets/fabrics/struts.jpg";
import petrolDog from "../assets/fabrics/petrolDog.jpg";
import curryDog from "../assets/fabrics/curryDog.jpg";
import sandLeo from "../assets/fabrics/sandLeo.jpg";
import Leopard from "../assets/fabrics/Leopard.jpg";
import ocreMachines from "../assets/fabrics/ocreMachines.jpg";
import yellowDots from "../assets/fabrics/yellowDots.jpg";
import maroonDots from "../assets/fabrics/maroonDots.jpg";
import greenFox from "../assets/fabrics/greenFox.jpg";
import blueOstrich from "../assets/fabrics/blueOstrich.jpg";
import Tiger from "../assets/fabrics/Tiger.jpg";
import wolf from "../assets/fabrics/Varg.jpg";

function ProductMaker(props) {
  const [context, setContext] = useContext(Context);
  const [currentGarment, setCurrentGarment] = useState("");
  const [currentFillSpace, setCurrentFillSpace] = useState("");
  const [currentViewBox, setCurrentViewBox] = useState("");
  const [currentFabric, setCurrentFabric] = useState(blank);
  //const chosenGarment = context.chosenGarment;

  if (!props.showFabricMaker) {
    return null;
  }

  function updateChosenGarment(e) {
    //if user clicks on parent element
    if (e.target.localName === "svg") {
      setCurrentViewBox(e.target.getAttribute("viewBox"));
      setCurrentGarment(e.target.children[1].getAttribute("d"));
      setCurrentFillSpace(e.target.children[0].getAttribute("d"));
      setContext({
        chosenGarment: e.target.children[1].getAttribute("d"),
      });
      //if user clicks on garment fill
    } else if (e.target.nextSibling) {
      setCurrentViewBox(e.target.parentElement.getAttribute("viewBox"));
      setCurrentGarment(e.target.nextSibling.getAttribute("d"))
      setCurrentFillSpace(e.target.getAttribute("d"));
      //if user clicks on black svg path
    } else if (e.target.previousElementSibling) {
      setCurrentViewBox(e.target.parentElement.getAttribute("viewBox"));
      setCurrentGarment(e.target.getAttribute("d"));
      setCurrentFillSpace(e.target.previousElementSibling.getAttribute("d"))
    }
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
    <section className="products-main" onClick={props.onClose}>
      <img
        src={CloseModal}
        className="products-main__close-modal"
        alt="Close Modal"
        onClick={props.onClose}
      />
      <article
        className="products-main__tool-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="products-main__pattern-selector">
          <svg
            onClick={(e) => updateChosenGarment(e)}
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            enableBackground="new 0 0 122.9 103"
            version="1.1"
            viewBox="0 0 122.9 103"
            xmlSpace="preserve"
            className="products-main__garment"
          >
            <path
              className="products-main__sweater"
              fill="#dbcaab"
              fillRule="evenodd"
              d="M19.4 46L29 34.2a1.285 1.285 0 011.8-.2 1.389 1.389 0 01.5 1v55.3h60.6V34a1.324 1.324 0 011.3-1.3 1.149 1.149 0 011.1.6l9.4 13.2a.778.778 0 01.2.8l-.2 25h12.1l4.4-34.6c-5.1-10.1-10.8-18.9-17.5-25.2C96.3 6.7 88.9 3 80.1 2.6A18.865 18.865 0 0170.9 17a19.618 19.618 0 01-8.4 2.6 19.055 19.055 0 01-8.8-1.5c-5.2-2.3-9.6-7.3-11.3-15.4-7.5.4-14.4 3.6-20.8 9.3-6.8 6-13.1 14.6-19 25.5L7 72.9h11.9l.2-26.1a1.136 1.136 0 01.3-.8z"
              transform="translate(0 0.02)"
            />

            <path
              className="products-main__sweater"
              d="M19.4 46L29 34.2c.5-.6 1.3-.6 1.8-.2.3.3.5.6.5 1v55.3h60.6V34c0-.7.6-1.3 1.3-1.3.5 0 .9.2 1.1.6l9.4 13.2c.2.2.3.5.2.8l-.2 25h12.1l4.4-34.6c-5.1-10.1-10.8-18.9-17.5-25.2C96.3 6.7 88.9 3 80.1 2.6c-.7 6.6-4.4 11.5-9.2 14.4-2.6 1.5-5.5 2.4-8.4 2.6-3 .2-6-.3-8.8-1.5-5.2-2.3-9.6-7.3-11.3-15.4-7.5.4-14.4 3.6-20.8 9.3-6.8 6-13.1 14.6-19 25.5L7 72.9h11.9l.2-26.1c0-.3.1-.6.3-.8zM5.7 84.4l-1.2-10v-.1L0 37.4c0-.3 0-.5.1-.8C6.2 25.3 12.7 16.3 19.8 10 27 3.7 34.8.1 43.3 0c.7-.1 1.3.4 1.4 1.1 1.4 7.8 5.3 12.5 10 14.6 2.4 1.1 5 1.5 7.5 1.3 2.6-.2 5.1-1 7.3-2.3 4.4-2.6 7.8-7.3 8-13.5 0-.7.6-1.2 1.3-1.2 10.2.1 18.5 4.1 25.7 10.7 7.1 6.6 13 15.7 18.2 26.3.1.2.2.5.1.7l-4.6 36.2-1.2 10.3c0 .7-.6 1.3-1.3 1.3h-13.3c-.7 0-1.3-.6-1.3-1.3l.1-10.3v-.1-.1l.2-25.9-6.8-9.6v63.5c0 .7-.6 1.3-1.3 1.3H30c-.7 0-1.3-.6-1.3-1.3v-63l-7 8.6-.3 36.9v.1c0 .7-.6 1.3-1.3 1.3H7c-.6 0-1.2-.5-1.3-1.2z"
              transform="translate(0 0.02)"
            />
          </svg>
          <svg
            onClick={(e) => updateChosenGarment(e)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 81.01 122.88"
            x="0px"
            y="0px"
            className="products-main__garment"
          >
            <path
              className="products-main__trousers"
              fill="#dbcaab"
              fillRule="evenodd"
              d="M68.19 12.99c-2.93 1.48-9.26 2.3-16.67 2.63.68.56-22.81-.26-22.77-.34-7.31-.51-13.41-1.36-16-2.42-6 24.07-7.56 53.65-9.12 83.22-.14 2.66-1.36 12.31-.01 14.04a4.354 4.354 0 00.59.62.655.655 0 01.18.15c.08.06.17.12.26.18.94.61 3.74 1.11 6.68 1.38 3.09.28 6.19.28 7.33-.13a4.981 4.981 0 001.97-1.25 4.725 4.725 0 001.07-2.05l.69-2.88h-.01c5.06-21.21 10.8-45.24 16.88-53.84a1.36 1.36 0 011.89-.33l.03.02c4.79 3.12 11.55 29.26 17.15 50.94.8 3.08.96 7.06 3.73 8.78l.04.02c1.38.8 4.86 1.03 8.28.69 3.29-.33 6.39-1.14 7.18-2.39l.03-.06.02-.03a5.22 5.22 0 00.49-1.2 6.919 6.919 0 00.22-1.42c-.18-2.67-.38-5.69-.57-8.72-1.93-29.23-3.85-58.45-9.56-85.61zm-4.7 101.96l.43 2.46c.37 2.1 1.98 2.71 3.91 2.67a26.028 26.028 0 007.28-1.75.185.185 0 01.07-.02l.31-.11c.89-.32 1.14-1.97 1.13-2.63l-.02-1.79a22.631 22.631 0 01-5.98 1.34 27.8 27.8 0 01-7.13-.17zm-58.72-.92l-.02 2.4c0 .42-.02.73-.02 1.01-.03.91-.03.98 1.5 1.56a19.423 19.423 0 003.44.93 12.477 12.477 0 004.95-.01 3.669 3.669 0 002.74-2.18 4.218 4.218 0 00.21-.78l.3-1.75a37.21 37.21 0 01-6.81-.06 33.221 33.221 0 01-6.29-1.12z"
            />
            <path
              className="products-main__trousers"
              d="M68.19,13c-2.93,1.48-9.26,2.3-16.67,2.63A11.09,11.09,0,0,1,53.3,17.4c1.73,2.29,1.8,4.79-2.16,7.78A1.36,1.36,0,1,1,49.51,23c2.28-1.73,2.4-3,1.63-4a17.19,17.19,0,0,0-3.65-3l-.36-.25c-5.07.09-10.41,0-15.37-.29a8.38,8.38,0,0,0-.68,1.21A15.88,15.88,0,0,0,29.93,24a1.36,1.36,0,1,1-2.71.11,18.43,18.43,0,0,1,1.41-8.62l.12-.25c-7.31-.51-13.41-1.36-16-2.42-6,24.07-7.56,53.65-9.12,83.22-.14,2.66-1.36,12.31,0,14a4.35,4.35,0,0,0,.59.62.65.65,0,0,1,.18.15l.26.18c.94.61,3.74,1.11,6.68,1.38,3.09.28,6.19.28,7.33-.13a5,5,0,0,0,2-1.25,4.73,4.73,0,0,0,1.07-2l.69-2.88h0C27.44,84.93,33.18,60.9,39.26,52.3A1.36,1.36,0,0,1,41.15,52l0,0C46,55.11,52.73,81.25,58.33,102.93c.8,3.08,1,7.06,3.73,8.78l0,0c1.38.8,4.86,1,8.28.69s6.39-1.14,7.18-2.39h0l0-.06,0,0a5.22,5.22,0,0,0,.49-1.2,6.92,6.92,0,0,0,.22-1.42c-.18-2.67-.38-5.69-.57-8.72C75.82,69.37,73.9,40.15,68.19,13Zm-34-3a1.35,1.35,0,1,1,1.11,2.47,9.6,9.6,0,0,0-1.48.83A2.4,2.4,0,1,0,33,10.66c.4-.23.82-.45,1.26-.65Zm8.71,2a1.35,1.35,0,1,1,2.31-1.41,6.2,6.2,0,0,0,1.28,1.39,2.6,2.6,0,0,0,.07-.56,2.39,2.39,0,1,0-2.39,2.39l.28,0A8.8,8.8,0,0,1,42.94,12ZM63.49,115l.43,2.46c.37,2.1,2,2.71,3.91,2.67a26,26,0,0,0,7.28-1.75l.07,0,.31-.11c.89-.32,1.24-.37,1.26-.41s0-.23-.07-.73-.05-.83-.06-1.49l0-1.79a22.63,22.63,0,0,1-6,1.34,27.8,27.8,0,0,1-7.13-.17Zm15.79-2.81,0,3.38c0,.5,0,1,.06,1.37a3.56,3.56,0,0,1-.3,2.26c-.48.8-1.16,1-2.69,1.59l-.31.11-.06,0a27.77,27.77,0,0,1-8.13,1.9c-3.23.08-6-1-6.64-4.91l-.69-3.9A8.85,8.85,0,0,1,59,112.72c-2.4-2.43-2.52-5.91-3.35-9.13C50.59,83.85,44.51,60.3,40.62,55.14,35.13,64.33,29.77,86.81,25,106.77h0l-.69,2.88h0v0a7.44,7.44,0,0,1-1.71,3.23,7.22,7.22,0,0,1-1.82,1.41l-.53,3.1a7.05,7.05,0,0,1-.35,1.28,6.22,6.22,0,0,1-4.62,3.85,14.93,14.93,0,0,1-6.07,0,21.79,21.79,0,0,1-3.94-1.07C1.91,120.25,1.91,120,2,117.34c0-.29,0-.62,0-.94l0-3.93a5.78,5.78,0,0,1-.61-.69c-2.78-3.57-.8-11.31-.56-15.84,1.57-29.88,3.15-59.75,9.29-84.13L11.48,3a1.34,1.34,0,0,1,1.37-1.16C16.62.56,27.16,0,38.16,0,50.7,0,64,.72,68.44,2a1.26,1.26,0,0,1,.5.26,1.35,1.35,0,0,1,.62,1l1,8c6,27.69,7.91,57.48,9.86,87.27.18,2.8.37,5.61.58,8.77h0v.15a9.59,9.59,0,0,1-.32,2.1,8.07,8.07,0,0,1-.75,1.84.41.41,0,0,1,0,.09l0,.06h0a5.08,5.08,0,0,1-.57.69ZM4.77,114l0,2.4c0,.42,0,.73,0,1,0,.91,0,1,1.5,1.56a19.42,19.42,0,0,0,3.44.93,12.48,12.48,0,0,0,4.95,0,3.67,3.67,0,0,0,2.74-2.18,4.22,4.22,0,0,0,.21-.78l.3-1.75a37.21,37.21,0,0,1-6.81-.06A33.22,33.22,0,0,1,4.77,114ZM39.9,5.06A136.51,136.51,0,0,0,61.37,3.61c-6-.57-14.76-.89-23.21-.89A190.11,190.11,0,0,0,18,3.57c5,.95,13.31,1.49,21.89,1.49Z"
              transform="translate(0.01)"
            />
          </svg>
        </div>

        <article
          className="products-main__choice-container"
          onClick={(e) => e.stopPropagation()}
        >
          {currentGarment.length === 0 && (
            <p>Välj ett plagg genom att klicka på det</p>
          )}
          {currentGarment && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              enableBackground="new 0 0 122.9 103"
              version="1.1"
              viewBox={currentViewBox}
              xmlSpace="preserve"
              className="products-main__chosen-garment"
            >
              <defs>
                <pattern
                  id="img1"
                  patternUnits="userSpaceOnUse"
                  width="151"
                  height="103"
                >
                  <image
                    href={currentFabric}
                    x="-10"
                    y="0"
                    width="151"
                    height="103"
                  />
                </pattern>
              </defs>

              <path d={currentFillSpace} fill="url(#img1)" />
              <path d={currentGarment} />
            </svg>
          )}
        </article>

        <div className="products-main__fabrics-wrapper">
          <article
            className="products-main__fabrics-selector"
            onClick={(e) => e.stopPropagation()}
          >
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={dino}
                alt="Dinosaur fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={redOstrich}
                alt="Ostrich fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={curryDog}
                alt="Curry dog fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={splash}
                alt="Splash fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={petrolDog}
                alt="Petrol dog fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={sandLeo}
                alt="Sandy Leo fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={Leopard}
                alt="Leopard fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={ocreMachines}
                alt="Ocre machines fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={yellowDots}
                alt="Yellow dots fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={maroonDots}
                alt="Maroon dots fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={greenFox}
                alt="Green fox fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={blueOstrich}
                alt="Blue Ostrich fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={Tiger}
                alt="Tiger fabric"
              />
            </section>
            <section className="products-main__fabric-container">
              <img
                onClick={(e) => updateChosenFabric(e.target)}
                className="products-main__fabric"
                src={wolf}
                alt="Wolf fabric"
              />
            </section>
          </article>
        </div>
      </article>
    </section>
  );
}

export default ProductMaker;
