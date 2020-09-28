import React from "react";

function Hero(props) {
  return (
    <section className="hero text-center py-20 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div>
          <h1 className="hero-heading font-semibold text-dark-blue-500 text-5xl px-2 leading-tight max-w-4xl mx-auto">
            Everything you need to become a software developer
          </h1>
          <h3 className="text-2xl text-dark-blue-300 font-light my-12">
            A program designed to help you develop full-stack web development
            skills and <br />
            become job-ready
          </h3>
          <div className="flex justify-center items-center">
            <h5 className="text-royal-blue-400 font-medium text-lg font-mukta">
              100% online
            </h5>
            <span className="w-2 h-2 bg-dark-blue-300 mx-6 rounded-full"></span>
            <h5 className="text-royal-blue-400 font-medium text-lg font-mukta">
              Project based
            </h5>
            <span className="w-2 h-2 bg-dark-blue-300 mx-6 rounded-full"></span>
            <h5 className="text-royal-blue-400 font-medium text-lg font-mukta">
              Mentorship
            </h5>
          </div>
          <a
            href="https://launchpad.altcampus.school/signup"
            className="text-lg text-white bg-green-theme-500 uppercase py-4 px-24 inline-block mt-12 rounded font-medium hover:shadow-lg font-mukta"
          >
            Start Learning
          </a>
        </div>
        <img
          className="absolute right-0 top-0 hero-image"
          src="/assets/media/bg-hero1.svg"
          alt="Hero Bg"
        />
      </div>
    </section>
  );
}

export default Hero;
