declare module 'tokml' {
  export interface Options {
    documentName?: string;
    documentDescription?: string;
    name?: string;
    description?: string;
    simplestyle?: boolean;
    timestamp?: string;
  }
  export interface GeoJSON {
    type: string;
    [key: string]: any;
  }
  export default function tokml(arg1: GeoJSON, options?: Options): string;
}