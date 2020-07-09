export default interface BundlerState {
  isBuilding: boolean;
  buildError: Error | null;
  bundle: string | null;
}
