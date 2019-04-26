import React, { useState } from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";

import Project from "./Project.jsx";

function Tag(props) {
  return <button {...props}>{props.children}</button>;
}

Tag = styled(Tag)`
  cursor: pointer;
  display: inline-block;
  color: white;
  border-radius: 2px;
  padding: 8px;
  background: #2096ed;
  border: none;
  font-size: 14px;
`;

function Status(props) {
  return <Tag {...props}>{props.children}</Tag>;
}

Status = styled(Status)`
  background: ${props => (props.children === "complete" ? "green" : "")};
  background: ${props => (props.children === "in development" ? "orange" : "")};
  background: ${props => (props.children === "outdated" ? "red" : "")};
  font-size: 12px;
  padding: 4;
`;

function Projects(props) {
  const [projects, setProjects] = useState([
    {
      links: [{ text: "view website", href: "https://bitreon.app" }],
      images: ["3.png"],
      title: "Cryptocurrency Powered Crowdfunding Website",
      status: "in development",
      rank: 1,
      desc: `A website I made during my free time in order to help people accept Bitcoin payments and offer rewards to donators based on the amount they donated.`,
      tags: ["bitcoin", "graphql", "react", "node", "postgres"]
    },
    {
      links: [
        {
          text: "view code",
          href: "https://github.com/KevinKelbie/bitcoin-graphql"
        }
      ],
      images: ["4.png"],
      title: "Bitcoin GraphQL API",
      status: "in development",
      rank: 2,
      desc: `A library that extends the functionality of the Bitcoin Core API which is the defacto api for Bitcoin. It allows for more fine-grain control over the result of the output which makes for more efficient queries.`,
      tags: ["bitcoin", "graphql", "node", "postgres"]
    },
    /*{
      links: [
        {
          text: "view code",
          href: "https://github.com/KevinKelbie/zerolink-util"
        }
      ],
      images: ["0.png"],
      title: "Zerolink Utility",
      status: "outdated",
      desc: ``,
      tags: ["bitcoin", "python"]
    },*/
    {
      links: [
        {
          text: "view code",
          href: "https://github.com/KevinKelbie/celcat-timetable-parser"
        }
      ],
      images: ["0.png"],
      title: "CELCAT timetable PDF Parser",
      status: "outdated",
      rank: 3,
      desc: `This api converts CELCAT PDF's into JSON objects.`,
      tags: ["rest", "node", "postgres"]
    },
    {
      links: [
        {
          text: "view code",
          href: "https://github.com/KevinKelbie/rgu-key-manager"
        }
      ],
      images: ["5.png"],
      title: "University Key Manager (group project)",
      status: "complete",
      rank: 3,
      desc: `A Key Manager which was built to replace a cumbersome excel document which was previously being used.`,
      tags: ["react", "firebase"]
    },
    {
      links: [
        { text: "view code", href: "https://github.com/KevinKelbie/index" }
      ],
      images: ["2.png"],
      title: "Cryptocurrency wallet/exchange",
      status: "complete",
      rank: 4,
      desc: `This application allows users to send, receive and sell their cryptocurrencies for other cryptocurrencies.`,
      tags: ["cryptocurrency", "node", "jquery", "ejs"]
    },
    // {
    //   links: [{ text: "private code", href: "" }],
    //   images: ["0.png"],
    //   title: "Student Log (group project)",
    //   status: "in development",
    //   rank: 6,
    //   desc: `Student Log is a website that allows university students to register their attendance during classes.`,
    //   tags: ["node", "jquery"]
    // }
    /*{
      links: [
        { text: "view specification", href: "" },
        { text: "view code", href: "" }
      ],
      images: ["0.png"],
      title: "xgql",
      status: "in development",
      desc: `Schema aware, emmet-like expression shorthand for graphql queries`,
      tags: ["javascript", "regex"]
    }*/
  ]);
  return (
    <div {...props}>
      {projects
        .sort(function(p1, p2) {
          return p1.rank > p2.rank;
        })
        .map(project => {
          return (
            <Project
              links={project.links}
              title={project.title}
              images={project.images}
              status={project.status}
              desc={project.desc}
              tags={project.tags}
            />
          );
        })}
    </div>
  );
}

export default Projects;
