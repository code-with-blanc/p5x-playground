import { Sketch } from "./sketch";
import { Store } from "redux";

const LS_STORAGE = 'sketches';

class SketchRepository {
  public static subscribe(store: Store) {
    store.subscribe(() => {
      const { sketchStore } = store.getState();
      if(sketchStore) {
        SketchRepository.onStoreUpdate(sketchStore);
      }
    })
  }

  public static getAll() : Sketch [] {
    const stored = localStorage.getItem(LS_STORAGE);
    if(stored) {
      return JSON.parse(stored) || defaultSketches;
    }

    return defaultSketches;
  }

  private static onStoreUpdate(state : any) {
    localStorage.setItem(LS_STORAGE, JSON.stringify(state.sketches));
  }
}

const defaultSketches : Sketch[] = [
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

export default SketchRepository;
