import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store
} from "relay-runtime";

const fetchQuery: FetchFunction = async (params, variables, _cacheConfig) => {
  const response = await fetch(
    "https://hasura-relay-example.herokuapp.com/v1/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: params.text,
        variables
      })
    }
  );

  const json = await response.json();

  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        params.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  return json;
};

function getDataID(data: any, typename: string) {
  return btoa(`${typename}:${String(data.id)}`);
}

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10
  }),
  // @ts-ignore
  UNSTABLE_DO_NOT_USE_getDataID: getDataID
});
