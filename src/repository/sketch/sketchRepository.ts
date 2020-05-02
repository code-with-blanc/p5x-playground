import { Sketch } from "./sketch";

let _sketches : Sketch[] = [
  {
    id: 0,
    name: "Tutorial",
    code: "// TODO: write a tutorial",
  },
  {
    id: 1,
    name: "My Sketch 1",
    code: "// Write your code here",
  }
];
;

class SketchRepository {
  public static getAll() : Sketch [] {
    return [ ..._sketches ];
  }

  public static create() : number {
    const maxId = _sketches.reduce((prevMax, sketch) => {
      return (sketch.id > prevMax) ? sketch.id : prevMax;
    }, 0);
    const id = maxId + 1;

    _sketches.push({
      id: id,
      name: `New Sketch (${id})`,
      code: '',
    })

    return id;
  }
}

export default SketchRepository;
