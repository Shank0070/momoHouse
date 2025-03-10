import React from 'react';
import chef from "../assets/chef.png";
import making from "../assets/making.png";
import crr from "../assets/crr.png";
import glasschef from "../assets/glasschef.png";
import ceo from "../assets/ceo.png";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-16">
        <div className="max-w-sm">
          <h2 className="text-teal-600 text-8xl font-script mb-4 font-Allura ">About Us</h2>
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">WE PRIDE OURSELF ON</p>
          <div className="space-y-1">
            <h3 className="text-orange-500 text-2xl font-bold">Our authentic momo recipes</h3>
            <p className="text-gray-800 text-2xl font-bold">passed down through</p>
            <p className="text-gray-800 text-2xl font-bold">generations</p>
          </div>
        </div>
        <div className="relative">
          <div className="bg-teal-500 rounded-full w-72 h-72 flex items-center justify-center">
            <img
              src={chef}
              alt="Chef with wooden spoon"
              className="h-72"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 md:h-96 bg-gray-800 overflow-hidden">
      
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-16 px-8 md:px-16">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Process behind the making
        </h1>
        <p className="text-white text-lg mb-6">
          See how we make momos that you like from only the best ingredients
        </p>
        
        {/* Watch Video Button */}
        <div>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-full flex items-center transition-colors duration-300">
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
                clipRule="evenodd" 
              />
            </svg>
            Watch the Video
          </button>
        </div>
      </div>
    </div>
      
      {/* Made with Love Section */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Our momos are <span className="text-orange-500">made<br />with love</span>
          </h3>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dignissus. Vestibulum velit viverra gravida consectetur sed facilisis ut morti.
          </p>
        </div>
        <div>
          <img
            src={making}
            alt="Chef preparing ingredients"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Taste the Difference Section */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src={crr}
            alt="Chef plating momos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">
            Taste the difference with<br />
            <span className="text-orange-500">our handcrafted momos</span>
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dignissus. Vestibulum velit viverra gravida consectetur sed facilisis ut morti.
          </p>
        </div>
      </div>
      
      {/* Tradition and Innovation Section */}
      <div className="grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Our momos are the<br />
            perfect <span className="text-orange-500">blend of tradition</span><br />
            and <span className="text-orange-500">innovation</span>
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac adipiscing. Leo odio tincidunt 
            ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum velit viverra 
            gravida consectetur sed facilisis ut morbi.
          </p>
        </div>
        <div>
          <img
            src={glasschef}
            alt="Chef preparing momos"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full bg-white">
      {/* Team Section with Testimonial and Image */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Side - Testimonial */}
        <div className="w-full md:w-1/2 bg-gray-800 bg-opacity-80 p-8 flex items-center justify-center relative">
          <div className="max-w-md text-white space-y-6">
            <div className="text-5xl font-serif text-white opacity-80">"</div>
            <p className="text-lg">
              Momo is not just about sustenance, it's about bringing
              people together and creating memories. At our
              restaurant, we strive to create a warm and inviting
              atmosphere where our guests can enjoy delicious
              momo, great company, and unforgettable experiences
            </p>
            <div className="pt-4">
              <h3 className="text-3xl font-bold">Marcus Schleifer</h3>
              <p className="text-xl">CEO</p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-2 pt-6">
              <button className="rounded-full bg-gray-700 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="rounded-full bg-gray-700 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side - Team Member Image */}
        <div className="w-full md:w-1/2 bg-teal-50">
          <img 
            src={ceo} 
            alt="Team member portrait" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Meet The Team Header */}
      <div className="py-12 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Meet The <span className="text-orange-500">Team</span>
        </h2>
        <p className="text-lg text-teal-800 max-w-3xl mx-auto">
          Our talented team members who delivers only the best results
        </p>
      </div>
      
    </div>
    </div>
    
  );
}

export default About;