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
              fill="none"
              viewBox="0 0 1935 3033"
              className="products-main__sweater"
          >
            <g>
        {/* Bodies */}
            <g>
              {currentGarmentSrc === 0 && (
                <g fillRule="evenodd" clipRule="evenodd">
                <path
                fill={clothesColor}
                stroke="#22252B"
                strokeWidth="6"
                d="M924.655 1278.35s20.584 143.69 31.327 198.96c.224 1.15 2.331 2.36 3.995 2.06l.17-.04 2.258-.55 3.766 1.41 3.152 1.17 26.731 9.87 7.346 2.73c24.98 9.33 39.31 15.16 55.55 22.73l9.76 4.58-4.94 7.27a.62.62 0 00-.1.2l-.04.1-.02.06.29.79c4.65 12.9 5.49 24.4 4.58 44.22l-.08 1.7-.2 4.1-.16 3.21-.01.27c-.01.72-.06 1.37-.16 2.23l-.04.38-.28 2.17-.08.64c-.01.13-.02.25-.03.35l-.02.3v.3l1.75 1.96-.2 3.14c-.67 10.33-8.24 850.99-3.07 891.63l.16 1.07.1.58.01.58c.03 1.56-.15 2.97-.52 4.67l-.14.65-.42 1.76c-.1.42-.16.72-.2.95l-.03.19-.03.24.55 1.3-.29 4.8-.05.87c-.03.56-.05 1.08-.06 1.58l-.16 7.29-9.39.55c-16.17.93-30.34 1.38-55.03 1.81l-2.9.05-27.35.43c-27.56.46-45.628 1.05-63.98 2.26l-6.061.42-2.369-2.15c-.135-.13-.508-.21-.739-.17l-.089.03-11.424 4.55 1.247-12.91-.44-.09.859-7.16.073-.69c.454-4.62.24-9.36-.587-17.43l-.528-5.07c-.5-4.92-.735-7.92-.815-11.03l-.008-.33-.022-1.34-.361-4.98c-3.641-50.58-16.425-376.46-16.425-376.46-2.427-45.85-49.658-492.43-49.658-492.43l-.184-7.49-.077-2.65-.769 1.31-.917 1.58-1.166 2.03c-13.545 23.64-24.829 47.53-30.132 65.72l-.307 1.07-2.99 7.98C689.1 1909.2 599.442 2169.4 491.637 2498.95l-7.638 23.37-2.97 1.38c-20.299 9.37-41.498 11.23-70.594 8.32l-.962-.1-1.92-.2c-3.329-.37-6.331-.73-10.275-1.24l-2.629-.34-13.352-1.79c-5.092-.68-8.422-1.1-11.763-1.47l-2.708-.29-3.933-.38-3.209-.3c-40.452-3.77-73.54-4.44-105.013-1.39l-1.241.12-7.223.74-1.763-6.68c-.343-1.41-.52-2.89-.549-4.45l-.004-.59.009-.7.55-2.81c13.54-68.69 110.279-394.59 110.279-394.59 10.951-35.55 58.322-187.82 73.849-238.25l1.77-5.76 2.201-7.19c22.743-74.43 35-117.65 38.084-135.45l.178-1.06.046-.29.068-.28 1.864-7.84.83-1.18c2.299-3.26 3.407-7.05 4.087-13.46l.107-1.07.093-1.03 1.219-14.96 10.802 7.86.841.6c7.081 5.02 12.414 7 15.734 6.6l.226-.04-.008-.05 14.479-3.69 1.153 3.28.584 1.64c1.28 3.47 3.902 5.81 6.163 6.18 1.451.23 2.609-.44 3.657-3.15l.102-.27.05-.14.065-.34.166-.89c1.825-10.12 1.924-19.55.902-37.45l-.093-1.6-.453-7.5c-.729-12.5-.892-19.18-.487-26.86l.074-1.32 3.921-65.27 13.39 78.75 5.151 30.09.801 4.84.21 1.23c2.711 15.59 6.007 23.93 12.441 28.05l.336.21-.011-2.51-.034-4.96c-.022-2.52-.049-5.09-.083-7.74l-.096-6.81-.105-6.35-1.056-53.23 13.777 9.97.353.25c.591.41 1.106.74 1.543 1l.261.15.354-.57c7.396-12.2 8.966-25.82 5.554-41.64l-.154-.7-.151-.67c-3.09-13.33-8.963-26.67-19.443-45.89l-.479-.87-1.546-2.81-4.623-8.3-3.278-5.89-1.345-2.45c-.853-1.56-1.626-3-2.361-4.38l-.274-.52-5.456-10.37 10.695-1.39c6.936-.89-5.024-115.89 74.624-167.82 88.071-57.42 288.657-65.65 288.657-65.65z"
              ></path>
            </g>
          )}
        </g>
      </g>
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

export default ProductsPage;
