import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

import Tag from "../Components/Tag/Tag.jsx";

function Project(props) {
  return (
    <div {...props}>
      {props.video && (
        <video controls loop>
          <source src={props.video} type="video/mp4" />
          <source src={props.video} type="video/mov" />
          Your browser does not support HTML5 video.
        </video>
      )}
      <div className="img">
        <div className="img-container">
          {props.images != "0.png" ? <img src={props.images} alt="" /> : ""}
        </div>
      </div>
      <div className="links">
        {props.links.map((link, i) => {
          return (
            <>
              <span className="link">
                {link.href != "" ? (
                  <a href={link.href}>{link.text}</a>
                ) : (
                  link.text
                )}
              </span>
              {i <= props.links.length - 2 ? (
                <span className="seperator">•</span>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
      <h2 className="title">{props.title}</h2>
      {/*<Status className="status">{props.status}</Status>*/}
      <p className="desc">
        <span>{props.desc}</span>
      </p>
      <div className="tags">
        {props.tags.map((tag, i) => {
          return (
            <>
              <Tag>{tag}</Tag>
              {i <= props.tags.length - 2 ? (
                <span className="seperator">•</span>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

Project = styled(Project)`
  padding: 8px;
  background: #f7fafc;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px rgba(26, 32, 44, 0.03);

  video {
    width: 100%;
  }

  .img {
    grid-area: img;
    height: fit-content;
    width: fit-content;

    > .img-container {
      height: min-content;
      border-radius: 8px;
      > img {
        display: flex;
        width: 100%;
        border-radius: inherit;
      }
    }
  }

  .title {
    grid-area: title;
    font-size: 24px;
    color: #4a5568;
    font-weight: 600;
  }

  h2 {
    text-align: left;
  }

  .status {
  }

  .desc {
    font-size: 14px;
    color: #a0aec0;
    text-align: left;
  }

  .links {
    text-align: left;
    font-size: 14px;
    > * {
      padding: 8px 8px 8px 0px;
    }
    .seperator {
      color: #3182ce;
    }

    > .link {
      color: gray;
      > a {
        color: #3182ce;
        text-decoration: none;
      }
    }
  }

  .tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 4px;

    .seperator {
      color: #718096;
    }

    > * {
      padding: 0px 8px 0px 0px;
      width: max-content;
    }
  }
`;

export default Project;
