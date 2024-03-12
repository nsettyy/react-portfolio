import "../styles/Projects.css";

import Ourspace from "../assets/ourspace.jpeg";
import SoundScout from "../assets/soundscout.jpeg";
import PasswordGen from "../assets/passwordgenerator.jpeg";
import CalenderApp from "../assets/calender application.jpeg";
import ReadMe from "../assets/examplereadme.jpeg";
import SVGLogoGenerator from "../assets/logo-generator-screenshot.jpeg";

export default function Projects() {
  return (
    <div class="projects">
      <h1>My Projects</h1>
      <div class="row">
        <project1 class="column">
          <p class="title">ourspace</p>
          <p class="description">
            A site that allows apartment hunters and their roomates to store
            their listings.
          </p>
          <img id="ourspace" src={Ourspace} alt="ourspace" height="200px" />
          <p>
            <a href="https://our--space-1c334f1f25f8.herokuapp.com/">
              Deployed Site
            </a>
            <a href="https://github.com/dianamariedischer/ourspace">
              {" "}
              | Github Repository
            </a>
          </p>
        </project1>
        <project2 class="column">
          <p class="title">Sound Scout</p>
          <p class="description">The similair artist finder.</p>
          <img
            id="ourspace"
            src={SoundScout}
            alt="Sound Scout"
            height="200px"
          />
          <p>
            <a href="https://nsettyy.github.io/sound-scout/">Deployed Site</a>
            <a href="https://github.com/nsettyy/sound-scout">
              {" "}
              | Github Repository
            </a>
          </p>
        </project2>
      </div>
      <div class="row">
        <project3 class="column">
          <p class="title">Password Generator</p>
          <p class="description">
            A JavaScript password generator that creates a password based on
            user inputs.
          </p>
          <img
            id="passwordGenerator"
            src={PasswordGen}
            alt="Password Generator"
            height="200px"
          />
          <p>
            <a href="https://nsettyy.github.io/password--generator/">
              Deployed Site
            </a>
            <a href="https://github.com/nsettyy/password--generator">
              | Github Repository
            </a>
          </p>
        </project3>
        <project4 class="column">
          <p class="title">Calender</p>
          <p class="description">A datasaving calender application.</p>
          <img
            id="calender"
            src={CalenderApp}
            alt="Calender Application"
            height="200px"
          />
          <p>
            <a href="https://nsettyy.github.io/calender-application/">
              Deployed Site
            </a>
            <a href="https://github.com/nsettyy/calender-application">
              {" "}
              | Github Repository
            </a>
          </p>
        </project4>
      </div>
      <div class="row">
        <project5 class="column">
          <p class="title">ReadMe File Gnerator</p>
          <p class="description">
            A NodeJS application that generates a Read Me file.
          </p>
          <img
            id="readMe"
            src={ReadMe}
            alt="Read Me Generator"
            height="200px"
          />
          <p>
            <a href="https://github.com/nsettyy/NodeJS-ReadMe-generator">
              Github Repository
            </a>
          </p>
        </project5>
        <project6 class="column">
          <p class="title">SVG Logo Generator</p>
          <p class="description">A commandline SVG Logo Generator</p>
          <img
            id="SVGLgoGen"
            src={SVGLogoGenerator}
            alt="SVG Logo Generator"
            height="200px"
            width="400px"
          />
          <p>
            <a href="https://github.com/nsettyy/svg-logo-generator">
              Github Repository
            </a>
          </p>
        </project6>
      </div>
      <h2>
        Checkout the rest of my projects on my
        <a href="https://github.com/nsettyy"> Github </a>
        account!
      </h2>
    </div>
  );
}
