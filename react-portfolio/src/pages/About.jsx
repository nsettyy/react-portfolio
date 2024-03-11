import '../styles/About.css'
import headshot from "../assets/headshot.jpeg"

export default function About() {
  return (
    <div class='about'>
      <h1>About Page</h1>
      <p>
        My name is Nick Settembrino, and I took my first dive into coding in September of 2023. Since then, I have accumluated an abundance of knowlege about web development and can now proudly showcase my work for you to see.
      </p>
      <img src={headshot} alt="Nick's Headshot" height="200px" />
      <p>I originally got interested in web development by seeing videos online. I used to think that creating websites was simple but through trial and error and a lot of class I have learned that it is not as simple as it seems.</p>
      <p>I currently work full-time as a mechanic, but I would like to transition into the coding world, and specifically web development. I think my skills as a mechanic can help me in the web development world, as I have learned to enjoy troubleshooting and have developed an ability to learn on the fly and retain important information quickly.</p>
      <p>Please view my projects to see my work and my Linkedin to view my resume.</p>
    </div>
  );
}
