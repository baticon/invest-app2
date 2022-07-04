declare module "*.css";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const content: any;
  export default content;
}
// declare module "*.png" {
//   const value: any;
//   export = value;
// }
// declare module "*.png" {
//   const value: import("react-native").ImageSourcePropType;
//   export default value;
// }
