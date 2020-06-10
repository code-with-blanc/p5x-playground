export interface Sketch {
  id: number;
  name: string;
  code: string;
}

export class Sketch implements Sketch {
  constructor(
    public id : number,
    public name : string,
    public code : string,
  ) {}
}
