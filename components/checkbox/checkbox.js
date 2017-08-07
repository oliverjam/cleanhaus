import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { visuallyhidden as vh } from "../../styles/utils";

const Label = styled.span``;

const Indicator = styled.span`
  display: block;
  position: absolute;
  width: ${theme.size.lg};
  height: ${theme.size.lg};
  border: 1px solid ${theme.palette.dark};
  border-radius: 2px;
  transition: background-color 0.2s;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  ${vh}
  &:focus ~ ${Indicator} {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${theme.palette.primary};
  }
  &:checked ~ ${Indicator} {
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${theme.palette.primary};
    background-color: ${theme.palette.primary};
    color: ${theme.palette.light};
    &::after {
      content: '✔';
    }
  }
  &:checked ~ ${Label} {
    text-decoration: line-through;
  }
`;

const Container = styled.label`padding-left: ${theme.size.xl};`;

const Checkbox = ({ id, label }) =>
  <Container htmlFor={id}>
    <Input id={id} />
    <Indicator />
    <Label>
      {label}
    </Label>
  </Container>;

export default Checkbox;
