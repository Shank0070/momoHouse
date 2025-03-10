import hatchef from "../assets/hatchef.png"


import React from 'react';

function AllergyAdvice() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-teal-600 font-bold text-4xl mb-4">Allergy Advice</h1>
            <h2 className="text-gray-600 text-sm uppercase tracking-wider mb-6">AT OUR RESTAURANT</h2>
          </div>
          
          <p className="text-gray-800 text-lg leading-relaxed">
            We use only the <span className="text-orange-600 font-semibold">freshest and highest quality ingredients</span> in all our dishes, 
            and offer <span className="text-orange-600 font-semibold">complete transparency</span> in our ingredient labeling.
          </p>
          
          
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 bg-teal-600 rounded-full opacity-20"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="relative">
                      <div className="w-96 h-96 bg-teal-600 rounded-full overflow-hidden">
                        <img 
                          src={hatchef}
                          alt="Chef making OK sign"
                          className="w-full h-full object-cover"
                        />
                      
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    </div>

  );
}

export default AllergyAdvice;