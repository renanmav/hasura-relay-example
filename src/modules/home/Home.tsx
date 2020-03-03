import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

import { HomeQuery } from "./__generated__/HomeQuery.graphql";

function Home() {
  const query = useLazyLoadQuery<HomeQuery>(
    graphql`
      query HomeQuery {
        profile {
          id
          name
        }
      }
    `,
    {}
  );

  console.log(query);

  return <div>hasura-relay-example</div>;
}

export default Home;
