// 3rd Party
import React from "react"

// Component
const Footer: React.FC = () => {
  return (
    <footer role="footer" className="p-4 text-gray-600 mt-4">
      <div className="container m-auto">
        © {new Date().getFullYear()} Jake Moening
      </div>
    </footer>
  )
}

export default Footer
