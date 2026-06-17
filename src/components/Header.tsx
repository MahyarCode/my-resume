import type React from "react";
import "./homepage/homepage.css";

const Header: React.FC = () => {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex justify-center mt-8 w-full">
        <div className="flex flex-col md:flex-row flex-nowrap m-1 md:m-0 md:w-4/5 justify-between border-2 rounded-3xl h-auto">
          <div className="text-style-header flex text-3xl text-center font-display font-bold p-4 ml-4">
            S.M. Mahyar MousaviNia
          </div>
          <div className="flex justify-center md:justify-end md:pr-4 mb-4 md:mb-4">
            <div className="flex md:mt-3 gap-5">
              <div className="">
                <button className="hover:hover:cursor-pointer">
                  <a href="https://www.linkedin.com/in/mahyar-mousavinia">
                    <img src="/images/linkedin.png" className="w-10 h-10" />
                  </a>
                </button>
              </div>
              <div className="">
                <button className="hover:hover:cursor-pointer">
                  <a href="mailto:mahyar.mousavi.1408@gmail.com">
                    <img src="/images/gmail.png" className="w-10 h-10" />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
