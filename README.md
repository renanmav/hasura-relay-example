# hasura-relay-example

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- It uses [`react-relay`](https://github.com/facebook/relay/tree/master/packages/react-relay) for data-fetching with the experimental flag (hooks ftw).
- The Hasura app was deployed following this [starter guide](https://hasura.io/docs/1.0/graphql/manual/getting-started/index.html).

The base of this project is that Relay asks for a server that provides a [mechanism for refetching an object](https://github.com/graphql/graphql-relay-js), i.e., a global id. Hasura can’t garantee that you’ll have unique global ids, so you need to implement the [`getDataID`](https://github.com/renanmav/hasura-relay-example/blob/master/src/environment.ts#L40-L42) when creating your Relay environment. In this case, I made the global id an string with `<typename>:<id>` encoded as base64 (the standard of [`graphql-relay`](https://github.com/graphql/graphql-relay-js)).
