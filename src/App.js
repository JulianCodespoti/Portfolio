import "./App.css";
import React from "react";
import { GithubProfile } from "./GithubProfile";
import ProfilePicture from "./Resources/ProfilePicture.jpg";

function App() {
  const [repos, setRepos] = React.useState([]);
  const [showRepos, setShowRepos] = React.useState(false);
  const MyobLink = (
    <a
      href="https://www.myob.com/au/"
      style={{ textDecoration: "none", color: "#0096cc" }}
    >
      Myob
    </a>
  );
  const SwinburneLink = (
    <a
      href="https://www.swinburne.edu.au/"
      style={{ textDecoration: "none", color: "#0096cc" }}
    >
      Swinburne University
    </a>
  );

  if (repos.length === 0) SetGithubReposStateFor("JulianCodespoti");

  async function SetGithubReposStateFor(username) {
    const url = "https://api.github.com/users/" + username + "/repos";
    const response = await fetch(url);
    const data = await response.json();
    var repoArray = [];
    for (var i = 0; i < data.length; i++) {
      var repo = new GithubProfile(
        data[i].name.toString(),
        data[i].html_url.toString(),
        data[i].description.toString(),
        data[i].language.toString()
      );
      repoArray.push(repo);
    }
    setRepos(repoArray);
  }

  function DisplayGithubRepos() {
    if (repos.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="ProfileRepos">
          {repos.map((repo) => (
            <div
              style={{
                margin: 10,
                backgroundColor: "lightgrey",
                height: 200,
                width: 500,
                borderRadius: 20,
              }}
            >
              <h3 style={{ color: "black" }}>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
              <a href={repo.url} style={{ textDecoration: "none" }}>
                Link to Repo
              </a>
            </div>
          ))}
        </div>
      );
    }
  }

  function CreateHomeButton() {
    return (
      <button className="HomeButton" onClick={() => setShowRepos(false)}>
        Home
      </button>
    );
  }

  function CreateRepositoriesButton() {
    return (
      <button
        className="RepositoriesButton"
        onClick={() => setShowRepos(!showRepos)}
      >
        Show Repos
      </button>
    );
  }

  function CreateProfilePicture() {
    return (
      <div className="ProfilePicture">
        <img
          src={ProfilePicture}
          alt="profile"
          style={{
            borderRadius: "50%",
            padding: 10,
            backgroundColor: "rgba(0, 0, 0, 0.125)",
            border: "1px solid rgb(160, 159, 159)",
          }}
        />
      </div>
    );
  }

  function CreateLinkedInLink() {
    return (
      <a href="https://www.linkedin.com/in/juliancodespoti/?originalSubdomain=au">
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="linkedin"
        />
      </a>
    );
  }
  function CreateGithubLink() {
    return (
      <a href="https://github.com/JulianCodespoti/">
        <img
          src="https://img.icons8.com/color/48/000000/github.png"
          alt="github"
        />
      </a>
    );
  }
  function CreateFacebookLink() {
    return (
      <a href="https://www.facebook.com/profile.php?id=100010063338051">
        <img
          src="https://img.icons8.com/color/48/000000/facebook.png"
          alt="facebook"
        />
      </a>
    );
  }
  function CreateInstagramLink() {
    return (
      <a href="https://www.instagram.com/julian.codespoti/?hl=en">
        <img
          src="https://img.icons8.com/color/48/000000/instagram-new.png"
          alt="instagram"
        />
      </a>
    );
  }
  function CreateEmailLink() {
    return (
      <a href="mailto:juliancodespoti@gmail.com">
        <img
          src="https://img.icons8.com/color/48/000000/gmail.png"
          alt="email"
        />
      </a>
    );
  }

  function CreateResumeHeader() {
    return (
      <div className="ResumeHeader">
        {CreateProfilePicture()}
        <h1 style={{ fontSize: 50, margin: 0 }}>Julian Codespoti</h1>
        <h2
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            color: "gray",
            fontWeight: 10,
            textAlign: "center",
          }}
        >
          Studying Software Engineering at {SwinburneLink}
          <br></br>Intern developer at {MyobLink}
        </h2>
        <div>
          {CreateLinkedInLink()}
          {CreateGithubLink()}
          {CreateFacebookLink()}
          {CreateInstagramLink()}
          {CreateEmailLink()}
        </div>
      </div>
    );
  }

  function CreateAboutMe() {
    return (
      <div className="AboutMe">
        <h2>About Me</h2>
        <p>
          I am a curious programmer with a passion for learning and
          problem-solving. I am currently studying software engineering at{" "}
          {SwinburneLink} and interning at {MyobLink}.<br></br>
          <br></br>
          Having developed a passion for teaching and expressing a variety of
          conceptual topics amongst peers, this hobby has ultimately transformed
          into a job, igniting the reinforcement and development of a plethora
          of soft skills, ranging from communication and vocalization of ideas
          and concepts, to establishing interpersonal relationships and working
          amongst peers in a dynamic environment.
          <br></br>
          <br></br>
          Additionally, time management skills - alongside working in an
          innovative and dynamic work-place - serves as a forefront set of
          skills that is derived from the partaking of leadership roles amongst
          various diverse, university projects.
        </p>
      </div>
    );
  }

  function CreateSkills() {
    return (
      <div className="Skills">
        <h2>Skills</h2>
        <div className="SkillsList">
          <div className="SkillsLanguages">
            <h3>Languages</h3>
            <ul style={{listStyleType: "none", paddingRight : 40}}>
              <li>JavaScript</li>
              <li>C#</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>SQL</li>
              <li>MATLAB</li>
            </ul>
          </div>
          <div className="SkillsFrameworks">
            <h3>Frameworks</h3>
            <ul style={{listStyleType: "none", paddingRight : 40}}>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ position: "relative", marginLeft: 10 }}>
          Julian Codespoti
          {CreateHomeButton()}
          {CreateRepositoriesButton()}
        </h1>
      </header>
      <div>{CreateResumeHeader()}</div>
      <div>{CreateAboutMe()}</div>
      <div>{CreateSkills()}</div>
      {showRepos ? DisplayGithubRepos() : ""}
    </div>
  );
}

export default App;
