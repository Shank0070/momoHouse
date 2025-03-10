import hatchef from "../assets/hatchef.png"

function OurService() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
    <div className="flex justify-between items-center">
      {/* Text Content */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-script text-teal-600 mb-6">Our Services</h2>
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-4">
          KNOWING OUR CUSTOMERS NEEDS
        </p>
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-orange-500">
            We're more than just momos.
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            We're a full-service dining experience.
          </p>
        </div>
      </div>

      {/* Chef Image */}
      <div className="relative">
        <div className="w-96 h-96 bg-teal-600 rounded-full overflow-hidden">
          <img 
            src={hatchef}
            alt="Chef making OK sign"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative Dots Pattern */}
        <div className="absolute -right-8 top-8 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 bg-gray-200 rounded-full"
            />
          ))}
          </div>
          </div>
          
      
    
          </div>
          </div>
          

  )
}

export default OurService
