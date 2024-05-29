import React from 'react';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-black">
      <h1 className="text-3xl mb-4 text-white">Home</h1>
      <p className="text-lg mb-4 text-white">Das ist die Startseite</p>
      <img className="flex-col" src="https://www.limesoda.com/blog/wp-content/uploads/aufbau-blogseite-header-770x404.png" alt="" />
    </div>
  );
}

export default Home;
