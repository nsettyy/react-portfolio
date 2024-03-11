import "../styles/Projects.css";

import ourspace from "../assets/ourspace.jpeg";
import SoundScout from "../assets/soundscout.jpeg";

export default function Projects() {
  return (
    <div class="projects">
      <h1>My Projects</h1>

      <project>
        <project1>
          <p class="title">ourspace</p>
          <p class="description">
            A site that allows apartmnet hunters and their roomates to store
            their listings.
          </p>
          <img id="ourspace" src={ourspace} alt="ourspace" height="200px" />
          <p class="links"> Depolyed Site | Github Repository</p>
        </project1>

        <project2>
          <p class="title">Sound Scout</p>
          <p class="description">The similair artist finder</p>
          <img
            id="ourspace"
            src={SoundScout}
            alt="Sound Scout"
            height="200px"
          />
          <p class="links"> Depolyed Site | Github Repository</p>
        </project2>
      </project>
    </div>
  );
}
