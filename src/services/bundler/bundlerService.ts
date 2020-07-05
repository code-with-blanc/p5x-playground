/* eslint-disable class-methods-use-this */
import { Project } from '../project/types';

export class BundlerService {
  public build(project: Project) : string {
    console.log(`Should compile project "${project.name}"`);
    return '// This should be the bundled code';
  }
}

export default new BundlerService();
