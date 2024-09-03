import React from 'react';

const Hero1 = () => {
  return (
    <header className="header">
        <section>
            <video className='videoBackground' autoPlay muted loop>
                <source src='/Forest.mp4' type='video/mp4'/>
            </video>
            <div className="container">
                <h1>Next Level Tech.</h1>
            </div>
        </section>
    </header>
  );
};

export default Hero1;
