import React from "react";
import styled from "styled-components";

export const User = ({ data: user }) => (
  <UserContainer>
    <h1>{user.name}</h1>
    <p>{user.company.name}</p>
  </UserContainer>
);

const UserContainer = styled.div`
  height: 200px;
  background: tomato;
  margin: 10px;
  padding: 20px;
`;
