import React from 'react'
import { FaFacebookF, FaPhone, FaEnvelope, FaGoogle } from 'react-icons/fa';

const Fourthpage = () => {
  return (
    <div className='contact' id='contact'>
      <section className="bg-gray-100 text-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className='text-orange-600'>C</span>ontact Abhiruchi Restaurant
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
          Vellore's favorite spot for authentic biryani. Get in touch with us!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Send us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-600"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-orange-600"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-lg text-gray-600 mb-4">
              For any inquiries, you can also reach out via our social media channels.
            </p>
            <div className="flex space-x-6 text-3xl text-orange-600">
              <a href="https://www.facebook.com/abhiruchivlr/" target="_blank" rel="noreferrer" className="hover:text-orange-700">
                <FaFacebookF />
              </a>
              <a href="96298 77788" target="_blank" rel="noreferrer" className="hover:text-orange-700">
                <FaPhone />
              </a>
              <a href="mailto:abhiruchi@restaurant.com" className="hover:text-orange-700">
                <FaEnvelope />
              </a>
              <a href="https://www.google.com/search?kgmid=/g/1td5vlg9&hl=en-IN&q=Abhiruchi+Multicuisine+Family+Restaurant&shndl=30&shem=lcuae&source=sh/x/loc/osrp/m5/1&kgs=6d3b787a883fdb80#lrd=0x3bad476f4bf7eb77:0xb5e9ecd5e1d01cfd,3,,,," className="hover:text-orange-700">
                <FaGoogle />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-sm">&copy; 2024 Abhiruchi Restaurant, Vellore. All rights reserved.</p>
          <p className="text-sm">Designed by Dhamodharan</p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Fourthpage
