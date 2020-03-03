import React from "react";
import { useLazyLoadQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

import { HomeQuery } from "./__generated__/HomeQuery.graphql";

function Home() {
  const { profile } = useLazyLoadQuery<HomeQuery>(
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

  return (
    <div>
      {profile.map(({ id, name }) => (
        <div key={id}>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Home;
