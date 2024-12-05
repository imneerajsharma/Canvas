const canvas: HTMLCanvasElement = document.getElementById("canvas_activity1") as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext("2d")!;
const rect = canvas.getBoundingClientRect();
let lscale: number;
var scene=new Scene();

window.onload = function () {
  // Set the canvas size
  canvas_size();
    // canvas mapping
    canvas_mapping();
  // Draw border or rectangle
  scene.draw();
  dashboard();
  dashboard_buttons();
  // activity1();
  // canvas_border();

  // Add logic to draw all geometries 
 
  // draw all the input elements if needed
}
window.onresize=function(){
    // Set the canvas size
  canvas_size();
  // canvas mapping 
  canvas_mapping();
  scene.draw();
  dashboard();
  dashboard_buttons();
// Draw border or rectangle
//canvas_border();

// Add logic to draw all geometries 
// draw all the input elements if needed
}

function canvas_size() {
  canvas.width = window.innerWidth * 0.97;
  canvas.height = canvas.width * (1080.0 / 1920.0) * 0.65;
  lscale = canvas.width / 1920.0;
}

function canvas_border() {
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 4;
  context.stroke();
}
function canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1);
  }
  