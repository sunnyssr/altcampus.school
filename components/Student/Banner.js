import React from 'react';

function Banner(props) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-24">
        <header className="text-center">
          <h1 className="text-dark-blue-600 text-5xl font-bold">
            Harshaan Nihal Khaan
          </h1>
          <div className="flex items-center justify-center mt-8">
            <img
              src="/images/icons/placed.svg"
              className="w-24 transform -rotate-12 inline-block"
              alt="Placement"
            />
            <h3 className="text-royal-blue-500 text-xl font-semibold ml-6">
              Software Engineer, BigBinary
            </h3>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Banner;
