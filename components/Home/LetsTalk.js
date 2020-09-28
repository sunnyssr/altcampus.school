import React from 'react';

function LetsTalk(props) {
  return (
    <section className='cta py-24'>
      <div className='container mx-auto px-8'>
        <div className='md:px-12 text-center md:text-left md:flex md:items-center md:justify-center'>
          <div>
            <h3 className='text-3xl text-white md:max-w-lg md:mr-8'>
              Still have doubts? Talk to us!
            </h3>
            <h5 className='text-white font-bold'>
              Get on a call with our co-founder.
            </h5>
          </div>

          <a
            className='mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold'
            target='_blank'
            rel='noopener'
            href='https://calendly.com/prank7/altcampus-one-on-one'
          >
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
