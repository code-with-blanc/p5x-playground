/* eslint-disable class-methods-use-this */
import * as Babel from '@babel/standalone';
import * as rollup from 'rollup';
import virtual from '@rollup/plugin-virtual';
import presetReact from '@babel/preset-react';

import { SourceFile } from '../project/types';

interface TranspiledSource {
  name: string;
  transpiledCode: string;
}

export class BundlerService {
  constructor() {
    // setup babel
    Babel.registerPreset('@babel/preset-react', presetReact);
  }

  public build() : string {
    console.log('Should compile project');
    return '// This should be the bundled code';
  }

  transpile(file : SourceFile) : TranspiledSource {
    const babelConfig = {
      presets: ['@babel/preset-react'],
    };
  
    const result = Babel.transform(file.code, babelConfig);
  
    return {
      name: file.name,
      transpiledCode: result.code ?? '',
    };
  }

  async bundle(sources: TranspiledSource[], entryPoint: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const virtualModules : any = {};
    (sources || []).forEach((src) => {
      virtualModules[src.name] = src.transpiledCode;
    });
  
    const inputOptions = {
      input: entryPoint,
      plugins: [
        virtual(virtualModules) as Plugin,
      ],
    };
    const outputOptions = {};
  
    const bundler = await rollup.rollup(inputOptions);
    const generated = await bundler.generate(outputOptions);
    return generated.output[0].code;
  }
}

export default new BundlerService();
