/// <reference types="react-scripts" />
/// <reference types="react-dom/experimental" />
declare module "babel-plugin-relay/macro" {
  import { graphql } from "react-relay/hooks";
  export default graphql;
}
