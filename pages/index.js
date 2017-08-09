import React from "react";
import Page from "../components/page/page";
import Title from "../components/title/title";
import List from "../components/list/list";

const entries = [
  { name: "Oli", id: 1 },
  { name: "Alexis", id: 2 },
  { name: "Colin", id: 3 }
];

const index = () =>
  <Page>
    {/* <Title>Cleaning Rota</Title> */}
    <List entries={entries} />
  </Page>;

export default index;
