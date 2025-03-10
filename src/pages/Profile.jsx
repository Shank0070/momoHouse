import React, { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    name: 'Shashank Gautam',
    email: 'gautamshashank06@gmail.com',
    phone: '+(977) 9818257331',
    address: 'Minbhwan, Ktm',
    memberSince: 'January 2024',
    rewardsPoints: 235,
    profileImage: '/api/placeholder/200/200'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-amber-50 p-4">
      {/* Header */}
      <div className="bg-amber-800 rounded-t-lg shadow-lg p-6 mb-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Everest Momo</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-amber-100 hover:text-white">Home</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white">Menu</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white">Orders</a></li>
              <li><a href="#" className="text-white font-semibold">Profile</a></li>
              <li><a href="#" className="text-amber-100 hover:text-white">Log Out</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-amber-700 p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                
              </div>
              <div className="md:ml-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">{user.name}</h2>
                <p className="text-amber-200">Member since {user.memberSince}</p>
                <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                  <span>{user.rewardsPoints} Momo Points</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Profile Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Column - User Info */}
              <div className="md:col-span-2">
                <div className="bg-amber-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-amber-900">Personal Information</h3>
                    {!isEditing && (
                      <button 
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-amber-600 text-white text-sm rounded hover:bg-amber-700"
                      >
                        Edit Profile
                      </button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-amber-800">Full Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-amber-800">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-amber-800">Phone</label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-amber-800">Address</label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-4 py-2 border border-amber-300 rounded-md focus:ring-amber-500 focus:border-amber-500"
                          />
                        </div>
                        
                        <div className="flex space-x-4 pt-4">
                          <button
                            type="submit"
                            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
                          >
                            Save Changes
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData({ ...user });
                              setIsEditing(false);
                            }}
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Full Name</h4>
                        <p className="text-gray-900">{user.name}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Email</h4>
                        <p className="text-gray-900">{user.email}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                        <p className="text-gray-900">{user.phone}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Address</h4>
                        <p className="text-gray-900">{user.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Right Column - Order History */}
              <div>
                <div className="bg-amber-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-4">Recent Orders</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-600 pl-3">
                      <p className="font-medium">Order #1234</p>
                      <p className="text-sm text-gray-600">Feb 28, 2025</p>
                      <p className="text-sm">4 items • Rs. 850</p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-3">
                      <p className="font-medium">Order #1189</p>
                      <p className="text-sm text-gray-600">Feb 14, 2025</p>
                      <p className="text-sm">2 items • Rs. 450</p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-3">
                      <p className="font-medium">Order #1087</p>
                      <p className="text-sm text-gray-600">Jan 30, 2025</p>
                      <p className="text-sm">6 items • Rs. 1250</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="text-amber-600 hover:text-amber-800 text-sm font-medium">
                      View all orders →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-6 text-center text-sm text-amber-800 pb-8">
          &copy; {new Date().getFullYear()} Everest Momo. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Profile;