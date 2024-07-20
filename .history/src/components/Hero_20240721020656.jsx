import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/SayedTabish72/AI_articles_Summarizer/tree/main", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Project: AI-Powered Content
      <br className='max-md:hidden' />
        <span className='blue_text'>Summarization and Analysis Tool</span>
      </h1>
      <h2 className='desc'>
      This application allows users to upload text content (articles, documents, emails, etc.)
      and receive a summarized version with key insights and analysis.

      </h2>
    </header>
  );
};

export default Hero;
