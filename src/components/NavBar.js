import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-pink-400 text-4xl font-bold cursive tracking-widest"
          >
            Jason Speerbrecker
          </NavLink>

          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-200"
            activeClassName="text-pink-100 bg-pink-400"
          >
            Blog Post
          </NavLink>

          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-200"
            activeClassName="text-pink-100 bg-pink-400"
          >
            My Projects
          </NavLink>

          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-200"
            activeClassName="text-pink-100 bg-pink-400"
          >
            About Me
          </NavLink>
        </nav>

        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://www.facebook.com/profile.php?id=6820587" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
            <SocialIcon url="https://twitter.com/TheSahns" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
            <SocialIcon url="https://www.linkedin.com/in/jason-speerbrecker-3879b2122/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
        </div>
      </div>
    </header>
  );
}
