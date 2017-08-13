import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { visuallyhidden as vh } from '../../styles/utils';

const { size, palette } = theme;

const Label = styled.span`
  display: flex;
  flex: 1;
  margin-left: ${size.md};
`;

const Date = styled.span`margin-left: auto;`;

const Indicator = styled.span`
  display: block;
  width: ${size.lg};
  height: ${size.lg};
  border: 1px solid ${palette.midGrey};
  border-radius: 2px;
  transition: background-color 0.2s;
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
  ${vh}
  &:focus ~ ${Indicator} {
    box-shadow: 0 0 0 2px white, 0 0 0 4px ${palette.primary};
  }
  &:checked ~ ${Indicator} {
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: ${palette.primary};
    background-color: ${palette.primary};
    color: ${palette.textLight};
    &::after {
      content: '✔';
    }
  }
  &:checked ~ ${Label} {
    text-decoration: line-through;
  }
`;

const Container = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  padding: ${size.md} ${size.lg};
  opacity: ${({ checked }) => (checked ? '0.5' : '1')};
  &:hover {
    background-color: ${theme.palette.offWhite};
  }
`;

const Checkbox = ({ id, label, day, month, checked, handleChange }) =>
  <Container htmlFor={id} checked={checked}>
    <Input id={id} checked={checked} onChange={handleChange} />
    <Indicator />
    <Label>
      {label}
      <Date>
        Mon {day} {month.slice(0, 3)}
      </Date>
    </Label>
  </Container>;

export default Checkbox;
