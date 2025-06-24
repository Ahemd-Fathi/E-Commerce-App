import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaYoutube, FaInstagram, FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="">
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="news" />
                <h2 className="mb-0 text-white">Sign Up For News Letter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="">
                <p className="text-white mb-3">
                  Demo Store <br /> No. 123 Street, New York, 11111 <br />{" "}
                  United States
                </p>
                <a href="tel" className="text-white mb-3 d-block">
                  +91 8264954234
                </a>
                <a href="email" className="text-white mb-2 d-block">
                  Demo@Exampledemo.com
                </a>
                <div className="social-icons d-flex align-items-center gap-15 mt-4">
                  <a href="#" className="fs-3 text-white">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="fs-3 text-white">
                    <FaGithub />
                  </a>
                  <a href="#" className="fs-3 text-white">
                    <FaYoutube />
                  </a>
                  <a href="#" className="fs-3 text-white">
                    <FaInstagram />
                  </a>
                  <a href="#" className="fs-3 text-white">
                    <FaPinterest />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0 text-white">
                &copy; {new Date().getFullYear()} All rights reserved | Made
                with{" "}
                <span role="img" aria-label="love">
                  ❤️
                </span>{" "}
                by Ahmed El-8ool
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
