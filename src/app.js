import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import styled from "styled-components";
import { User } from "./components/User";

export const App = () => {
  const { isLoading, isFetching, error, data } = useQuery(
    "id",
    () => axios("http://jsonplaceholder.typicode.com/users"),
    {
      refetchInterval: 1000,
    }
  );
  return (
    <AppStyled className="App">
      <h1>List Of Users</h1>
      {isFetching && <span>Refetching Data</span>}
      {error && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Retrieving Users Information ...</div>
      ) : (
        data.data.map((user) => <User key={user.id} data={user} />)
      )}
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
`;
