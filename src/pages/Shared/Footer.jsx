import React from "react";

const Footer = () => {
  return (
    <div className="my-container">
      <footer className="footer  bg-red-50 p-10 text-base-content">
        <div>
          <span className="footer-title">Cuisine</span>
          <a className="link link-hover">Fast Food</a>
          <a className="link link-hover">Salad</a>
          <a className="link link-hover">Drinks</a>
          <a className="link link-hover">Steak</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Branches</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe to our Newsletter</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="your email address"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
