interface Shape {
    getArea(): number
    getPerimeter(): number
  }
  class Rectangle implements Shape{
    constructor(private width: number, private height: number) {}
   
    getArea(): number{
      return this.width * this.height;
    }
    getPerimeter(): number{
      return 2 * (this.width + this.height);
    }
}
  class Circle implements Shape{
    constructor(private radius: number) {}
    getArea(): number{
      return Math.PI * Math.pow(this.radius, 2)
    }
    getPerimeter(): number{
      return 2 * Math.PI * this.radius
    }
}
const rectangle = new Rectangle(15, 20)
console.log(`Rectangle area: ${rectangle.getArea()}`)
console.log(`Rectangle perimeter: ${rectangle.getPerimeter()}`)
const circle = new Circle(20)
console.log(`Circle radius: ${circle.getArea()}`)
console.log(`Circle perimeter: ${circle.getPerimeter()}`)