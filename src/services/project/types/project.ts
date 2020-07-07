/* eslint-disable no-empty-function */
export default class Project {
  constructor(
    public id: number,
    public name: string,
  ) {}

  public fileIds: number[] = [];
}
