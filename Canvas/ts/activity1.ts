// var mycircle = new Chemistry.Circle(400, 400, 50, canvas);
// scene.add(mycircle);


// var mysqr = new Chemistry.Square(600, 200, 100, canvas);
// scene.add(mysqr);

// var stpt = new Chemistry.Point(400, 400);
// var mycircle = new Chemistry.Circle(stpt, 50, canvas);
// scene.add(mycircle);

// var stpt = new Chemistry.Point(600, 200);
// var mysqr = new Chemistry.Square(stpt, 100, canvas);
// scene.add(mysqr);

// var stpt = new Chemistry.Point(600, 200);
// var ellipse = new Chemistry.Ellipse(stpt, 100, 60, canvas);
// scene.add(ellipse);
function activity1() {
    var stpt = new Chemistry.Point(400, 400);
    var mycircle = new Chemistry.Circle(stpt, 50, canvas);
    scene.add(mycircle);

    var stpt = new Chemistry.Point(600, 200);
    var ellipse = new Chemistry.Ellipse(stpt, 150, 90, canvas);
    scene.add(ellipse);


    var stpt = new Chemistry.Point(700, 400);
var sqr = new Chemistry.Polygon(stpt, 100, 7, canvas);
sqr.stang=45;
scene.add(sqr);

    // var mysqr = new Chemistry.Square(stpt, 100, canvas);
    // scene.add(mysqr);
}

function dashboard(){
    div_dashboard.style.left = `${canvas.width - 185}px`;
    div_dashboard.style.top = `${rect.y + 10}px`;
    div_panel.style.left = `${canvas.width - 185}px`;
    div_panel.style.top = `${rect.y + 35}px`;
    div_panel.style.width = "180px";
}
var div_dashboard = document.getElementById('dashboard');
var div_panel = document.getElementById('panel');
// function dashboard_buttons(){
//     div_dashboard.innerHTML = `<input type="button" value="Polygon" onclick="show_polygon_panel()">`;
//     div_dashboard.innerHTML += `<input type="button" value="Ellipse" onclick="show_ellipse_panel()">`;
//     div_dashboard.innerHTML += `<input type="button" value="Circle" onclick="show_circle_panel()">`;
// }
function dashboard_buttons() {
    div_dashboard.innerHTML = `
        <input type="button" value="Polygon" onclick="show_polygon_panel();" style="width:60px">
        <input type="button" value="Ellipse" onclick="show_ellipse_panel();" style="width:60px">
        <input type="button" value="Circle" onclick="show_circle_panel();" style="width:60px">
    `;
}

function show_polygon_panel() {
    div_panel.innerHTML = `
        <p style="width:60px; display: inline-block">Start pt</p>
        <input type="text" id="stptx" style="width:45px">
        <input type="text" id="stpty" style="width:45px">
        <p style="width:100px; display: inline-block">No of Sides:</p>
        <input type="text" id="n" style="width:50px">
        <p style="width:100px; display: inline-block">Length:</p>
        <input type="text" id="l" style="width:50px">
        <p style="width:100px; display: inline-block">Name:</p>
        <input type="text" id="name" style="width:50px">
        <p style="width:100px; display: inline-block">Start Angle:</p>
        <input type="text" id="stang" style="width:50px">
        <input type="button" value="Draw" onclick="draw_polygon();" style="width:70px">
        <input type="button" value="Area" onclick="area_geometry();" style="width:70px">
        <br>
        <p style="width:45px; display: inline-block">Area</p>
        <input type="text" id="area" style="width:100px">
    `;
}
function area_geometry() {
    var name = <HTMLInputElement>document.getElementById("name");
    var area = <HTMLInputElement>document.getElementById("area");
    area.value = `${scene.area(name.value)}`;
}

var img = new Image();
img.src = "./images/flask.png";

 