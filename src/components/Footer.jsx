import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-12 px-4"
      style={{ backgroundColor: "#201022", height: "502px", width: "1520px" }}
    >
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex h-full">
          {/* Left column: Logo + Quote */}
          <div className="flex flex-col justify-start items-center px-4" style={{ flex: "1" }}>
            <div className="mb-4 justify-center items-center ">
              <img
                src="/logo.png"
                alt="Bruno Language Learning"
                className="ml-12 -ml-24 h-24"
                style={{ height: "80px", width: "auto" }}
              />
            </div>

            <p className="text-[20px] leading-relaxed max-w-md mb-2 text-center">
              "If you talk to someone in a language they understand, that goes to their head. <br />
              If you talk to them in their own language, <br />
              that goes to their heart."<br />
              Nelson Mandela
            </p>
          </div>


          {/* Right 3 columns: Quick Links, Extra Links, Socials */}
          <div className="flex flex-1 justify-around -ml-24">
            {/* Quick Links */}
            <div>
              <h3 className="text-[30px] font-[Afacad] mb-4">Quick Links</h3>
              <ul className="space-y-4 text-lg" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <li><a href="#" className="hover:text-purple-300">Home</a></li>
                <li><a href="#" className="hover:text-purple-300">About Us</a></li>
                <li><a href="#" className="hover:text-purple-300">Courses</a></li>
                <li><a href="#" className="hover:text-purple-300">Blog</a></li>
              </ul>
            </div>

            {/* Extra Links */}
            <div>
              <ul className="space-y-4 text-lg" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                <li><a href="#" className="hover:text-purple-300">Resources</a></li>
                <li><a href="#" className="hover:text-purple-300">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-300">FAQs</a></li>
                <li><a href="#" className="hover:text-purple-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Social Section */}
            <div className="text-center">
              <h3 className="text-[30px] font-[Afacad] mb-4">Stay connected and keep learning!</h3>
              <div className="flex justify-center space-x-2">
                <a href="#" className="w-10 h-10">
                  <img src="/youtube.png" alt="YouTube" className="w-full h-full object-contain hover:opacity-70" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain hover:opacity-70" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/facebook.png" alt="Facebook" className="w-full h-full object-contain hover:opacity-70" />
                </a>
                <a href="#" className="w-10 h-10">
                  <img src="/instagram.png" alt="Instagram" className="w-full h-full object-contain hover:opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Footer bottom text */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          Copyright©2025 Spanish Learning Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
