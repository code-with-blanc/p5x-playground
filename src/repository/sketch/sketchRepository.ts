import { Sketch } from "./sketch";

let _sketches : Sketch[] = [
  {
    id: 1,
    name: "Tutorial",
    code: "// TODO: write a tutorial",
    },
  {
    id: 2,
    name: "Hello World",
    code: "console.log('Hello world!');",
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

  public static updateCode(id: number, code: string) {
    _sketches[id].code = code;
  }
}

export default SketchRepository;
