import { css } from "styled-components";

export const visuallyhidden = css`
  overflow:    hidden;
  position:    absolute;
  width:       1px;
  height:      1px;
  margin:     -1px;
  padding:     0;
  border:      0;
  clip:        rect(0 0 0 0);
  clip-path:   inset(50%);
  white-space: nowrap;
`;
