import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

function Tag(props) {
  return <div {...props}>{props.children}</div>;
}

Tag = styled(Tag)`
  display: inline-block;
  color: #718096;
  border-radius: 2px;
  padding: 8px 8px 0px 0px;
  font-size: 14px;
`;

export default Tag;
