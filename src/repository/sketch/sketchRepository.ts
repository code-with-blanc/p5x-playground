import { Sketch } from "../../types/sketch";

class SketchRepository {
  sketches : Sketch [];
  
  constructor() {
    this.sketches = [
      {
        id: 0,
        name: "My Sketch 1"
      },
      {
        id: 1,
        name: "My Sketch 2"
      }
    ];
  }

  getAll() : Sketch [] {
    return this.sketches; 
  }

  create(name: string) : number {
    const maxId = this.sketches.reduce((prevMax, sketch) => {
      return (sketch.id > prevMax) ? sketch.id : prevMax;
    }, 0);
    const id = maxId + 1;

    this.sketches.push({
      id: id,
      name: "New Sketch"
    })

    return id;
  }
}

export default SketchRepository;
