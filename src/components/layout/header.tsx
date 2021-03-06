// 3rd Party
import { Link } from "gatsby"
import React, { useState } from "react"

// Images
import Logo from "./logo"

// Component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hamburger = () => (
    <div className="absolute md:hidden top-0 right-0">
      <button
        className="flex items-center px-4 py-4 mr-3 mt-3 border rounded border-white hover:text-black hover:bg-white hover:border-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="fill-current h-6 w-6"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  )
  const internalLink = (path: string, title: string) => (
    <Link
      to={path}
      className="antialiased mt-4 md:mt-0"
      onClick={() => setIsMenuOpen(false)}
    >
      {title}
    </Link>
  )
  const externalLink = (path: string, title: string) => (
    <a
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      className="antialiased mt-4 md:mt-0"
      onClick={() => setIsMenuOpen(false)}
    >
      {title}
    </a>
  )

  const logoSection = () => (
    <Link
      to="/"
      id="title"
      className="text-xl italic flex flex-col"
      onClick={() => setIsMenuOpen(false)}
    >
      <Logo />
    </Link>
  )
  return (
    <header role="banner" className="sticky top-0 p-4 bg-black text-white z-10">
      <div className="container m-auto flex">
        <div
          id="nav-group"
          className="flex w-full md:items-center flex-col md:flex-row"
        >
          {logoSection()}
          <div
            id="links"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:block flex justify-between text-lg md:text-sm lg:text-base uppercase flex-grow text-left md:text-right`}
          >
            <div className="flex flex-col md:flex-row items-center md:inline-block">
              {internalLink("/projects", "projects")}
              <span className="p-2 hidden md:inline-block">/</span>
              {externalLink(
                "https://docs.google.com/document/d/1modBbvDSMCssA-RuDW4qoUXoYe3xy1mXWMa8Ycj8KDQ/edit?usp=sharing",
                "resume"
              )}
              <span className="p-2 hidden md:inline-block">/</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:inline-block">
              {internalLink("/writing", "writing")}
              <span className="p-2 hidden md:inline-block">/</span>
              {externalLink("https://github.com/jaboc83", "github")}
              <span className="p-2 hidden md:inline-block">/</span>
            </div>
            <div className="flex flex-col md:flex-row items-center md:inline-block">
              {externalLink("https://twitter.com/jaboc83", "twitter")}
              <span className="p-2 hidden md:inline-block">/</span>
              {externalLink(
                "https://www.linkedin.com/in/jake-moening-6263619/",
                "linkedin"
              )}
            </div>
          </div>
        </div>
        {hamburger()}
      </div>
    </header>
  )
}
export default Header
