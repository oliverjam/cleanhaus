import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

import Checkbox from "../checkbox/checkbox";

const Item = styled.li`
  & + & {
    border-top: 1px solid ${theme.palette.lightGrey};
  }
  &:hover {
    background-color: ${theme.palette.offWhite};
  }
`;

const List = styled.ul`
  list-style: none;
  border-radius: ${theme.size.radius};
  box-shadow: 0 1px 2px ${theme.palette.shadow};
`;

export default ({ entries }) =>
  <List>
    {entries.map(entry =>
      <Item key={entry.id}>
        <Checkbox id={entry.id} label={entry.name} />
      </Item>
    )}
  </List>;
