
export function onDragStartHandler(e) {
    console.log("ondraghandler", e.target.id);
    e.dataTransfer.setData("text", e.target.id);
}

export function allowDropEvent(e) {
    e.preventDefault();
}

export function onDropHandler(e) {
    e.preventDefault();
    let data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
}