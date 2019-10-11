// 3rd Party
import React from "react"

// Other Components
import Header from "./header"
import Footer from "./footer"

// CSS
import "./layout.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

library.add(faEnvelope)

// Interfaces
interface LayoutProps {
  children: Array<object> | object
}

// Component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      id="application"
      role="application"
      className="text-gray-900 h-screen w-screen flex flex-col"
    >
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout