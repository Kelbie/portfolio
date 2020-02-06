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
    // {
    //   links: [
    //     { text: "Github", href: "https://github.com/KevinKelbie/bitreon" }
    //   ],
    //   images: ["3.png"],
    //   title: "Cryptocurrency Powered Crowdfunding Website",
    //   status: "in development",
    //   rank: 1,
    //   desc: `A website I made during my free time in order to help people accept Bitcoin payments and offer rewards to donators based on the amount they donated.`,
    //   tags: ["bitcoin", "graphql", "react", "node", "postgres"]
    // },
    {
      links: [
        {
          text: "Install",
          href:
            "https://marketplace.visualstudio.com/items?itemName=bitcoin.bitcoin"
        },
        {
          text: "Github",
          href: "https://github.com/KevinKelbie/vscode-bitcoin"
        }
      ],
      title: "VSCode Bitcoin Extention",
      status: "in development",
      rank: 3,
      desc: `A VSCode Extension with rich support for Bitcoin Script including features such as IntelliSense, linting, debugging, code formatting, and code executing on the Bitcoin network.`,
      tags: ["Bitcoin", "VSCode", "Typescript", "PostgreSQL", "Regex"]
    },
    {
      links: [
        {
          text: "Website",
          href: "https://statechain.info"
        },
        {
          text: "Explorer Github",
          href: "https://github.com/KevinKelbie/statechain-explorer"
        },
        {
          text: "Server Github",
          href: "https://github.com/KevinKelbie/statechain-core"
        }
      ],
      video: "1.mp4",
      title: "Statechain Server & Explorer (Honours Project)",
      status: "in development",
      rank: 2,
      desc: `An off-chain scaling solution for Blockchain-based cryptocurrencies with an emphasis on speed & performance.`,
      tags: ["Bitcoin", "ReactJS", "Rust", "Actix", "PostgreSQL", "RocksDB"]
    },
    {
      links: [
        {
          text: "Website",
          href: "https://studentlog.io"
        },
        {
          text: "Github",
          href: "https://github.com/KevinKelbie/student-log"
        }
      ],
      video: "2.mov",
      title: "StudentLog",
      status: "in development",
      rank: 1,
      desc: `StudentLog was a solution to a problem me and my peers faced which was our University timetable was not mobile-friendly so I built a mobile-first timetable web app. I parsed PDF files into JSON and stored them in a PostgreSQL database which I used at an API for my frontend app which was written in ReactJS.`,
      tags: ["Bitcoin", "Apollo GraphQL", "NodeJS", "PostgreSQL"]
    },
    {
      links: [
        {
          text: "Github",
          href: "https://github.com/KevinKelbie/bitcoin-graphql"
        }
      ],
      images: ["4.png"],
      title: "Bitcoin GraphQL API",
      status: "in development",
      rank: 3,
      desc: `A library that extends the functionality of the Bitcoin Core API which is the defacto api for Bitcoin. It allows for more fine-grain control over the result of the output which makes for more efficient queries.`,
      tags: ["bitcoin", "graphql", "node", "postgres"]
    },
    /*{
      links: [
        {
          text: "Github",
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
          text: "Github",
          href: "https://github.com/KevinKelbie/celcat-timetable-parser"
        }
      ],
      images: ["0.png"],
      title: "CELCAT timetable PDF Parser",
      status: "outdated",
      rank: 3,
      desc: `This api converts CELCAT PDF's into JSON objects.`,
      tags: [
        "NodeJS",
        "PostgreSQL",
        "Web Scraping",
        "ExpressJS",
        "GraphQL",
        "Docker"
      ]
    },
    {
      links: [
        {
          text: "Github",
          href: "https://github.com/KevinKelbie/rgu-key-manager"
        }
      ],
      images: ["5.png"],
      title: "University Key Manager (group project)",
      status: "complete",
      rank: 3,
      desc: `A Key Manager which was built to replace a cumbersome excel document which was previously being used.`,
      tags: ["ReactJS", "Firebase", "Material UI", "SCSS"]
    },
    {
      links: [{ text: "Github", href: "https://github.com/KevinKelbie/index" }],
      images: ["2.png"],
      title: "Cryptocurrency Wallet/Exchange",
      status: "complete",
      rank: 4,
      desc: `This application allows users to send, receive and sell their cryptocurrencies for other cryptocurrencies.`,
      tags: [
        "Cryptocurrency",
        "NodeJS",
        "ExpressJS",
        "jQuery",
        "EJS",
        "SCSS",
        "Shapeshift API"
      ]
    }
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
        { text: "Github", href: "" }
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
              video={project.video}
              status={project.status}
              desc={project.desc}
              tags={project.tags}
            />
          );
        })}
    </div>
  );
}

export default styled(Projects)`
  max-width: 600px;
  margin: auto;
  > * {
    margin-bottom: 16px;
  }
`;
