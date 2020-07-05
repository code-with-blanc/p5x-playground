/* eslint-disable class-methods-use-this */
import { Project } from '../project/types';

export class BundlerService {
  public compile(project: Project) {
    console.log(`Should compile project "${project.name}"`);
  }
}

export default new BundlerService();
