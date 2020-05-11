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


  static _listener : Function | null = null;
  public static subscribe(fn: (sketch: Sketch) => void) {
    SketchRepository._listener = fn;
    SketchRepository._listener?.call(null, _sketches[0]);
  }

  public static updateCode(code: string) {
    _sketches[0].code = code;
    SketchRepository._listener?.call(null, _sketches[0]);
  }
}

export default SketchRepository;
