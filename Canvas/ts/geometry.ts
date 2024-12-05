namespace Chemistry{
    export class Point {
        x: number;
        y: number;
    
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Geometry {
        name:string;
        constructor() {}
        draw() {}
        protected calculate() {}
        get areas():number{
            return (0);
        }
        isinside(point: Point): boolean {
            return (false);
        }
        protected triangle_area(pt1: Point, pt2: Point, pt3: Point): number {
            return (0);
        }
        
        
      }
      
      export class Circle extends Geometry {
        // x: number;
        // y: number;
        stpt:Point
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
      
        // constructor(x: number, y: number, radius: number, canvas: HTMLCanvasElement) {
            constructor(stpt:Point, radius: number, canvas: HTMLCanvasElement) {
          super();
        //   this.x = x;
        //   this.y = y;
          this.stpt=stpt
          this.radius = radius;
          this.canvas = canvas;
          this.context = this.canvas.getContext("2d");
        }
        draw(): void {
            this.context.beginPath();
            // this.context.arc(this.x*lscale, this.y*lscale, this.radius*lscale, 0, 2 * Math.PI, false);
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.lineWidth = 1;
            this.context.stroke();
          }
          
      }
      export class Square extends Geometry {
        // x: number;
        // y: number;
        stpt:Point
        length: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
    //     x1: number;
    // x2: number;
    // x3: number;
    // x4: number;
    // y1: number;
    // y2: number;
    // y3: number;
    // y4: number;
    p1: Point;
p2: Point;
p3: Point;
p4: Point;
    
    
        // constructor(x: number, y: number, length: number, canvas: HTMLCanvasElement) {
            constructor(stpt:Point, length: number, canvas: HTMLCanvasElement) {
          super();
        //   this.x = x;
        //   this.y = y;
        this.stpt=stpt
          this.length = length;
          this.canvas = canvas;
          this.context = this.canvas.getContext("2d");
        }
      
        protected calculate(): void {
          // Calculation logic goes here
    //       this.x1 = this.x - this.length / 2;
    //   this.y1 = this.y - this.length / 2;
    //   this.x2 = this.x + this.length / 2;
    //   this.y2 = this.y - this.length / 2;
    //   this.x3 = this.x + this.length / 2;
    //   this.y3 = this.y + this.length / 2;
    //   this.x4 = this.x - this.length / 2;
    //   this.y4 = this.y + this.length / 2;
        

        this.p1 = new Point(this.stpt.x * lscale - this.length / 2 * lscale, this.stpt.y * lscale - this.length / 2 * lscale);
        this.p2 = new Point(this.stpt.x * lscale + this.length / 2 * lscale, this.stpt.y * lscale - this.length / 2 * lscale);
        this.p3 = new Point(this.stpt.x * lscale + this.length / 2 * lscale, this.stpt.y * lscale + this.length / 2 * lscale);
        this.p4 = new Point(this.stpt.x * lscale - this.length / 2 * lscale, this.stpt.y * lscale + this.length / 2 * lscale);
    
    // this.p1.x = this.stpt.x * lscale - this.length / 2 * lscale;
    // this.p1.y = this.stpt.y * lscale - this.length / 2 * lscale;
    // this.p2.x = this.stpt.x * lscale + this.length / 2 * lscale;
    // this.p2.y = this.stpt.y * lscale - this.length / 2 * lscale;
    // this.p3.x = this.stpt.x * lscale + this.length / 2 * lscale;
    // this.p3.y = this.stpt.y * lscale + this.length / 2 * lscale;
    // this.p4.x = this.stpt.x * lscale - this.length / 2 * lscale;
    // this.p4.y = this.stpt.y * lscale + this.length / 2 * lscale;
        }
    
        draw(): void {
            this.calculate();
            this.context.beginPath();
            // this.context.moveTo(this.x1, this.y1);
            // this.context.lineTo(this.x2, this.y2);
            // this.context.lineTo(this.x3, this.y3);
            // this.context.lineTo(this.x4, this.y4);
            this.context.moveTo(this.p1.x, this.p1.y);
    this.context.lineTo(this.p2.x, this.p2.y);
    this.context.lineTo(this.p3.x, this.p3.y);
    this.context.lineTo(this.p4.x, this.p4.y);
            this.context.closePath();
            this.context.lineWidth = 1;
            this.context.stroke();
          }
          
      }

export class Ellipse extends Geometry {
    stpt: Point;
    points: Point[] = [];
    a: number;
    b: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(stpt: Point, major_length: number, minor_length: number, canvas: HTMLCanvasElement) {
        super();
        this.stpt = stpt;
        this.a = major_length / 2;
        this.b = minor_length / 2;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.points = [];
    }

    protected calculate(): void {
        this.points=[];
        for (let ang = 0; ang < 360; ang++) {
            let ang1 = ang * Math.PI / 180;
            // let x = this.stpt.x * lscale + this.a * Math.cos(ang1);
            // let y = this.stpt.y * lscale + this.b * Math.sin(ang1);
            let x = this.stpt.x * lscale + this.a * lscale * Math.cos(ang1);
let y = this.stpt.y * lscale + this.b * lscale * Math.sin(ang1);



            this.points.push(new Point(x, y));
        }
    }

    draw(): void {
        this.calculate();
        this.context.beginPath();
        this.context.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            this.context.lineTo(this.points[i].x, this.points[i].y);
        }
        this.context.lineWidth = 1;
        this,context.fillStyle="blue";
        this.context.closePath();
        this.context.fill();
        this.context.stroke();
    }
    // draw(): void {
    //     this.calculate();
    //     this.context.beginPath();
    //     this.context.moveTo(this.points[0].x, this.points[0].y);
    //     for (let i = 1; i < this.points.length; i++) {
    //         this.context.lineTo(this.points[i].x, this.points[i].y);
    //     }
    //     this.context.lineWidth = 1;
    //     this.context.closePath();
    //     this.context.stroke();
    // }

    
    
    
}


export class Polygon extends Geometry {
    stpt: Point;
    points: Point[] = [];
    l: number;
    n: number; 
    stang :number=0;

    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(stpt: Point, l: number, n: number, canvas: HTMLCanvasElement) {
        super();
        this.stpt = stpt;
        this.l = l;
        this.n = n;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.points = [];
    }

     protected calculate(): void {
        this.points = [];
        let angbet = 360.0 / this.n; // Angle between vertices
        let ang = this.stang; // Initial angle
    
        for (let i = 0; i < this.n; i++) {
            let ang1 = ang * Math.PI / 180; // Convert angle to radians
            let x = this.stpt.x * lscale + this.l * lscale * Math.cos(ang1); // X-coordinate of vertex
            let y = this.stpt.y * lscale + this.l * lscale * Math.sin(ang1); // Y-coordinate of vertex
    
            this.points.push(new Point(x, y)); // Add vertex to points array
            ang += angbet; // Increment angle for the next vertex
        }
    }

    draw(): void {
        this.calculate(); // Calculate points for the geometry
        this.context.beginPath(); // Begin a new path
        this.context.moveTo(this.points[0].x, this.points[0].y); // Move to the first point
    
        // Draw lines connecting all points
        for (let i = 1; i < this.points.length; i++) {
            this.context.lineTo(this.points[i].x, this.points[i].y);
        }
    
        this.context.lineWidth = 1; // Set the line width
        this.context.fillStyle = "blue"; // Set the fill color
        this.context.closePath(); // Close the path to form the shape
        this.context.fill(); // Fill the shape with the set color
        this.context.stroke(); // Stroke the outline of the shape
    }

    get area(): number {
        let a = 0;
    
        for (let i = 0; i < this.points.length - 1; i++) {
            a += this.points[i].x * this.points[i + 1].y - this.points[i + 1].x * this.points[i].y;
        }
    
        // Add the closing term to complete the polygon
        a += this.points[this.points.length - 1].x * this.points[0].y - this.points[0].x * this.points[this.points.length - 1].y;
        a=a/2;
        return Math.abs(a); // Return the absolute value divided by 2
    }
    isinside(point: Point): boolean {
        point.x = point.x * lscale;
        point.y = point.y * lscale;
        let a = 0;
        for (let i = 0; i < this.points.length - 1; i++) {
            a += this.triangle_area(point, this.points[i], this.points[i + 1]);
        }
        a += this.triangle_area(point, this.points[this.points.length - 1], this.points[0]);
        if (Math.abs(this.area - a) < 0.000001) {
            return (true);
        } else {
            return (false);
        }
    }
    
    protected triangle_area(pt1: Point, pt2: Point, pt3: Point): number {
        let a = 0;
        a += pt1.x * pt2.y - pt2.x * pt1.y;
        a += pt2.x * pt3.y - pt3.x * pt2.y;
        a += pt3.x * pt1.y - pt1.x * pt3.y;
        return (Math.abs(a / 2));
    }
    
    
}
  

export class L_bracket extends Geometry {
    points: Point[] = [];
    stpt: Point;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    path: Path2D;

    constructor(stpt: Point, canvas: HTMLCanvasElement) {
        super();
        this.stpt = stpt;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    protected calculate(): void {
        this.points.push(new Point((this.stpt.x - 20) * lscale, (this.stpt.y - 20) * lscale));
        this.points.push(new Point((this.stpt.x - 20) * lscale, (this.stpt.y - 20 + 100) * lscale));
        this.points.push(new Point((this.stpt.x - 20 + 40) * lscale, (this.stpt.y - 20 + 100) * lscale));
        this.points.push(new Point((this.stpt.x - 20 + 40) * lscale, (this.stpt.y - 20 + 40) * lscale));
        this.points.push(new Point((this.stpt.x - 20 + 100) * lscale, (this.stpt.y - 20 + 40) * lscale));
        this.points.push(new Point((this.stpt.x - 20 + 100) * lscale, (this.stpt.y - 20) * lscale));
        this.points.push(new Point((this.stpt.x - 20) * lscale, (this.stpt.y - 20) * lscale));
    }

    draw(): void {
        this.calculate();
        this.path = new Path2D();
        this.path.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            this.path.lineTo(this.points[i].x, this.points[i].y);
        }
        this.context.beginPath();
        this.context.strokeStyle = "black";
        this.context.fillStyle = "red";
        this.context.fill(this.path);
        this.context.stroke(this.path);
    }
    isinside(point: Point): boolean {
        point.x = point.x * lscale;
        point.y = point.y * lscale;
        this.context.save();
        this.context.translate(0, this.canvas.height);
        this.context.scale(1, -1);
        if (this.context.isPointInPath(this.path, point.x, point.y)) {
            this.context.restore();
            return true;
        } else {
            this.context.restore();
            return false;
        }
    }
    
}

export class Flask extends Geometry {
    img: CanvasImageSource;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    dx = 225;
    dy = 190;
    stpt: Point;
    constructor(image: CanvasImageSource, stpt: Point, canvas: HTMLCanvasElement) {
        super();
        this.img = image;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.stpt = stpt;
    }
  
    draw(): void {
        this.context.save();
        this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
        this.context.scale(1, -1);
        this.context.drawImage(
            this.img,
            -this.dx / 2 * lscale,
            -this.dy / 2 * lscale,
            this.dx * lscale,
            this.dy * lscale
        );
        this.context.restore();
    }

    isinside(point: Point): boolean {
        if (point.x > this.stpt.x * lscale - this.dx / 2 * lscale &&
            point.x < this.stpt.x * lscale + this.dx / 2 * lscale &&
            point.y > this.stpt.y * lscale - this.dy / 2 * lscale &&
            point.y < this.stpt.y * lscale + this.dy / 2 * lscale) {
            return (true);
        }
        return (false);
    }
}


export class Text {

    font = "20px Arial";
    color = "black";
    angle = 0;
    textalignment: CanvasTextAlign = "left";

    stpt: Point;
    text: string;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(text: string, stpt: Point, canvas: HTMLCanvasElement) {
        this.stpt = stpt;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.text = text;
    }

    draw() {
        this.context.font = this.font;
        this.context.fillStyle = this.color;
        this.context.textAlign = this.textalignment;
        this.context.save();
        this.context.translate(this.stpt.x, this.stpt.y);
        this.context.rotate(this.angle * Math.PI / 180);
        this.context.scale(1, -1);
        this.context.fillText(this.text, 0, 0);
        this.context.restore();
    }
    
}


}
