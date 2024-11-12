import React from "react";

const Footer = () => {
  return (
    <div>
       
       <div className="flex flex-col justify-center text-center bg-white mt-5 text-black mb-10">
            <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            <p className="font-thin">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <hr></hr>
      <footer className="footer justify-around text-center items-center bg-white text-black p-10 container mx-auto">
     
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
