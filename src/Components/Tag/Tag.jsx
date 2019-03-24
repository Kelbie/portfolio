import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

function Tag(props) {
  return <button {...props}>{props.children}</button>;
}

Tag = styled(Tag)`
  display: inline-block;
  color: white;
  border-radius: 2px;
  padding: 8px;
  background: #2096ed;
  border: none;
  font-size: 14px;
`;

export default Tag;
