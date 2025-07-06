import React from 'react'
import "./About.css"

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">Explore my story</h2>
      <div className="about__container grid">
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi there! I'm Cuong but you can also call me Ferd, a web developer from Vietnam. This nickname is used on any social media platforms and in games.
            </p>
            <p className="about__description">
              I’m a passionate web developer from Vietnam who loves turning ideas into interactive digital experiences. Although I come from a non-IT background, I’ve taught myself programming and built up my skills through real-world projects.
              Currently, I’m working as a Frontend Developer at Baolongscrap, where I bring user interfaces to life with clean code and modern design principles.
              Beyond the frontend world, I’m deeply curious about the Internet of Things (IoT) and Machine Learning. I’m actively self-studying and sharpening my programming skills through hands-on projects, tech clubs, and workshops with experienced developers.
            </p>
            <p className="about__description">
              My ultimate goal is to become a versatile Full-Stack Web Developer and a DevOps specialist. I want to not only build great applications but also ensure they run smoothly and scale effectively. Every day, I challenge myself to learn something new and push my limits as a developer.
            </p>
          </div>
        </div>
        <img
          src="https://emoji.discadia.com/emojis/c74ea7f7-2a99-4051-a1e7-424e39892900.gif"
          alt=""
          className="about__gif"
        />
      </div>
    </section>
  )
}

export default About
