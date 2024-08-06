// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const NAV_CLASS =
  "bg-primary text-primary-foreground p-4 flex justify-between items-center";
const LINK_CLASS = "hover:text-primary-foreground";
const HEADER_CLASS = "bg-primary-foreground text-primary p-8 text-center";
const SECTION_CLASS = "p-8";
const GRID_CLASS = "grid grid-cols-1 md:grid-cols-2 gap-8";
const CARD_CLASS = "p-8 bg-card text-card-foreground";
const ZINC_CLASS = "bg-zinc-300 rounded-lg p-4";
const FORM_CLASS = "flex flex-col space-y-4";
const INPUT_CLASS = "p-2 rounded-lg bg-input text-input";
const BUTTON_CLASS =
  "bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/80";

const Portfolio = () => {
  return (
    <div className="bg-background text-foreground">
      <nav className={NAV_CLASS}>
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="flex space-x-4">
          <a href="#" className={LINK_CLASS}>
            Home
          </a>
          <a href="#" className={LINK_CLASS}>
            About
          </a>
          <a href="#" className={LINK_CLASS}>
            Portfolio
          </a>
          <a href="#" className={LINK_CLASS}>
            Contact
          </a>
        </div>
      </nav>

      <header className={HEADER_CLASS}>
        <h1 className="text-4xl font-bold">Welcome to My Creative Portfolio</h1>
        <p className="mt-4">Explore my work and get in touch!</p>
      </header>

      <section className={SECTION_CLASS}>
        <div className={GRID_CLASS}>
          <div>
            <img
              src="https://openui.fly.dev/openui/400x300.svg?text=About+Me"
              alt="About Me"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I am a passionate designer and developer with a love for creating
              beautiful and functional websites.
            </p>
            <p>
              Feel free to browse through my portfolio and get in touch with me
              for any projects or collaborations!
            </p>
          </div>
        </div>
      </section>

      <section className={CARD_CLASS}>
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className={ZINC_CLASS}>
            <img
              src="https://openui.fly.dev/openui/300x200.svg?text=Project+1"
              alt="Project 1"
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Project 1</h3>
            <p className="mt-2">Description of Project 1</p>
          </div>
          <div className={ZINC_CLASS}>
            <img
              src="https://openui.fly.dev/openui/300x200.svg?text=Project+2"
              alt="Project 2"
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Project 2</h3>
            <p className="mt-2">Description of Project 2</p>
          </div>
          <div className={ZINC_CLASS}>
            <img
              src="https://openui.fly.dev/openui/300x200.svg?text=Project+3"
              alt="Project 3"
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-lg font-bold mt-2">Project 3</h3>
            <p className="mt-2">Description of Project 3</p>
          </div>
        </div>
      </section>

      <section className={SECTION_CLASS}>
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className={GRID_CLASS}>
          <div>
            <img
              src="https://openui.fly.dev/openui/400x300.svg?text=Contact"
              alt="Contact Me"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-4">
              Have a project in mind or just want to say hi? Feel free to reach
              out to me using the form below.
            </p>
            <form className={FORM_CLASS}>
              <input
                type="text"
                placeholder="Your Name"
                className={INPUT_CLASS}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={INPUT_CLASS}
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className={INPUT_CLASS}
              ></textarea>
              <button type="submit" className={BUTTON_CLASS}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-primary-foreground text-primary p-4 text-center">
        &copy; 2023 My Portfolio. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Portfolio;
