import React from "react";
import { LinkedIn, Email } from "@material-ui/icons";
import GithubIcon from "@material-ui/icons/GitHub";
import ReactTypingEffect from "react-typing-effect";
import "../styles/Home.css";
import Link from "@mui/material/Link";

function Home() {
  const linkedInLink =
    "https://www.linkedin.com/in/ashyr-magtymgulyyev-42ba16197/";
  const emailLink = "mailto:ashyr.magtymguly@gmail.com";
  const githubLink = "https://github.com/Ash-HubGit";
  return (
    <div className="home">
      <div className="about">
        <h2>
          <ReactTypingEffect
            text={["Hi, My Name is Ash", "I am a Web Developer"]}
            speed={80}
            eraseDelay={200}
          />
        </h2>
        <div className="prompt">
          <p>A Front-End developer with a passion for learning and creating.</p>
          <Link href={linkedInLink} target="_blank">
            <LinkedIn />
          </Link>
          <Link href={githubLink} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={emailLink} target="_blank">
            <Email />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloSever, MySQL,
              MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
