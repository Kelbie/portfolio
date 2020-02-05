import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

import Project from "../Projects/Project.jsx";

function Sandboxes(props) {
  return (
    <div {...props}>
      <Project
        links={[
          { href: "https://llmk22kz19.codesandbox.io/", text: "view demo" }
        ]}
        images={["1.png"]}
        thumbnail={"1.png"}
        title={"Comment System using Hooks"}
        status={"featured on codesandbox.io"}
        desc={
          "A comment system similar to Reddit using React Hooks which was featured on the front page of codesandbox.io"
        }
        tags={["react"]}
      />
    </div>
  );
}

export default styled(Sandboxes)`
  max-width: 600px;
  margin: auto;
  > * {
    margin-bottom: 16px;
  }
`;
