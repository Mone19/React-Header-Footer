import React from 'react';

function Home() {
  return (
    <div className="mb-4 flex flex-col justify-center items-center min-h-[calc(100vh-200px)] dark:bg-black">
      <h1 className="text-2xl mb-2 text-white">Home</h1>
      <p className="text-md mb-2 text-white">Das ist die Startseite</p>
      <img className="flex-col" src="https://www.limesoda.com/blog/wp-content/uploads/aufbau-blogseite-header-770x404.png" alt="" />
    </div>
  );
}

export default Home;
