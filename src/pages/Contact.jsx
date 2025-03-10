import React from 'react';


function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-script text-teal-600 mb-4">Our Contact</h2>
        <p className="text-gray-600 uppercase tracking-wide mb-4">GET IN TOUCH</p>
        <h3 className="text-3xl font-bold">
          <span className="text-orange-500">Our Friendly Team</span>
          <span className="text-gray-900"> would love to hear from you</span>
        </h3>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-3 gap-8">
        {/* Location Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
           
            <span className="font-bold text-lg">LOCATION</span>
          </div>
          <p className="text-gray-700 italic">
            New Baneshwor -41201,<br />
            Kathmandu, Bagmati, Nepal
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            
            <span className="font-bold text-lg">PHONE</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-teal-600 font-medium">Mobile:</p>
              <p className="text-gray-700">(+977) 980 5689789</p>
              <p className="text-gray-700">(+977) 9841 275897</p>
            </div>
            <div>
              <p className="text-teal-600 font-medium">Tel:</p>
              <p className="text-gray-700">01-4783972</p>
            </div>
          </div>
        </div>

        {/* Service Time Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
           
            <span className="font-bold text-lg">SERVICE TIME</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-teal-600 font-medium">MON - FRI</span>
              <span className="text-gray-700">8 am - 8 pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-teal-600 font-medium">SAT - SUN</span>
              <span className="text-gray-700">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;