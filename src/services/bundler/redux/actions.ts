export const beginBuild = () => ({
  type: 'bundler/BEGIN_BUILD',
} as const);

export const finishBuild = (bundle: string) => ({
  type: 'bundler/FINISH_BUILD',
  payload: { bundle },
} as const);

export type BundlerAction =
  | ReturnType<typeof beginBuild>
  | ReturnType<typeof finishBuild>
