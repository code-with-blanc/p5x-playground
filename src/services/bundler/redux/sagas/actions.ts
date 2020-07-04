export enum types {
  ReqBuild = 'bundler/sagas/REQ_BUILD',
}

export const requestBuild = (projectId: number) => ({
  type: types.ReqBuild,
  payload: { projectId },
} as const);

export type BundlerSagaAction =
  | ReturnType<typeof requestBuild>
