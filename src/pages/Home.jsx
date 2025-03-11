import platter from "../assets/platter.png";
import circle from "../assets/circle.png";
import back from "../assets/back.png";
import thumb from "../assets/thumb.png";
import qual from "../assets/qual.png";
import pri from "../assets/pri.png";
import catte from "../assets/catte.png";
import girl from "../assets/girl.png";
import momo from "../assets/momo.png";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [product, setProduct] = useState([]);
  const [filterProductList, setFilterProductList] = useState([]);
  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();

    console.log(response.recipes);

    setProduct(response.recipes);
  };
  const filterProduct = (item) => {
    const filterItems = product.filter((product) => {
      return product.cuisine === item;
    });
    setFilterProductList(filterItems);
  };
  useEffect(() => {
    getProduct();
  }, []);


  useEffect(()=>{
    filterProduct("Pakistani");

  },[product])
  return (
    <div className="">
      <div className="flex justify-end">
        <div className="space-x-4 mt-10 w-96 mr-96">
          <p>RESTAURANT</p>
          <h1 className="text-4xl">
            The{" "}
            <span
              className="h-16 w-40 text-center bg-no-repeat bg-contain text-white text-5xl inline-block "
              style={{ backgroundImage: `url(${back}) ` }}
            >
              #one
            </span>
            <p>
              {""}
              Momo<span className="text-orange-500">Restraunt</span>
            </p>
          </h1>

          <p>
            More than <span className="text-orange-500">20+ Varieties</span> of
            momo available for you
          </p>
          <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors mt-4">
            Explore Food Menu →
          </button>
        </div>
        <div className="overflow-hidden">
          <img className="h-52 absolute right-10 top-36" src={platter} alt="" />
          <img className="h-[400px] -mt4 " src={circle} alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 flex items-center gap-12">
        <div className="relative w-72 h-100">
          <div className="absolute inset-0 bg-teal-700 rounded-tr-[100px] rounded-bl-[100px]"></div>
          <img
            src={thumb}
            alt="Happy customer"
            className="absolute inset-4 object-cover"
          />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-semibold">
            Why Customers <span className="text-orange-500">Love Us</span>
          </h2>
          <p className="text-gray-600 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Sed diam dolor vivamus nisl
            fermentum vulputate tortor. Egestas facilisi luctus turpis arcu
            dignissim.
          </p>
          <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors">
            Explore Our Story →
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">
            Our <span className="text-orange-500">Most Popular</span> Recipes
          </h2>
          <p className="text-gray-600">
            Browse through a variety of recipes with fresh ingredients selected
            only from the best places
          </p>
        </div>
        <div className="max-w-5xl mx-auto py-8 px-4">
          {/* Buff, Veg and Chicken Momo List */}

          <div className="  mt-3 p-2 flex justify-center items-center gap-x-2">
            <button
              onClick={() => {
                filterProduct("Pakistani");
              }}
              className="border-2 rounded-3xl px-3 py-1"
            >
              Pakistani
            </button>
            <button
              onClick={() => {
                filterProduct("Italian");
              }}
              className="border-2 rounded-3xl px-3 py-1"
            >
              Italian
            </button>
            <button
              onClick={() => {
                filterProduct("Indian");
              }}
              className="border-2 rounded-3xl px-3 py-1"
            >
              Indian
            </button>
          </div>
          <div>
            <div>
              {filterProductList.length > 0 ? (
                <div className="flex flex-wrap gap-6 justify-center p-5">
                  {filterProductList.map((item) => {
                    return (
                      <NavLink
                        key={item.id}
                        to={`/productDescription/${item.id}`}
                      >
                        <div className="flex flex-col justify-between items-center p-2 shadow-2xl shadow-gray-700 rounded-3xl h-auto w-60">
                          <img
                            className=" rounded-3xl h-40"
                            src={item.image}
                            alt=""
                          />
                          <h1>{item.name}</h1>
                          <h1>Rs.{item.caloriesPerServing}</h1>
                          <h1>Rs.{item.cuisine}</h1>
                        </div>
                      </NavLink>
                    );
                  })}
                </div>
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>

          {/* Explore Menu Button */}
          <div className="flex justify-center">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-full flex items-center">
              Explore Our Menu
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <button className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full font-sans">
          {/* Header Text */}
          <div className="py-8 px-4 text-center">
            <h1 className="text-4xl font-bold">
              <span className="text-orange-600">We Offer People</span>{" "}
              <span className="text-gray-800">The Service They Want</span>
            </h1>
          </div>

          {/* Hero Section */}
          <div className="relative w-full h-96">
            {/* Overlay Content */}
            <div className="h-full flex flex-col items-center justify-center  text-center px-4">
              <h2 className="text-4xl font-bold mb-4">
                Process behind the making
              </h2>
              <p className="text-xl mb-8">
                See how only chefs cooks only the best momos
              </p>

              {/* Video Button */}
              <button className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full transition duration-300">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <img src={qual} alt="Quality Food" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold">Quality Food</h3>
            <p className="text-gray-600">
              Only the best food with top quality products and ingredients
            </p>
          </div>
          <div className="space-y-2">
            <img src={pri} alt="Private Party" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold">Private Party</h3>
            <p className="text-gray-600">
              Get the best food for all your private parties and gatherings
            </p>
          </div>
          <div className="space-y-2">
            <img src={catte} alt="Catering" className="mx-auto h-16" />
            <h3 className="text-xl font-semibold">Catering</h3>
            <p className="text-gray-600">
              Get the best food for any occasions and gatherings
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition-colors">
            Explore Our Services →
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 mt-20">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-semibold">
              200+ <span className="text-orange-500">Happy Customers</span>
            </h2>
            <h3 className="text-lg text-teal-700 font-semibold">
              What our customers say about us
            </h3>
            <p className="text-gray-600 italic">
              "Only the best momo you can find in the market. Different
              Varieties of momo to choose from. Will be visiting again soon."
            </p>
            <p className="font-semibold">Livia Dias</p>
            <div className="flex gap-4">
              <button className="border border-gray-300 rounded-full p-2">
                ←
              </button>
              <button className="border border-gray-300 rounded-full p-2">
                →
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src={girl}
              alt="Happy customer"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-semibold">
            Get <span className="text-orange-500">In Touch</span>
          </h2>
          <p className="text-teal-700">
            Our friendly team would love to hear from you
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-2/5 bg-teal-700 text-white p-8 rounded-lg">
            <div className="space-y-8">
              {/* Address Section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Address</h3>
                <p className="italic">
                  New Baneshwor, Kathmandu, Bagmati, Nepal
                </p>
              </div>

              {/* Contact Section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Contacts</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">Mobile</p>
                    <p>980 5689789</p>
                    <p>9841 275897</p>
                  </div>
                  <div>
                    <p className="font-medium">Landline</p>
                    <p>01-4783972</p>
                  </div>
                </div>
              </div>

              {/* Service Time Section */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Service Time</h3>
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">MON - FRI</p>
                    <p className="italic">10 am - 8 pm</p>
                  </div>
                  <div>
                    <p className="font-medium">SAT - SUN</p>
                    <p className="italic">Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div>
                <p className="mb-4">Get in touch in social networks</p>
                <div className="flex gap-4"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-3/5">
            <form className="space-y-6">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block mb-2">What can we do for you</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Choose</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Phone Number</label>
                <div className="flex">
                  <select className="w-24 p-2 border rounded-l-md border-r-0">
                    <option value="+977">+977</option>
                  </select>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-r-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-2 border rounded-md h-32"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <footer className="bg-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo and Description Section */}
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  {/* Simple circle as logo placeholder */}
                  <img src={momo} alt="" />

                  <span className="text-teal-600 text-xl font-bold">momos</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Elit sem tempor
                  egestas molestie. Volutpat quis egestas porttitor turpis sit
                  in. Lorem nunc nullam morbi urna amet suspendisse nullam ac
                  vivamus.
                </p>
              </div>

              {/* momos Links - Exactly matches image layout */}
              <div className="col-span-1">
                <h3 className="text-teal-600 font-semibold mb-4">momos</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Our Menu
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Our Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legals Section */}
              <div className="col-span-1">
                <h3 className="text-teal-600 font-semibold mb-4">Legals</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-teal-600">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Section */}
              <div className="col-span-1">
                <h3 className="text-teal-600 font-semibold mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {/* Social Media Icons as seen in the image */}
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15274.986855241339!2d85.33437127395388!3d27.69520331306487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1739790593164!5m2!1sen!2snp"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Copyright Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm">
                Copyright ©2023 Everest Momo Pvt Ltd. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>

        <div></div>
      </div>
    </div>
  );
}

export default Home;
