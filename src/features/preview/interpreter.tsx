/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { RefObject } from 'react';


const runSourceFile = (code?: string, canvas?: RefObject<HTMLCanvasElement>) => {
  const ctx = canvas?.current?.getContext('2d');

  if (ctx) {
    try {
      // eslint-disable-next-line no-new-func
      const userFn = Function(`return (ctx) => {
        ${code}
      }`)();

      try {
        clearCanvas(canvas!.current!, ctx!);
        userFn(ctx!);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log((err as Error).message);
      }
    } catch {
      // Error creating a fn from user code (eg. syntax error)
    }
  } else {
    throw Error('Canvas not supported');
  }
};

const clearCanvas = (canvas : HTMLCanvasElement, ctx : CanvasRenderingContext2D) => {
  // Store the current transformation matrix
  ctx.save();

  // Use the identity matrix while clearing the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Restore the transform
  ctx.restore();
};

export default runSourceFile;
