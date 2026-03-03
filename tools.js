let currentTool = "move";

function setTool(tool) {
  currentTool = tool;
}

window.addEventListener("click", function(event) {
  if (!selectedObject) return;

  if (currentTool === "scale") {
    selectedObject.scale.x += 0.1;
    selectedObject.scale.y += 0.1;
    selectedObject.scale.z += 0.1;
  }

  if (currentTool === "rotate") {
    selectedObject.rotation.y += 0.2;
  }

  if (currentTool === "move") {
    selectedObject.position.x += 0.2;
  }
});
