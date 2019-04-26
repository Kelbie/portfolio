import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

import Tag from "../Components/Tag/Tag.jsx";

function Project(props) {
  return (
    <div {...props}>
      <div className="img">
        <div className="img-container">
          {
            props.images != "0.png"? 
            <img src={props.images} alt="" /> : ""
          }
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
        {props.tags.map(tag => {
          return <Tag>{tag}</Tag>;
        })}
      </div>
    </div>
  );
}

Project = styled(Project)`
  display: grid;
  grid-template-areas:
    "img links"
    "img title"
    "img desc"
    "img tags"
    "img gap";
  grid-template-columns: minmax(auto, 1fr) 1fr;
  grid-template-rows: repeat(5, 0fr) minmax(0fr, 1fr);

  @media screen and (max-width: 500px) {
    grid-template-areas:
      "links"
      "title"
      "img"
      "desc"
      "tags";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }

  padding: 8px;
  border-bottom: 2px solid #dbdbdb;

  .img {
    grid-area: img;
    height: fit-content;
    width: fit-content;

    > .img-container {
      height: min-content;
      margin: 8px 32px 8px 0px;
      @media screen and (max-width: 500px) {
        margin: 8px 0px 8px 0px;
      }
      border-radius: 2px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
      > img {
        display: flex;
        margin: 0;
        width: 100%;
        border-radius: inherit;
      }
    }
  }

  * {
    margin-bottom: 8px;
  }

  .title {
    grid-area: title;
    font-size: 24px;
    color: #626262;
  }

  h2 {
    text-align: left;
  }

  .status {
  }

  .desc {
    grid-area: desc;
    font-size: 14px;
    color: #b1b1b1;
    text-align: left;
  }

  .links {
    grid-area: links;
    text-align: left;
    font-size: 14px;
    > * {
      padding: 4px;
    }

    > .link {
      color: gray;
      > a {
        color: #2096ed;
        text-decoration: none;
      }
    }

    > .seperator {
      color: #d9d9d9;
    }
  }

  .tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 4px;

    > * {
      width: max-content;
    }
  }
`;

export default Project;
