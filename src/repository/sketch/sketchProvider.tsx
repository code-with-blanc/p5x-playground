import React from 'react'
import { Sketch } from './sketch';
import SketchRepository from '.';

const SketchContext = React.createContext<InjectedSketchProps | null>(null);

export interface InjectedSketchProps {
  sketch: Sketch;
  setCode: (code : string) => void;
}

interface State {
  sketch: Sketch | null;
}

export const useSketch = () => React.useContext(SketchContext);

export const withSketch = <P extends InjectedSketchProps>(
  Component: React.ComponentType<P>
) =>
class MakeCounter extends React.Component<P, State> {
  state: State = {
    sketch: null,
  };

  onSketchUpdate = (sketch: Sketch) => {
    this.setState({
      sketch
    })
  };

  setCode = (code: string) => { SketchRepository.updateCode(code) }

  componentDidMount() {
    SketchRepository.subscribe(this.onSketchUpdate);
  }

  render() {
    console.log(this.state.sketch)
    return (
      <Component
        count={++count}
        sketch={this.state.sketch}
        setCode={this.setCode}
        {...this.props as P}
      />
    );
  }
};


let count = 0;
