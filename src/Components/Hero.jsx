import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="IntelliSum_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/geethansh")}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize URLs/Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your Reading with IntelliSum, an open-source URL/Article summarizer
        that transforms lengthy text into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
